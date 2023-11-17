    import React, { useState, useEffect } from 'react';
    import { useAuth } from '../context/AuthContext';
    import NavBar from '../components/navbar/NavBar';
    import axios from 'axios';
    import Modal from 'react-modal';
    import { BsFillFileImageFill } from 'react-icons/bs'; // Importa FontAwesomeIcon desde react-icons/fa
    import { AiFillCloseCircle } from 'react-icons/ai'; // Importa FontAwesomeIcon desde react-icons/fa
    import NoticesList from '../components/notices/NoticesList';
    import '../styles/NoticesPageStyles.css';

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
        const { user } = useAuth();
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [noticias, setNoticias] = useState([])
        const [nuevaNoticia, setNuevaNoticia] = useState({
            title: '',
            description: '',
            createby: user.username,
            rol: user.rol,
            image: null, // Este valor se llenará cuando el usuario seleccione una imagen
        });

        

        const [selectedFileName, setSelectedFileName] = useState('Selecciona un archivo')

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setNuevaNoticia({ ...nuevaNoticia, [name]: value });
        };

        const handleImageChange = (e) => {
            const file = e.target.files[0];

            // Verificar si el archivo es una imagen (formatos de imagen comunes)
            const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (file && allowedImageTypes.includes(file.type)) {
                setNuevaNoticia({ ...nuevaNoticia, image: file });
                setSelectedFileName(file.name);
            } else {
                // Si el archivo no es una imagen, puedes mostrar un mensaje de error al usuario
                alert('Por favor, selecciona un archivo de imagen válido (JPEG, PNG, GIF).');
            }
        };

        const handleCrearNoticia = async (e) => {
            e.preventDefault();

            try {
                const formData = new FormData();
                formData.append('title', nuevaNoticia.title);
                formData.append('description', nuevaNoticia.description);
                formData.append('createby', nuevaNoticia.createby);
                formData.append('image', nuevaNoticia.image);
                formData.append('rol', user.rol);

                // Realizar la solicitud POST al servidor para crear la noticia
                const response = await axios.post('http://localhost:3000/api/createNoticia', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
                // console.log('Noticia creada exitosamente:', response.data);

                // Limpiar el estado después de la creación exitosa
                setNuevaNoticia({
                    title: '',
                    description: '',
                    createby: '',
                    image: null,
                });
                setModalIsOpen(false);
            } catch (error) {
                // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
                console.error('Error al crear la noticia:', error);
            }
        };

        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await axios.get('http://localhost:3000/api/getNotices')
                    setNoticias(response.data.reverse())
                } catch(error){
                    console.log(error)
                }
            }

            fetchData()
        }, [modalIsOpen])

        return (
            <>
                <NavBar />
                {/* Botón para abrir el modal */}
                { user.rol === 'admin' && (<button className='btnModal mt-20' onClick={() => setModalIsOpen(true)}>Nueva Noticia</button>) ||
                    user.rol === 'bienestar' && (<button className='btnModal mt-20' onClick={() => setModalIsOpen(true)}>Nueva Noticia</button>)
                }
                {/* Modal para el formulario de crear noticias */}
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                    <h2 className='titleModal w-full text-4xl'>Nueva Noticia</h2>
                    <button className='closeBtn font-bold text-xl' onClick={() => setModalIsOpen(false)}><AiFillCloseCircle style={{ fontSize: '1.4em' }} /></button>
                    <form onSubmit={handleCrearNoticia} className='flex flex-col'>
                        <input type="text" name="title" placeholder="Título" required value={nuevaNoticia.title} onChange={handleInputChange} />
                        <textarea name="description" placeholder="Descripción" required value={nuevaNoticia.description} onChange={handleInputChange} />
                        {/* Input de archivo personalizado */}
                        <label className="custom-file-input flex items-center ml-8 gap-3">
                            <input type="file" className="input-file" onChange={handleImageChange} required />
                            <div className="file-icon">
                                <BsFillFileImageFill /> {/* Icono de carga, ajusta según tu preferencia */}
                            </div>
                            <div className="file-name">{selectedFileName}</div>
                        </label>
                        <button className='btnSubmit' type="submit">Crear Noticia</button>
                    </form>
                </Modal>
                <section className='mt-20'>
                    <NoticesList noticias={noticias}/>
                </section>
            </>
        );
    };

    export default NoticiasPage;
