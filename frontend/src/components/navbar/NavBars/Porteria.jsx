import { Link } from 'react-router-dom'
import { logout } from '../../../api/auth'
import SAGA from '../../../assets/svg/SAGA.svg'
import '../stylesNav.css'

import { CiLogout } from 'react-icons/ci';

function Porteria({ user }) {
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
                    <Link to='/attendsPage'>Asistencias</Link>
                </li>
            </ul>
            <div className='flex h-full gap-3' style={{ alignItems: 'center' }}>
                <Link to='/profile' ><img className='imgAvatar' src={user.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? `${import.meta.env.VITE_BASE_URL}/avatars/userdefault.jpg` : `${import.meta.env.VITE_BASE_URL}/${user.avatar}`}></img></Link>
                <form className='navForm'>
                    <button type='submit' onClick={logout} style={{ fontSize: '2em', color: '#39A900' }}><CiLogout /></button>
                </form>
            </div>
        </nav>
    )
}

export default Porteria