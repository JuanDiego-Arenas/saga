import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit } = useForm()
    const { signup, isAuthenticate } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticate) navigate('/')
    }, [isAuthenticate])

    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData();
        formData.append('cc', values.cc);
        formData.append('username', values.username);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('rol', values.rol);
    
        // Verificar si hay un archivo seleccionado y agregarlo al objeto FormData
        if (values.avatar && values.avatar.length > 0) {
            formData.append('avatar', values.avatar[0]);
        }
    
        // Llamar a la función de registro con el objeto FormData
        signup(formData);
    });

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

                <input type="file" {...register('avatar')} accept="image/*" className="my-2" />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Register
                </button>
            </form>
        </div>;
    </section>
}

export default RegisterPage;
