import { useState, useRef, useEffect } from 'react';
import { attends } from '../api/auth';
import DataTableComponent from '../components/dataTable/dataTable';
import NavBar from '../components/navbar/NavBar';
import Modal from 'react-modal';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { notyf } from '../components/Notfy/Notfy';
import { AiFillCloseCircle } from 'react-icons/ai'; // Importa FontAwesomeIcon desde react-icons/fa
import '../styles/AttendsStyles.css';


function AttendsPage() {
    const { user } = useAuth()
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const inputRef = useRef(null);
    const [asistencias, setAsistencias] = useState([]);

    // La dependencia vacía indica que se ejecutará solo al montar el componente

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

    useEffect(() => {
        // Obtener las asistencias al cargar el componente
        obtenerAsistencias();
    }, []);

    const obtenerAsistencias = async () => {
        try {
            const response = await attends();
            setAsistencias(response);
        } catch (error) {
            console.error('Error al obtener las asistencias:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/asistencia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cedula: inputValue }),
            });

            if (response.ok) {
                setSuccess(true);
                // Obtener las asistencias actualizadas después de enviar una nueva asistencia
                obtenerAsistencias();



                notyf.success({
                    message: 'Asistencia Correcta',
                    className: 'success',
                    duration: 3000,
                    icon: false
                })
            } else {
                // console.error('Error en la solicitud a la API');
                notyf.error({
                    message: 'Asistencia Incorrecta',
                    className: 'warning',
                    duration: 3000,
                    icon: false
                })
            }
        } catch (error) {
            console.error('Error en la solicitud a la API:', error);
        }

        setInputValue('');
        setSuccess(false);
        inputRef.current.focus();
        setLoading(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleRestart = () => {
        setInputValue('');
        setSuccess(false);
        inputRef.current.focus();
    };

    const sendRequest = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/moveAttendancesToDailyCollection')
            console.log(response.data);
            setModalIsOpen(false)
            setAsistencias([])
            notyf.success({
                message: 'Reporte Generado Correctamente',
                className: 'success',
                duration: 3000,
                icon: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <NavBar />
            <section style={{ marginTop: '5em' }} className='attends'>
                <h1>Registro de Ingresos</h1>
                <form onSubmit={handleSubmit} className='formAttends flex flex-col items-center'>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        autoFocus
                        placeholder='cc'
                        ref={inputRef}
                    />
                    <button type='submit' disabled={loading} className='btn_submit'>
                        Enviar
                    </button>
                </form>
                {loading && <p>Procesando...</p>}
                {success && <p>Éxito. Tu consulta se completó correctamente.</p>}
                {success && <button onClick={handleRestart}>Realizar otra consulta</button>}
            </section>
            <section>
                {/* Pasar las asistencias como prop al DataTableComponent */}
                <DataTableComponent data={asistencias} />
            </section>

            {user.rol === 'admin' && (<button className='btnModal mt-20' onClick={() => setModalIsOpen(true)}>Generar Reporte</button>) ||
                user.rol === 'bienestar' && (<button className='btnModal mt-20' onClick={() => setModalIsOpen(true)}>Generar Reporte</button>)
            }
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                <h2 className='titleModal w-full text-4xl'>Generar Reporte</h2>
                <button className='closeBtn font-bold text-xl' onClick={() => setModalIsOpen(false)}><AiFillCloseCircle style={{ fontSize: '1.4em' }} /></button>
                <form className='flex flex-col'>

                    <div className='flex gap-8 w-full' style={{ justifyContent: 'center' }}>
                        <button className='text-white text-xl font-bold' onClick={sendRequest} style={{ background: '#84df57', borderRadius: '5px', padding: '7px 12px' }}>Si</button>
                        <button onClick={() => setModalIsOpen(false)} className='text-white text-xl font-bold' style={{ background: '#84df57', borderRadius: '5px', padding: '7px' }}>No</button>
                    </div>
                </form>
            </Modal>

        </>
    );
}

export default AttendsPage;
