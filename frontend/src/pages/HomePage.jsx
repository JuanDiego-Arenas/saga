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
        <section className="features">
        <section className='flex lg:flex-row gap-10 lg:gap-12'>
          <div className='flex midmd:flex-row gap-10 lg:gap-12 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5'>
            <div className='max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto'>
              <div className='w-full h-80 sm:h-96 midmd:h-full relative'>

                <img src={LogoSena} alt='Logo SENA' style={{ width: '900px', marginTop: '200px' }} id='logos' className='logo w-auto left-1/2 -translate-x-1/2 absolute top-0 max-h-full' />
              </div>
            </div>
            <div id='list' className='mt-14 flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col '>
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
        </section>
        <hr style={{marginTop: '50px', height: '2px', backgroundColor: '#84df57',}}></hr>
        <section className="features">
    <div className="mt-14 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex midmd:flex-row gap-10 lg:gap-12" style={{marginBottom: '50px'}}>
        
        <div id='list' className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
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
            
                    <img src={Saga} id='logos' alt="banner image" 
                    className=" w-auto left-1/2 -translate-x-1/2 absolute bottom-25 max-h-full" style={{width: "100em", marginTop: '300px'}} />
                </div>
            </div>
        </div>
    </div>
</section>

      </div>
    </>
  );
};

<section className="mt-16">
<footer className="relative bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 pt-28 rounded-t-3xl">
    <div className="absolute right-0 top-0 h-full w-full flex justify-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
            <span
              className="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FFFFFF] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"
            ></span>
          </div>
      </div>

      <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
            <span
              className="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FFFFFF] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"
            ></span>
          </div>
      </div>
    <div className="pb-8 relative overflow-hidden mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5">
        
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary"></span>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative">
            <div className="col-span-2 lg:col-span-1 h-auto flex flex-col">
                <div className="h-full">
                    <a href="#" className="relative flex items-center gap-1">
                        <div className="relative w-10 h-10 overflow-hidden flex rounded-xl">
                            <img src={LogoSena} />
                        </div>
                        <div className="inline-flex text-lg font-semibold text-heading-1">
                            SAGA
                        </div>
                    </a>
                    <p className="mt-8 md:text-lg text-heading-3">
                        “Sé bueno con los nerds. Es muy probable que termines trabajando para uno de ellos” - Bill Gates
                    </p>
                </div>

                <div className="min-h-max flex items-center gap-4 text-heading-3 mt-8">
                    <a href="https://www.facebook.com/diegofernando.polohome/" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="#" className="transition hover:text-heading-1 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="https://twitter.com/ekisjope" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="https://www.facebook.com/diegofernando.polohome/" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span className="sr-only">social link</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div className=" bg-gradient-to-tl from-box-bg py-2 relative">
        <div className='mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5'>
            <div className="flex justify-between items-center gap-6 md:text-lg text-heading-3">
                <div>
                    <span id="year"></span> SAGA. Todos los derechos reservados
                </div>
                <div>
                    Instructor lider <a href="https://github.com/hdtoledo" target="_blank" className="font-semibold">hdtoledo</a>
                </div>
            </div>
        </div>
    </div>
    </footer>
    </section>


export default HomePage;