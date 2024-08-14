import { createContext, ReactNode, useState } from "react";
import axios from "axios";

const HOST = import.meta.env.VITE_HOST

interface AuthResponse {
  isAuthenticated: boolean
  user: string
  role: string
}

interface AuthContext {
  isLoading: boolean
  isLoadingRoute: boolean
  serverStatus: string
  authResponse: AuthResponse
  checkAuthstatus: () => Promise<void>
  handleLogin: ( username: string, password: string ) =>  Promise<void>
  handleLogout: () => Promise<void>
}

interface AuthProvider {
    children: ReactNode
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export const AuthProvider: React.FC<AuthProvider> = ({ children }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoadingRoute, setIsLoadingRoute] = useState<boolean>(true)
  const [isLoadingRouteTimeout, setIsLoadingRouteTimeout] = useState <number | null>(null)
  
  const [authResponse, setAuthResponse] = useState<AuthResponse>({
    isAuthenticated: false,
    user: '',
    role: ''
  })

  const [serverStatus, setServerStatus] = useState<string>('verificando...')

  axios.defaults.withCredentials = true

  const checkServerStatus = async () => {
    try {
      const response = await axios.get(`${HOST}/`)
      setServerStatus(response.data.status)
    } catch (error) {
      console.error('No es posible contactar al servidor')
    }
  }

  const checkAuthstatus = async () => {

    if (isLoadingRouteTimeout) {
      clearTimeout(isLoadingRouteTimeout)
    }

    setIsLoadingRoute(true)
    
    try {
      await checkServerStatus()
      const response = await axios.get<AuthResponse>(`${HOST}/auth`)
      setAuthResponse({
        isAuthenticated: true,
        user: response.data.user || '',
        role: response.data.role || ''
      })
    } catch (error) {
      setAuthResponse({
        isAuthenticated: false,
        user: '',
        role: ''
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
      console.error('No es posible verificar el estado de la sesión')

      const timeoutId = window.setTimeout(() =>{
        setIsLoadingRoute(false)
      }, 5000)

      setIsLoadingRouteTimeout(timeoutId)

    } finally {
      setTimeout(() => {
        setIsLoadingRoute(false)
        setIsLoading(false)
      }, 1000);
    }
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      await axios.post(`${HOST}/login`, { username, password })
      setServerStatus('online')
      await checkAuthstatus()
    } catch (error) {
      setServerStatus('offline')
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post(`${HOST}/logout`)
      setAuthResponse({
        isAuthenticated: false,
        user: '',
        role: ''
      })
      await checkAuthstatus()
    } catch (error) {
      alert('Error on logout')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoadingRoute,
        serverStatus,
        authResponse,
        checkAuthstatus,
        handleLogin,
        handleLogout
      }}  
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
