import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { logout } from '../../api/auth'
import SAGA from '../../assets/SAGA.svg'
import './stylesNav.css'

import { CiLogout } from 'react-icons/ci';

function NavBar() {

    const { user } = useAuth()

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <img src={SAGA} width={'50px'}></img>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='#'>Asistencias</Link>
                </li>
                <li>
                    <Link to='/cardsPage'>Cards</Link>
                </li>
                <li>
                    <Link to='#'>Noticias</Link>
                </li>
            </ul>
            <div className='flex h-full gap-3' style={{ alignItems: 'center' }}>
                <Link to='/profile' ><img className='imgAvatar' src={ user.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? user.avatar : `http://localhost:3000${user.avatar}` }></img></Link>
                <form className='navForm'>
                    <button type='submit' onClick={logout} style={{fontSize: '2em', color: '#39A900'}}><CiLogout/></button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar