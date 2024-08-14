import './css/Login.css'
import Input from "../components/inputs/Input"
import { useEffect, useState } from 'react'
import { useAuth } from '../UseAuth'
import ButtonSubmit from '../components/buttons/ButtonSubmit'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { authResponse, handleLogin } = useAuth()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [authChecked, setAuthChecked] = useState<boolean>(false)

  const navigate = useNavigate()

  const login = async () => {
    try {
      await handleLogin(username, password)
      setAuthChecked(true)
    } catch (error) {
      console.error('No es posible iniciar sesión en este momento.')
    }
  }

  useEffect(() => {
    if (authChecked) {
      if (authResponse.role === 'admin') {
        navigate('/gestion')
      } else if (authResponse.role === 'user') {
        navigate('/apertura')
      }
    }
    if (!authChecked && authResponse.isAuthenticated) return navigate ('/')
  }, [authResponse, authChecked, navigate])

  return (
    <>
      {!authResponse.isAuthenticated && (
      <div className="login-cont">
        <h1>Login</h1>
        <div className='login-inputs'>
          <Input
            type="text"
            placeholder="Nombre de usuario..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonSubmit
            type='submit'
            title='login'
            text='Iniciar sesión'
            onClick={login}
          />
        </div>
      </div>
      )}
    </>
  )
}

export default Login
