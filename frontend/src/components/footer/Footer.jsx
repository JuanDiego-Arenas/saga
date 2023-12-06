import React from 'react';
import LogoSena from '../../assets/svg/LogoSena.svg';
import facebook from '../../assets/svg/facebook.svg'
import youtube from '../../assets/svg/youtube.svg'
import twitter from '../../assets/svg/twitter.svg'
import instagram from '../../assets/svg/instagram.svg'
import '../../styles/HomePage.css';

function Footer () {
    return (
        <section className="mt-16" style={{width: '100vw'}}>
<footer className="relative bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-400 pt-28 rounded-t-3xl">
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
    <div className="pb-5 relative overflow-hidden mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5" style={{marginBottom: '50px'}}>
        
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary"></span>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative">
            <div className="col-span-2 lg:col-span-1 h-auto flex flex-col">
                <div className="h-full">
                    <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" className="relative flex items-center gap-1" target='_blank'>
                        <div className="relative w-10 h-10 overflow-hidden flex rounded-xl">
                            <img src={LogoSena} />
                        </div>
                        <div className="inline-flex text-lg font-semibold text-heading-1">
                            SENA
                        </div>
                    </a>
                    <p className="mt-8 md:text-lg text-heading-3">
                        ❝Una entidad de clase mundial❞
                    </p>
                </div>

                <div style={{display: 'flex', width: '100px', position: 'absolute', left: '85%'}}>
                  <ul>
                  <h1 style={{fontWeight: '600', fontSize: '25px'}}>Equipo</h1>
                    <li><a href='https://github.com/JuanferGG' target='_blank'>JuanferGG</a></li>
                    <li><a href='https://github.com/JuanDiego-Arenas' target='_blank'>Juan Diego</a></li>
                    <li><a href='https://github.com/XH0PE' target='_blank'>Diego Polo</a></li>
                  </ul>
                </div>

                <div className="min-h-max flex items-center gap-4 text-heading-3 mt-8">
                    <a href="https://web.facebook.com/SENA/?_rdc=1&_rdr" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <img src={facebook}/>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="https://www.youtube.com/@SENAComunica" target='_blank' className="transition hover:text-heading-1 hover:scale-105">
                        <img src={youtube}/>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="https://twitter.com/SENAComunica" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <img src={twitter}/>
                        <span className="sr-only">social link</span>
                    </a>

                    <a href="https://www.instagram.com/senacomunica/?hl=es-la" target="_blank" className="transition hover:text-heading-1 hover:scale-105">
                        <img src={instagram}/>
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
    )
}

export default Footer
