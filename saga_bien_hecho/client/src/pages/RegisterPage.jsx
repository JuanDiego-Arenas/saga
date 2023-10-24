import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit } = useForm()
    const { signup, isAuthenticate } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticate) navigate('/home')
    }, [isAuthenticate])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return <section style={{ display: 'flex', width: '100vw', height: '100vh' ,justifyContent: 'center', alignItems: 'center'  }}>
        <div className="bg-zinc-800 max-w-md p-10 rounded-md" style={{ height: 'fit-content' }}>
            <form
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    {...register('cc', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Documento"
                />
                <input
                    type="text"
                    {...register('username', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Nombre"
                />

                <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                <input
                    type="password"
                    {...register('password', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
                />

                <label htmlFor="role" className="text-white">
                    Role:
                </label>
                <select
                    {...register('rol', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                >
                    <option value="invitado">Invitado</option>
                    <option value="aprendiz">Aprendiz</option>
                    <option value="instructor">Instructor</option>
                    <option value="bienestar">Bienestar Al aprendiz</option>
                </select>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Register
                </button>
            </form>
        </div>;
    </section>
}

export default RegisterPage;
