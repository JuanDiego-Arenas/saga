import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LogoSena from '../assets/LogoSena.svg'
import imagenSilider from '../assets/imgs/img_01.jpg'
import '../styles/loginStyles.css'

function LoginPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signin, isAuthenticate, errors: signinErrors } = useAuth()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticate) navigate('/home')
    }, [isAuthenticate])


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
                    <img src={imagenSilider}></img>
                </div>
                {/* // TODO Form Login */}
                <div>
                    <form
                        className='formRight'
                        onSubmit={onSubmit}
                    >
                        <img src={LogoSena} alt='Logo SENA' width={'160px'}></img>
                        <h3>Email:</h3>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="inputForm"
                            placeholder="Email"
                        />
                        {errors.email && (<p className="text-red-500">Email es necesario</p>)}
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
                            No tienes cuenta? <Link to='/register' className='text-sky-300'>Sign up</Link>
                        </p>

                    </form>

                </div>
            </div>

        </section>
    )

}

export default LoginPage;
