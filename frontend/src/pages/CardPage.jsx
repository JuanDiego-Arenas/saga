import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JsBarcode from 'jsbarcode';
import '../styles/CardPageStyles.css';
import NavBar from '../components/navbar/NavBar';
import { AiFillFileAdd } from 'react-icons/ai';
import Footer from '../components/footer/Footer';


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
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/file`, formData, {
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
            <div className="CardsComponent mt-10">
                <section className='flex mt-5'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='font-bold text-2xl' style={{ color: '#39A900' }} >Consulta de Datos XML</h1>
                        <div className='flex gap-5'>
                            <label htmlFor="fileInput" className="custom-file-upload">
                                <span className="icon"><AiFillFileAdd /></span>
                                <p className='mr-4'>Subir Archivo</p>
                                <input id="fileInput" type="file" onChange={handleFileChange} />
                            </label>
                            <button type="submit" style={{ backgroundColor: '#39A900' }} className='text-white font-bold ml-3 py-2 px-4 rounded-full'>Enviar</button>
                        </div>
                            <p style={{ width: '28ch' }}>{ xmlFile === null ? 'Archivo:' : `Archivo: ${xmlFile.name}` }</p>
                    </form>
                    <div className='info'>
                        <p>Datos de la ficha: <b>{data.length}</b></p>
                        <p>Número de Ficha: <b>{fichaNumero}</b></p>
                    </div>
                    <p>Descripción de la Ficha: <b>{fichaDescripcion}</b></p>
                </section>
                <br></br>
                <h1 className='mb-5 font-bold text-3xl' style={{ color: '#39A900' }}>Datos recibidos del servidor:</h1>
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className='Card'>
                            <div style={{ display: 'flex', height: '4cm', justifyContent: 'space-around' }}>
                                <h4 style={{ position: 'absolute', left: '1em', zIndex: '200', top: '9em', textTransform: 'capitalize', fontWeight: 'bold' }}>{item.rol}</h4>
                                <img src={logoSENA} width={'70px'} style={{ position: 'relative', height: 'fit-content', top: '.2em', left: '-1em' }}></img>
                                <img src={item.avatar == 'http://localhost:3000/avatars/userdefault.jpg' ? `${import.meta.env.VITE_BASE_URL}/avatars/userdefault.jpg` : `${import.meta.env.VITE_BASE_URL}/${item.avatar}`} width={'120px'} style={{ margin: '0', position: 'relative', left: '1.5em', height: '105%' }}></img>
                            </div>
                            <div className='line'></div>

                            <h3 style={{ color: '#39A900' }}>{item.username}</h3>
                            <h3>{item.tipo + ' ' + item.cc}</h3>
                            <h3>RH O+</h3>

                            <svg id={`barcode-${index}`}></svg>
                            <div>
                                <h6 style={{ color: 'grey', fontWeight: 'bold' }}>Regional Huila</h6>
                                <p style={{ color: '#39A900', fontSize: '.8em' }}>Centro Agro Empresarial y Desarrollo Pecuario Del Huila</p>
                                <p style={{ color: '#39A900', fontSize: '.8em' }}>{fichaDescripcion}</p>
                                <p style={{ color: '#39A900', fontSize: '.8em' }}>Grupo No.{fichaNumero}</p>
                            </div>
                            {/* Mostrar otros datos según tu estructura */}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default CardPage;
