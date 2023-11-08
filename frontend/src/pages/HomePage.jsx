import React from 'react';
import '../styles/HomePage.css'
import NavBar from '../components/navbar/NavBar'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import youtube from '../assets/svg/youtube.svg'
import portatil from '../assets/portatil.png'
import HeroImage from '../../public/images/grupo.jpg'
import HeroImage2 from '../../public/images/image1.webp'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <section className='flex flex-col lg:flex-row gap-10 lg:gap-12 mt-16'>
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 ">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
                </div>
                <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
                <div className=" flex flex-col justify-center  text-center lg:text-left lg:py-7 xl:py-8 
                                    lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2" style={{ alignItems: 'center' }}>
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight mt-5
                        font-bold" style={{ textAlign: 'left !important' }}>
                        Bienvenidos a <span style={{ color: '#39a900', width: 'fit-content' }}>SAGA</span> 

                        <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br " style={{ color: '39a900' }}>SAGA</span> El Futuro del SENA.
                    </h1>
                    <p className="mt-8 max-w-screen-sm p-3 text-xl">
                        SAGA es un proyecto formativo, con el objetivo de lograr una mejor gestión en la toma de asistencias, también cuenta con un apartado de noticias</p>
                    <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">

                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src={HeroImage} />
                </div>
            </section>
            <section className='flex flex-col lg:flex-row gap-10 lg:gap-12'>
                    <img src={HeroImage2} />
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
