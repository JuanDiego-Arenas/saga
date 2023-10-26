import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

//TODO Pages
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'

function App() {

  return (
    <AuthProvider>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/login' element={ <LoginPage />} />
            <Route path='/register' element={ <RegisterPage />} />
            <Route path='/cardsPage' element={ <CardPage />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App