import React from 'react';
import '../styles/HomePage.css'
import NavBar from '../components/navbar/NavBar'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.svg'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <section className='bienv' style={{ marginTop: '5em' }}>
                <h1>Bienvenido a SAGA !</h1>
                <h3>primer apartado</h3>
                <div className='redes'> 
                <a href="https://www.facebook.com/diegofernando.polohome" target={'_blank'}><img src={facebook} /></a>
                <a href="https://github.com/JuanDiego-Arenas/saga" target={'_blank'}><img src={github} /></a>
                <a href="https://www.youtube.com/channel/UCN8U1HfruznSOR2Gy-TkHJg" target={'_blank'}><img src={youtube} /></a>
                <a href="https://www.facebook.com/diegofernando.polohome" target={'_blank'}><img src={facebook} /></a>
                </div>
                <div>
                    segundo apartado
                </div>
            </section>
        </div>
    );
}

export default HomePage;
