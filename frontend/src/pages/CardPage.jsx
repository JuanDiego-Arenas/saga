import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JsBarcode from 'jsbarcode';
import '../styles/CardPageStyles.css';
import NavBar from '../components/navbar/NavBar';

//* Logo SENA
import logoSENA from '../../public/logoSena.svg'

const CardPage = () => {
    const [xmlFile, setXmlFile] = useState(null);
    const [data, setData] = useState([]);
    const [fichaNumero, setFichaNumero] = useState('');
    const [fichaDescripcion, setFichaDescripcion] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setXmlFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('xmlFile', xmlFile);

        try {
            const response = await axios.post('http://localhost:3000/api/file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Extraer número de ficha y descripción del nombre del archivo
            const fileName = xmlFile.name;
            const regexResult = fileName.match(/Ficha (\d+) \((.+)\)\.xml/);
            const numeroFicha = regexResult ? regexResult[1] : '';
            const descripcionFicha = regexResult ? regexResult[2] : '';

            // Actualizar los estados correspondientes
            setFichaNumero(numeroFicha);
            setFichaDescripcion(descripcionFicha);

            // Agregar número de ficha y descripción a los datos recibidos
            const newData = response.data.data.map(item => ({
                ...item,
                fichaNumero: numeroFicha,
                fichaDescripcion: descripcionFicha
            }));

            setData(newData);
        } catch (error) {
            console.error('Error al enviar el archivo:', error);
        }
    };

    useEffect(() => {
        // Generar códigos de barras después de que 'data' se actualice
        data.forEach((item, index) => {
            const barcodeId = `barcode-${index}`;
            JsBarcode(`#${barcodeId}`, item.cc, {
                format: 'CODE128',
                displayValue: false,
                lineColor: '#39A900',
                width: 2,
                height: 50
            });
        });
    }, [data]); // Se ejecuta cada vez que 'data' se actualiza

    return (
        <div>
            <NavBar />
            <div className="CardsComponent mt-16">
                <h1>Consulta de Datos XML</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit" style={{ backgroundColor: '#39A900' }} className='text-white font-bold py-2 px-4 rounded-full'>Enviar</button>
                </form>

                <h2>Datos de la ficha: {data.length}</h2>
                <p>Número de Ficha: {fichaNumero}</p>
                <p>Descripción de la Ficha: {fichaDescripcion}</p>

                <h2>Datos recibidos del servidor:</h2>
                <br></br>
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className='Card'>
                            <div style={{ display: 'flex', height: '4cm', justifyContent: 'space-around' }}>
                                <img src={logoSENA} width={'60px'} style={{ position: 'relative', height: 'fit-content', top: '.2em', left: '.4em' }}></img>
                                <img src='http://localhost:3000/avatars/userdefault.jpg' width={'120px'} style={{ margin: '0', position: 'relative', left: '2.3em', height: '105%' }}></img>
                                <h4 style={{ transform: 'rotate(270deg)', height: 'fit-content', position: 'relative', left: '1em', bottom: '-65%', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.rol}</h4>
                            </div>

                            <div className='line'></div>

                            <h3 style={{ color: '#39A900' }}>{item.username}</h3>
                            <h3>{item.tipo + ' ' + item.cc}</h3>
                            <h3>RH O+</h3>

                            <svg id={`barcode-${index}`}></svg>
                            <div>
                                <h6 style={{ color: 'grey', fontWeight: 'bold' }}>Regional Huila</h6>
                                <p style={{ color: '#39A900', fontSize: '.8em' }}>Centro Agro Empresarial y Desarrollo Pecuario Del Huila</p>
                            </div>
                            {/* Mostrar otros datos según tu estructura */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardPage;
