import Barcode from 'react-jsbarcode';
import './CardProfile.css'

const CardProfile = ({ user }) => {

    console.log(user)

    return (
        <div className='cardProfile'>
            <div>
                <img src={user.avatar == `avatars/userdefault.jpg` ? `${import.meta.env.VITE_BASE_URL}/${user.avatar}` : `${import.meta.env.VITE_BASE_URL}/avatars/userdefault.jpg`} width={'150px'} />
            <div>
            </div>
            <div className='info'>
            <h2><b>{user.username.toUpperCase()}</b></h2>

            <h2>{user.tipo} {user.cc}</h2>
            <h2>{user.email}</h2>
            <h2 style={{ textTransform: 'capitalize' }}>{ user.rol == 'bienestar' ? 'Bienestar Al Aprendiz' : user.rol }</h2>
            <h2>{ user.fichaNumero === undefined ? '' : `Ficha N° ${user.fichaNumero}` }</h2>
            
            </div>
            <div className='barcode'>
            <Barcode value={user.cc} options={{
                format: 'code128',
                displayValue: false, 
                lineColor: '#39A900',
                width: 2,
                height: 50
            }} renderer="svg" />
            </div>
            </div>
            
            <h4>{ user.fichaNombre === undefined ? '' : `Nombre De Formacion: ${user.fichaNombre}` }</h4>
            
        </div>

        

    );
}

export default CardProfile;
