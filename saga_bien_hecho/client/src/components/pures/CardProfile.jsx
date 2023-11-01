import Barcode from 'react-jsbarcode';
import './CardProfile.css'

const CardProfile = ({ user }) => {

    const randomId = Math.floor(Math.random() * 1000).toString()

    return (
        <div className='cardProfile'>
            <div>
                <img src={user.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? user.avatar : `http://localhost:3000${user.avatar}`} width={'150px'} />
            
            </div>
            <div className='info'>
            <h2><b>{user.username.toUpperCase()}</b></h2>

            <h2>{user.tipo} {user.cc}</h2>
            <h2>{user.email}</h2>
            <h2>Aprendiz</h2>
            <h2>Ficha de Formacion N°</h2>
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
            <div className='inst'>
                
            </div>
        </div>

    );
}

export default CardProfile;
