import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { logout } from '../../../api/auth'
import SAGA from '../../../assets/svg/SAGA.svg'
import '../stylesNav.css'

import { CiLogout } from 'react-icons/ci';

function Admin( { user } ) {
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
                    <Link to='/dashboarAdmin'>DashBoard</Link>
                </li>
                <li>
                    <Link to='/attendsPage'>Asistencias</Link>
                </li>
                <li>
                    <Link to='/cardsPage'>Cards</Link>
                </li>
                <li>
                    <Link to='/noticias'>Noticias</Link>
                </li>
                <li>
                    <Link to='#'>Comunidad SENA</Link>
                </li>
            </ul>
            <div className='flex h-full gap-3' style={{ alignItems: 'center' }}>
                <Link to='/profile' ><img className='imgAvatar' src={user.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? user.avatar : `http://localhost:3000${user.avatar}`}></img></Link>
                <form className='navForm'>
                    <button type='submit' onClick={logout} style={{ fontSize: '2em', color: '#39A900' }}><CiLogout /></button>
                </form>
            </div>
        </nav>
    )
}

export default Admin