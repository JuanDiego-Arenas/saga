import Barcode from 'react-jsbarcode';
import './CardProfile.css'

const CardProfile = ({ user }) => {

    return (
        <div className='cardProfile'>
            <div>
                <img src={user.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? user.avatar : `http://localhost:3000${user.avatar}`} width={'150px'} />
            </div>
            <h2>Nombre: <b>{user.username.toUpperCase()}</b></h2>
            <h2>{user.tipo} {user.cc}</h2>
            <h2>Correo: {user.email}</h2>
            <Barcode value={user.cc} options={{
                format: 'code128',
                displayValue: false, 
                lineColor: '#39A900',
                width: 2,
                height: 50
            }} renderer="svg" />
        </div>

    );
}

export default CardProfile;
