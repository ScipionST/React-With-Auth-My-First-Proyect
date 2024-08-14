import { useNavigate } from 'react-router-dom'
import { useAuth } from '../UseAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Apertura.css'

const HOST = import.meta.env.VITE_HOST

const Apertura = () => {
  const { checkAuthstatus, serverStatus, authResponse } = useAuth()

  const navigate = useNavigate()

  if (!authResponse.isAuthenticated)
    navigate('/')

  const [open, setOpen] = useState<boolean>(false)
  const [gateMessage, setGateMessage] = useState<string>('Sin conexión...')
  const [timeRemaining, setTimeRemaining] = useState<number>(0)

  const handleOpen = async () => {
    setGateMessage('Esperando respuesta...')
    try {
      await checkAuthstatus()
      const response = await axios.post(`${HOST}/apertura`)
      setOpen(true)
      setGateMessage(response.data.message)
      setTimeRemaining(Math.round(response.data.time / 1000))
    } catch (error) {
      setGateMessage('Error al conectar al sistema...')
      setOpen(false)
    }
  }

  useEffect(() => {
    let timer: number
    if (timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => Math.max(Math.round(prev - 1), 0));
      }, 1000)
    } else {
      setOpen(false);

      setGateMessage('Sin activaciones remotas...')
    }

    return () => {
      clearInterval(timer)
    }
  }, [timeRemaining])


  return (
    <>
      <div className='apertura-cont'>
        <div className='apertura'>
          <h1>Sistema de Apertura</h1>
          <div className='open-cont'
            onClick={handleOpen}
          >
            <div
              className='gate'
            >
              <div className={`gate-animation ${open ? 'starting' : ''}`}>
                <div className='gate-left'></div>
                <div className='gate-right'></div>
              </div>
            </div>
          </div>
          <span className='gate-state'>{gateMessage}</span>
          {timeRemaining > 0 && <span>{`Tiempo restante: ${timeRemaining} segundos`}</span>}
          <div className='server-status'>
            <span>{`Estado del sistema: ${serverStatus}`}</span>
            <div className={`status ${serverStatus === 'online' ? 'online' : 'offline'}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apertura
