import { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import axios from 'axios';
import { Tweet } from 'react-tweet'

const NoticiasPage = () => {
    const [nuevaNoticia, setNuevaNoticia] = useState({
        title: '',
        description: '',
        createby: '',
        image: null, // Este valor se llenará cuando el usuario seleccione una imagen
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaNoticia({ ...nuevaNoticia, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNuevaNoticia({ ...nuevaNoticia, image: file });
    };

    const handleCrearNoticia = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', nuevaNoticia.title);
            formData.append('description', nuevaNoticia.description);
            formData.append('createby', nuevaNoticia.createby);
            formData.append('image', nuevaNoticia.image);

            // Realizar la solicitud POST al servidor para crear la noticia
            const response = await axios.post('http://localhost:3000/api/createNoticia', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
            console.log('Noticia creada exitosamente:', response.data);

            // Limpiar el estado después de la creación exitosa
            setNuevaNoticia({
                title: '',
                description: '',
                createby: '',
                image: null,
            });
        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
            console.error('Error al crear la noticia:', error);
        }
    };

    return (
        <>
            <NavBar />
            {/* Aquí iría tu modal para crear noticias */}
            <form onSubmit={handleCrearNoticia} className='mt-20'>
                <input type="text" name="title" placeholder="Título" value={nuevaNoticia.title} onChange={handleInputChange} />
                <input type="text" name="description" placeholder="Descripción" value={nuevaNoticia.description} onChange={handleInputChange} />
                <input type="text" name="createby" placeholder="Creado por" value={nuevaNoticia.createby} onChange={handleInputChange} />
                <input type="file" name="image" onChange={handleImageChange} />
                <button type="submit">Crear Noticia</button>
            </form>
        </>
    );
};

export default NoticiasPage;
