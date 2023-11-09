import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import NavBar from '../components/navbar/NavBar';
import axios from 'axios';
import Modal from 'react-modal'; // Importa react-modal
import '../styles/NoticesPageStyles.css';
import { Tweet } from 'react-tweet';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        boxShadow: '0 0 5px #84df57'
    },
};

Modal.setAppElement('#root');

const NoticiasPage = () => {
    const { user } = useAuth()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nuevaNoticia, setNuevaNoticia] = useState({
        title: '',
        description: '',
        createby: user.username,
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
            setModalIsOpen(false)
        } catch (error) {
            // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
            console.error('Error al crear la noticia:', error);
        }
    };

    return (
        <>
            <NavBar />
            {/* Botón para abrir el modal */}
            <button className='btnModal mt-20' onClick={() => setModalIsOpen(true)}>Nueva Noticia</button>

            {/* Modal para el formulario de crear noticias */}
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                <h2 className='titleModal w-full'>Nueva Noticia</h2>
                <button className='closeBtn font-bold text-xl' onClick={() => setModalIsOpen(false)}>X</button>
                <form onSubmit={handleCrearNoticia} className='flex flex-col'>
                    <input type="text" name="title" placeholder="Título" required value={nuevaNoticia.title} onChange={handleInputChange} />
                    <textarea name="description" placeholder="Descripción" required value={nuevaNoticia.description} onChange={handleInputChange} />
                    <input type="file" name="image" onChange={handleImageChange} required />
                    <button className='btnSubmit' type="submit">Crear Noticia</button>
                </form>
            </Modal>
        </>
    );
};
export default NoticiasPage;
