import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LogoSena from '../assets/svg/LogoSena.svg'
import imagenSlider from '../assets/imgs/img_01.jpg'
import '../styles/loginStyles.css'

function LoginPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signin, isAuthenticate, errors: signinErrors } = useAuth()
    const { user } = useAuth()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticate) navigate('/home')
    }, [isAuthenticate])

// console.log(user.rol === null ? '' : user.rol)

    return (
        <section style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className='formLogin z-50'>
                <div className='slider'>
                    <img src={imagenSlider}></img>
                    
                </div>
                {/* // TODO Form Login */}
                <div>
                    <form
                        className='formRight'
                        onSubmit={onSubmit}
                    >
                        <img src={LogoSena} alt='Logo SENA' width={'160px'}></img>
                        <h3>Usuario:</h3>
                        <input
                            type="text"
                            {...register('cc', { required: true })}
                            className="inputForm"
                            placeholder="Usuario"
                        />
                        {errors.cc && (<p className="text-red-500">Usuario es necesario</p>)}
                        <h3>Contraseña:</h3>
                        <input
                            type="password"
                            {...register('password', { required: true })}
                            className="inputForm"
                            placeholder="Contraseña"
                        />

                        {
                            signinErrors.map((error, i) => <div key={i} className="bg-red-500 p-2 text-white my-2">{error}</div>)
                        }

                        {errors.password && (<p className="text-red-500">Contraseña de usuario es necesario</p>)}

                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                            Entrar
                        </button>

                        <p className='flex gap-x-2 justify-between text-black'>
                            <Link to='/forgot_password' className='text-sky-300'>¿Olvidaste tu contraseña?</Link>
                        </p>
                        <p className='flex gap-x-2 justify-between text-black'>
                            No tienes cuenta? <Link to='/register' className='text-sky-300'>Sign up</Link>
                        </p>

                    </form>

                </div>
            </div>

        </section>
    )

}

export default LoginPage;
