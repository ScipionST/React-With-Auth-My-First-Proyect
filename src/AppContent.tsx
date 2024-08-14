import { Routes, Route, useLocation } from "react-router-dom"
import { useAuth } from "./UseAuth"
import Menu from "./components/menus/Menu"
import Gestión from "./pages/Gestion"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import { useEffect } from "react"
import Apertura from "./pages/Apertura"
import NotFoundRedirect from "./pages/NotFound"
import AppLoadingRoute from "./AppLoader"

const AppContext = () => {
  const { checkAuthstatus } = useAuth()
  const location = useLocation()

  useEffect(() => {
    checkAuthstatus()
    console.log('CheckAuthStatus: AppContent')
  }, [location.pathname])

  return (
    <>
      <Menu/>
      <div className='app-cont'>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/apertura' element={<Apertura/>}/>
        <Route path="/gestion" element={<AppLoadingRoute><Gestión/></AppLoadingRoute>}/>
        <Route path="*" element={<NotFoundRedirect/>}/>
      </Routes>
      </div>
    </>
  )
}

export default AppContext
