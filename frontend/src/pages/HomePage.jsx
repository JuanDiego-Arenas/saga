import React from 'react';
import '../styles/HomePage.css'
import NavBar from '../components/navbar/NavBar'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import youtube from '../assets/svg/youtube.svg'
import portatil from '../assets/portatil.png'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <section className='bienv' style={{ marginTop: '4em' }}>
                <div className='s-info'>
                </div>
                <h1>Bienvenido a SAGA !</h1>
                <div><h3>Seguimos trabajando para poder presentar un proyecto y solucion agradable a la vista</h3></div>
                <div className='img'><img src={portatil} /></div>
            </section>
            <section className='more'>
                <div>
                    <h1>Aqui va la segunda seccion</h1>
                </div>
            </section>
        </div>
    );
}

export default HomePage;

{/* <div className='redes'> 
                <a href="https://www.facebook.com/diegofernando.polohome" target={'_blank'}><img src={facebook} /></a>
                <a href="https://github.com/JuanDiego-Arenas/saga" target={'_blank'}><img src={github} /></a>
                <a href="https://www.youtube.com/channel/UCN8U1HfruznSOR2Gy-TkHJg" target={'_blank'}><img src={youtube} /></a>
                <a href="https://www.facebook.com/diegofernando.polohome" target={'_blank'}><img src={facebook} /></a>
                </div> */}
