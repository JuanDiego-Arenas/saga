import { useAuth } from '../../context/AuthContext'
import './stylesNav.css'

import Admin from './NavBars/admin'
import Porteria from './NavBars/porteria'
import Aprendiz from './NavBars/Aprendiz'
// import Aprendiz from './NavBars/Aprendiz'


function NavBar() {
    const { user } = useAuth()
    const rol = user.rol

    return (
        <>
            {
                rol === 'porteria' ? <Porteria user={user}/> : null ||
                rol === 'admin' ? <Admin user={user} /> : <Aprendiz user={user}/>
            }
        </>
    )
}

export default NavBar