import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <p>Redirigiendo a la página de inicio...</p>
    </div>
  )
}

export default NotFoundRedirect