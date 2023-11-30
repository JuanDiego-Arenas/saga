import React, { useState, useEffect } from 'react';
import { attends } from '../api/auth';
import axios from 'axios';
import NavBar from '../components/navbar/NavBar';
import DataTableComponent from '../components/dataTable/dataTable';
import Chart from 'chart.js/auto';

const ChartComponent = ({ asistencias }) => {
    const [dataReady, setDataReady] = useState(false);

    useEffect(() => {
        if (asistencias && asistencias.length > 0) {
            setDataReady(true);
            asistencias.reverse();
        }
    }, [asistencias]);

    useEffect(() => {
        if (dataReady) {
            const data = asistencias.slice(0, 3).map(report => ({
                day: new Date(report.date).toLocaleDateString(),
                count: report.attendances.length,
            }));

            const ctx = document.getElementById('acquisitions');

            // Destruir el gráfico existente si hay uno
            const existingChart = Chart.getChart(ctx);
            if (existingChart) {
                existingChart.destroy();
            }

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(row => row.day),
                    datasets: [
                        {
                            label: 'Asistencia Día',
                            data: data.map(row => row.count),
                            backgroundColor: '#bff0a7',
                        },
                    ],
                },
            });
        }
    }, [asistencias, dataReady]);

    return (
        <div className='mt-4'>
            <h2>Adquisitions Chart</h2>
            <canvas id='acquisitions' width='300' height='50px'></canvas>
        </div>
    );
};


const DashboardAdmin = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dailyAttendances, setDailyAttendances] = useState([]);
    const [asistencias2, setAsistencias] = useState([]);
    const [dataChart, setDataChart] = useState([])

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
            console.error('No hay datos ese dia Error:', error);
            return setDailyAttendances([]);
        }
    };

    const fetchDataChart = async () => {
        const response = await axios.get('http://localhost:3000/api/getDailyAttendace')
        setDataChart(response.data.msg)
    }

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
        fetchDataChart()
    }, []); // Sin dependencias para ejecutarse solo una vez al montar el componente

    useEffect(() => {
        // Se ejecutará cuando se actualice asistencias2
        fetchData();
    }, []); // Dependencia de asistencias2

    return (
        <>
            <NavBar />
            <section className='mt-20'>
                <h1 className='text-4xl font-bold mt-2'>Dashboard de Asistencias</h1>
                <ChartComponent  asistencias={dataChart} otherDays={dataChart} />
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
