import React, { useState, useEffect } from 'react';
import { attends } from '../api/auth';
import axios from 'axios';
import NavBar from '../components/navbar/NavBar';
import DataTableComponent from '../components/dataTable/dataTable';

const DashboardAdmin = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dailyAttendances, setDailyAttendances] = useState([]);
    const [asistencias2, setAsistencias] = useState([]);

    const dateNow = new Date().toISOString().split('T')[0];

    const fetchData = async () => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        try {
            if (formattedDate === dateNow) {
                return setDailyAttendances(asistencias2);
            } else {
                const response = await axios.get(`http://localhost:3000/api/getDailyAttendaces/${formattedDate}`);
                setDailyAttendances(response.data.msg[0].attendances.reverse());
            }
        } catch (error) {
            console.error('Error al obtener los datos diarios', error);
        }
    };

    const obtenerAsistencias = async () => {
        try {
            const response = await attends();
            setAsistencias(response);
        } catch (error) {
            console.error('Error al obtener las asistencias:', error);
        }
    };

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    };

    const handleFetchData = () => {
        // Obtener los datos para la fecha seleccionada
        fetchData();
    };

    useEffect(() => {
        // Cargar los datos diarios por defecto al cargar el componente
        fetchData();
        obtenerAsistencias();
    }, []); // Sin dependencias para ejecutarse solo una vez al montar el componente

    useEffect(() => {
        // Se ejecutará cuando se actualice asistencias2
        fetchData();
    }, [asistencias2]); // Dependencia de asistencias2

    return (
        <>
            <NavBar />
            <section className='mt-20'>
                <h1>Dashboard de Asistencias</h1>
                <label>Seleccionar Fecha: </label>
                <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} />
                <button onClick={handleFetchData}>Obtener Datos</button>
                {/* Pasa el array plano al componente DataTableComponent */}
                <DataTableComponent data={dailyAttendances} />
            </section>
        </>
    );
};

export default DashboardAdmin;