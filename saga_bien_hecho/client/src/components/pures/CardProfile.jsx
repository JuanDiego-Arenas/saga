import Barcode from 'react-jsbarcode';
import './CardProfile.css'

const CardProfile = ({ user }) => {

    return (
        <div className='cardProfile'>
            <div>
                <img src={`http://localhost:3000/${user.avatar}`} width={'150px'} />
            </div>
            <h2>Nombre: {user.username.toUpperCase()}</h2>
            <h2>{user.tipo} {user.cc}</h2>
            <h2>{user.email}</h2>
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
