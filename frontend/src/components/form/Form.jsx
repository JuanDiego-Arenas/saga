import React from 'react';
import './styles/styleForm.css';
import logo_sena from '../img/logo-SENA.png'


const Form = () => {
    return (
        <form>
            <div className='c-left'></div>
            <label>
                <img src={logo_sena}></img>
                <span>Usuario:</span>
                <div className='container'>
                    <input type="text" name="name" id='name' placeholder='Nombre'/>
                    <i className="bi bi-person-circle"></i>
                </div>

                <span id='password'>Contraseña:</span>                
                <div className='container'>
                    <input type="password" name="password" placeholder='Contraseña'/>
                    <i className="bi bi-key"></i>
                </div>

                <button type="submit" value="Submit" className='submit' >Ingresar</button>
            </label>
        </form>
    );
}

export default Form;