import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

//TODO Pages
import RegisterPage from './pages/RegisterPage'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'
import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from './ProtectedRoute'
import NoticiasPage from './pages/NoticiasPage'
import AttendsPage from './pages/AttendsPage'

function App() {

  return (
    <AuthProvider>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <LoginPage />} />
            <Route path='/register' element={ <RegisterPage />} />
            <Route path='/forgot_password' element={ <ForgotPassword />} />
            <Route path='/password_reset/:tokenresetpassword' element={ <ResetPassword />} />
            
            {/* // TODO Rutas Protegidas */}
            <Route element={<ProtectedRoute/>}>
              <Route path='/home' element={ <HomePage/> } />
              <Route path='/cardsPage' element={ <CardPage />} />
              <Route path='/Profile' element={ <ProfilePage />} />
              <Route path='/noticias' element={ <NoticiasPage />} />
              <Route path='/attendsPage' element={ <AttendsPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
