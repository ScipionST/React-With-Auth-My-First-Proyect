import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../UseAuth'
import exitLogo from '../../assets/buttonExit.svg'
import './css/Menu.css'

const Menu = () => {
  const { authResponse, handleLogout } = useAuth()

  const navigate = useNavigate()

  const logout = async () => {
    await handleLogout()
    navigate('/')
  }

  return (
    <>
      <div className='menu-cont'>
        <div className='links'>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            {!authResponse.isAuthenticated && <li><Link to='/login'>Iniciar Sesión</Link></li>}
            {authResponse.isAuthenticated &&
              (authResponse.role === 'user' || authResponse.role === 'admin') &&
              <li><Link to='/apertura'>Apertura</Link></li>
            }
            {(authResponse.isAuthenticated && authResponse.role === 'admin') &&
              <li><Link to='/gestion'>Gestion</Link></li>
            }
            {authResponse.isAuthenticated &&
              <button
                type='button'
                title='logout'
                onClick={logout}
              >
                <img src={exitLogo} alt="" />
              </button>
            }
          </ul>
        </div>
      </div>
    </>
 )
}

export default Menu
