import { useState, useRef, useEffect } from 'react';
import { attends } from '../api/auth';
import DataTableComponent from '../components/dataTable/DataTable';
import NavBar from '../components/navbar/NavBar';
import '../styles/AttendsStyles.css';

function AttendsPage() {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const inputRef = useRef(null);
    const [asistencias, setAsistencias] = useState([]);

    // La dependencia vacía indica que se ejecutará solo al montar el componente

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
            } else {
                console.error('Error en la solicitud a la API');
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
        </>
    );
}

export default AttendsPage;
