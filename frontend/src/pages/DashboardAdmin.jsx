import React, { useState, useEffect } from 'react';
import { attends } from '../api/auth';
import axios from 'axios';
import NavBar from '../components/navbar/NavBar';
import DataTableComponent from '../components/dataTable/dataTable';
import Chart from 'chart.js/auto';


const ChartComponent = (  ) => {
    useEffect(() => {
        const data = [
            { day: 'Hoy', count: 120 },
            { day: '2011/20/01', count: 20 },
            { day: '2011/20/01', count: 20 },
        ];

        const ctx = document.getElementById('acquisitions');

        // Destruir el gráfico existente si hay uno
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(
            ctx,
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.day),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count),
                            backgroundColor: '#bff0a7'
                        },
                    ],
                },
            }
        );
    }, []);// El array vacío asegura que el efecto se ejecute solo una vez, equivalente a componentDidMount

    return (
        <div className='mt-20'>
            <h2>Acquisitions Chart</h2>
            <canvas id="acquisitions" width="300" height="50px"></canvas>
        </div>
    );
};

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
            <ChartComponent />
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