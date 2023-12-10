import React, { useEffect } from 'react';
import NavBar from '../components/navbar/NavBar';
import { useAuth } from '../context/AuthContext';
import CardProfile from '../components/pures/CardProfile';
import Footer from '../components/footer/Footer';

import '../styles/CardPageStyles.css';

import logoSENA from '../../public/logoSena.svg'

const ProfilePage = () => {

	const { user } = useAuth()

	const arrayUser = Array(user)

	console.log(user)
	const { fichaNombre, fichaNumero } = user

	useEffect(() => {
		// Generar códigos de barras después de que 'data' se actualice
		arrayUser.forEach((item, index) => {
			const barcodeId = `barcode-${index}`;
			JsBarcode(`#${barcodeId}`, item.cc, {
				format: 'CODE128',
				displayValue: false,
				lineColor: '#39A900',
				width: 2,
				height: 50
			});
		});
	}, []);

	return (
		<>
			<NavBar />
			<ul>
				{arrayUser.map((item, index) => (
					<li
						key={index}
						className='Card mt-24'
					>
						<div style={{ display: 'flex', height: '4cm', justifyContent: 'space-around' }}>
							<h4
								style={{ position: 'absolute', left: '1em', zIndex: '200', top: '9em', textTransform: 'capitalize', fontWeight: 'bold' }}
							>
								{item.rol}
							</h4>
							<img
								src={logoSENA}
								width={'70px'}
								style={{ position: 'relative', height: 'fit-content', top: '.2em', left: '-1em' }}
							></img>
							<img
								src={
									item.avatar == 'http://localhost:3000/avatars/userdefault.jpg'
										? `${import.meta.env.VITE_BASE_URL}/avatars/userdefault.jpg`
										: `${import.meta.env.VITE_BASE_URL}/${item.avatar}`
								}
								width={'120px'}
								style={{ margin: '0', position: 'relative', left: '1.5em', height: '105%' }}
							></img>

						</div>

						<div className='line'></div>

						<h3 style={{ color: '#39A900' }}>{item.username}</h3>
						<h3>{item.tipo + ' ' + item.cc}    RH O+</h3>

						<svg id={`barcode-${index}`}></svg>
						<div>
							<h6 style={{ color: 'grey', fontWeight: 'bold' }}>Regional Huila</h6>
							<p style={{ color: '#39A900', fontSize: '.6em' }}>
								Centro Agro Empresarial y Desarrollo Pecuario Del Huila
							</p>
							<p style={{ color: '#39A900', fontSize: '.6em' }}>{fichaNombre}</p>
							<p style={{ color: '#39A900', fontSize: '.6em' }}>Grupo No.{fichaNumero}</p>
						</div>
						{/* Mostrar otros datos según tu estructura */}
					</li>
				))}
			</ul>

			<Footer />
		</>
	);
}

export default ProfilePage;