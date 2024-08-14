import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import './App.css'
import AppContext from './AppContent'

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <AppContext/>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
