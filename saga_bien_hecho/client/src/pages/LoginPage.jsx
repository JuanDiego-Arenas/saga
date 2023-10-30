import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signin, isAuthenticate ,errors: signinErrors } = useAuth()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticate) navigate('/home')
    }, [isAuthenticate])

    return <section style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <div className="bg-zinc-800 max-w-md p-10 rounded-md" style={{ height: 'fit-content' }}>
            {
                signinErrors.map((error, i) => <div key={i} className="bg-red-500 p-2 text-white my-2">{error}</div>)
            }
            <form
                onSubmit={onSubmit}
            >

                <h1 className='text-2xl font-bold text-white'>Login</h1>
                <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />

                {errors.email && (<p className="text-red-500">Email es necesario</p>)}

                <input
                    type="password"
                    {...register('password', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
                />

                {errors.password && (<p className="text-red-500">Contraseña de usuario es necesario</p>)}

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Login
                </button>

                <p className='flex gap-x-2 justify-between text-white'>
                    No tienes cuenta? <Link to='/register' className='text-sky-300'>Sign up</Link>
                </p>

            </form>

        </div>

    </section>

}

export default LoginPage;
