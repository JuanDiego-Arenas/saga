import React from 'react';
import '../styles/HomePage.css';
import NavBar from '../components/navbar/NavBar';
import HeroImage from '../../public/images/grupo.jpg';
import LogoSena from '../assets/svg/LogoSena.svg';
import Check from '../assets/svg/check.svg';
import Saga from '../assets/svg/SAGA.svg'

const HomePage = () => {
  return (
    <>
      <div>
        <NavBar />
        <section className='flex flex-col lg:flex-row gap-10 lg:gap-12 mt-20' style={{marginTop: '100px'}}>
          <div className='absolute w-full lg:w-1/2 inset-y-0 lg:right-0 '>
          </div>
          
          <div
            className=' flex flex-col justify-center  text-center lg:text-left lg:py-7 xl:py-8 
                                    lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2'
            style={{ alignItems: 'center'}}
          >
            <h1
              className='text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight mt-5
                        font-bold'
              style={{ textAlign: 'left !important' }}
            >
              Bienvenidos a <span style={{ color: '#39a900', width: 'fit-content' }}>SAGA</span>
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-br ' style={{ color: '#39a900' }}></span>{' '}
              El Futuro del SENA
            </h1>
            <p className='mt-8 max-w-screen-sm p-3 text-xl'>
              SAGA es un proyecto formativo, con el objetivo de lograr una mejor gestión en la toma de asistencias, también cuenta con un apartado de noticias.
            </p>
            <div className='mt-10 w-full flex max-w-md mx-auto lg:mx-0'>
              <div className='flex sm:flex-row flex-col gap-5 w-full'></div>
            </div>
          </div>
          <div className='flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl'>
            <img
              src={HeroImage}
              className='lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96'
              style={{ width: '2350px' }}
              alt='Hero'
            />
          </div>
        </section>
        <hr style={{marginTop: '50px', height: '2px', backgroundColor: '#84df57'}}></hr>
        <section className='flex lg:flex-row gap-10 lg:gap-12'>
          <div className='flex midmd:flex-row gap-10 lg:gap-12 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5'>
            <div className='max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto'>
              <div className='w-full h-80 sm:h-96 midmd:h-full relative'>

                <img src={LogoSena} alt='Logo SENA' style={{ width: '900px', marginTop: '60px' }} className='logo w-auto left-1/2 -translate-x-1/2 absolute top-0 max-h-full' />
              </div>
            </div>
            <div className='mt-14 flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col '>
              <h1 style={{color: '#39a900'}} className='text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl'>Beneficios Clave de SAGA:</h1>
              <ul className='mt-8 space-y-4 text-heading-3 font-medium'>
                <li className='benefits'>
                  <span className='font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center'>
                    <img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Optimización del Tiempo:</h1>
                    
                  </span>
                  <br />
                  <br /> SAGA simplifica la toma de asistencias y la gestión de eventos, lo que significa menos tiempo invertido en tareas administrativas tediosas y más tiempo dedicado a lo que realmente importa: la educación.
                </li>
                <li class="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center">
                    <img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Mejora en la Toma de Decisiones:</h1>
                    </span>  
                    <br />
                    <br /> 
                    Con acceso a datos precisos en tiempo real, los líderes del SENA pueden tomar decisiones informadas para mejorar la eficiencia y la calidad de la formación.
                    
                </li>
                <li class="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Reducción de Errores Administrativos:</h1>
                    </span>  
                    <br/>
                    <br/>
                    SAGA elimina la posibilidad de errores humanos en la toma de asistencias, lo que garantiza un registro preciso y confiable de las actividades de los aprendices.
                    
                </li>
                <li class="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Facilita la Comunicación:</h1></span>  
                    <br/>
                    <br/>
                    Nuestra plataforma mejora la comunicación entre instructores, coordinadores académicos y estudiantes, permitiendo una interacción más fluida y efectiva.
                    
                </li>
              </ul>
            </div>
          </div>
          
        </section>
        <hr style={{marginTop: '50px', height: '2px', backgroundColor: '#84df57',}}></hr>
        <section id="features">
    <div className="mt-14 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex midmd:flex-row gap-10 lg:gap-12" style={{marginBottom: '50px'}}>
        
        <div className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
            <h1 style={{color: '#39a900'}} className='text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl'>
                Características Destacadas de SAGA:            
            </h1>
            
            <ul className="mt-8 space-y-4 text-heading-3 font-medium">
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check}/><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Interfaz Intuitiva:</h1></span>  
                    <br/>
                    <br/>
                    SAGA ofrece una interfaz fácil de usar que no requiere conocimientos técnicos avanzados. Los usuarios pueden comenzar a utilizarlo de inmediato.
                    
                </li>
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Generación de Informes en Tiempo Real:</h1></span>  
                    <br/>
                    <br/>
                    Accede a informes detallados y actualizados en tiempo real sobre la asistencia de los aprendices y el desempeño en eventos, clases y reuniones.                    

                </li>
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check}/><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Integración Completa:</h1></span>  
                    <br/>
                    <br/>
                    SAGA se integra sin problemas con otros sistemas utilizados en el SENA, lo que simplifica la administración y el flujo de datos.
                    
                </li>
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check}/><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Seguridad y Privacidad:</h1></span>  
                    <br/>
                    <br/>
                    La seguridad de los datos es una prioridad en SAGA. Utilizamos las últimas medidas de seguridad para proteger la información confidencial de los usuarios.
                    
                </li>
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Soporte Técnico Confiable:</h1></span>  
                    <br/>
                    <br/>
                    Nuestro equipo de soporte técnico está disponible para ayudarte en cualquier momento, garantizando una experiencia sin problemas con SAGA.
                    
                </li>
                <li className="benefits">
                    
                    <span className="font-bold bg-box-bg rounded-full w-30 h-8 mr-3 text-primary inline-flex justify-center items-center"><img src={Check} /><h1 style={{marginLeft: '10px', fontSize: '20px'}}>Personalización Flexible:</h1></span>  
                    <br/>
                    <br/>
                    Adaptamos SAGA a las necesidades específicas de tu institución, lo que garantiza que obtengas una solución que se ajusta perfectamente a tu entorno de formación.
                    
                </li>
            </ul>
        </div>

        <div className="max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto">
            <div className="max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto">
                <div className="w-full h-80 sm:h-96 midmd:h-full relative">
            
                    <img src={Saga} alt="banner image" 
                    // style={{width:"1240px", height:"1485px"}}
                    className=" w-auto left-1/2 -translate-x-1/2 absolute bottom-25 max-h-full" style={{width: "100em"}} />
                </div>
            </div>
        </div>
    </div>
</section>

      </div>
    </>
  );
};

export default HomePage;