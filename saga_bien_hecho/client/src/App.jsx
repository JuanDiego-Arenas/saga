import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

//TODO Pages
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'
import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <AuthProvider>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LoginPage />} />
            <Route path='/register' element={ <RegisterPage />} />
            
            {/* // TODO Rutas Protegidas */}
            <Route element={<ProtectedRoute/>}>
              <Route path='/home' element={ <HomePage/> } />
              <Route path='/cardsPage' element={ <CardPage />} />
              <Route path='/Profile' element={ <ProfilePage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
