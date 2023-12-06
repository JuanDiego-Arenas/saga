    import React, { useState, useEffect } from 'react';
    import { useAuth } from '../context/AuthContext';
    import NavBar from '../components/navbar/NavBar';
    import axios from 'axios';
    import Modal from 'react-modal';
    import { BsFillFileImageFill } from 'react-icons/bs'; // Importa FontAwesomeIcon desde react-icons/fa
    import { AiFillCloseCircle } from 'react-icons/ai'; // Importa FontAwesomeIcon desde react-icons/fa
    import NoticesList from '../components/notices/NoticesList';
    import Footer from '../components/footer/Footer';

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
        const [noticias, setNoticias] = useState([]);
        const [editModalIsOpen, setEditModalIsOpen] = useState(false); // Nuevo estado para el segundo modal
        const [noticiaAEditar, setNoticiaAEditar] = useState({
            title: '',
            description: ''
        });
        const [nuevaNoticia, setNuevaNoticia] = useState({
            title: '',
            description: '',
            createby: user.username,
            rol: user.rol,
            image: null, // Este valor se llenará cuando el usuario seleccione una imagen
        });
        const [selectedFileName, setSelectedFileName] = useState('Selecciona un archivo')



        const fetchData = async () => {
            try{
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/getNotices`)
                setNoticias(response.data.reverse())
            } catch(error){
                console.log(error)
            }
        }

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
                formData.append('createby', user.username);
                formData.append('image', nuevaNoticia.image);
                formData.append('rol', user.rol);

                // Realizar la solicitud POST al servidor para crear la noticia
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/createNoticia`, formData, {
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


        const handleEliminarNoticia = async (noticiaId) => {
            try {
              await axios.delete(`${import.meta.env.VITE_API_URL}/news/${noticiaId}`);
              fetchData()
            } catch (error) {
              console.error('Error al eliminar la noticia:', error);
            }
        };

        const handleEditarNoticia = (noticia) => {
            setNoticiaAEditar(noticia);
            setEditModalIsOpen(true);
          };
        
          const handleUpdateNoticia = async (e) => {
            e.preventDefault();
        
            try {
                const noticeData = {
                    description: noticiaAEditar.description,
                    image:  nuevaNoticia.image
                }
                // const formData = new FormData();
                // formData.append('description', nuevaNoticia.description);
                // formData.append('image', nuevaNoticia.image);
        
                await axios.patch(`${import.meta.env.VITE_API_URL}/news/${noticiaAEditar._id}`, noticeData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });
        
                fetchData();
                setEditModalIsOpen(false);
            } catch (error) {
                console.error('Error al editar la noticia:', error);
            }
          };
        

        useEffect(() => {

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

                <Modal isOpen={editModalIsOpen} style={customStyles} onRequestClose={() => setEditModalIsOpen(false)}>
                    <h2 className='titleModal w-full text-4xl'>Editar Noticia</h2>
                    <button className='closeBtn font-bold text-xl' onClick={() => setEditModalIsOpen(false)}>
                        <AiFillCloseCircle style={{ fontSize: '1.4em' }} />
                    </button>
                    <form onSubmit={handleUpdateNoticia} className='flex flex-col'>
                        <input type='text' name='title' placeholder='Título' value={noticiaAEditar?.title || ''} readOnly />
                        <textarea
                        name='description'
                        placeholder='Descripción'
                        value={noticiaAEditar?.description || ''}
                        onChange={(e) => setNoticiaAEditar({ ...noticiaAEditar, description: e.target.value })}
                        />
                        <label className='custom-file-input flex items-center ml-8 gap-3'>
                        <input type='file' className='input-file' onChange={handleImageChange} />
                        <div className='file-icon'>
                            <BsFillFileImageFill />
                        </div>
                        <div className='file-name'>{selectedFileName || 'Selecciona un archivo'}</div>
                        </label>
                        <button className='btnSubmit' type='submit'>
                        Editar
                        </button>
                    </form>
                </Modal>




                <section className='mt-20 flex flex-col items-center'>
                    <NoticesList noticias={noticias} handleEliminarNoticia={handleEliminarNoticia} handleEditarNoticia={handleEditarNoticia}/>
                </section>
                <Footer/>
                
            </>
        );
    };

export default NoticiasPage;
