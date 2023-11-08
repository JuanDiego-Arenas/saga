import { useAuth } from '../../context/AuthContext'
import './stylesNav.css'

import Admin from './NavBars/admin'
import Porteria from './NavBars/porteria'


function NavBar() {
    const { user } = useAuth()
    const rol = user.rol

    return (
        <>
            {
                rol === 'admin' ? <Admin user={user} /> : null ||
                rol === 'porteria' ? <Porteria user={user}/> : null
            }
        </>
    )
}

export default NavBar