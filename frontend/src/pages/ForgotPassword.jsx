import React, { useState } from 'react';
import axios from 'axios';
import LogoSena from '../assets/svg/LogoSena.svg';
import loading from '../assets/svg/loading.svg';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();

		const userEmail = {
			email: e.target.email.value,
		};

		setIsLoading(true);
		await axios
			.post(import.meta.env.VITE_API_URL + '/forgot_password', userEmail)
			.then(res => {
				setIsLoading(false);
				Swal.fire({
					showConfirmButton: true,
					icon: 'success',
					text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña',
				});
			})
			.catch(err => {
				setIsLoading(false);
				Swal.fire({
					showConfirmButton: true,
					icon: 'error',
					text: 'Ha habido un error al intentar enviar los datos, comprueba el correo o vuelva a intentarlo mas tarde',
				});
			});
	};

	return (
		<section
			style={{
				display: 'flex',
				width: '100vw',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ul className='circles'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='formForgot z-50'>
				<div className=''>
					<form
						className='formRight'
						onSubmit={handleSubmit}
					>
						<img
							src={LogoSena}
							alt='Logo SENA'
							width={'160px'}
						></img>
						<h1>Recuperar Contraseña</h1>
						<div className='divInput'>
							<h2>Correo electrónico:</h2>
							{isLoading ? (
								<input
									type='email'
									className='inputForm'
									name='email'
									placeholder='Email'
									required
									disabled='true'
								/>
							) : (
								<input
									type='email'
									className='inputForm'
									name='email'
									placeholder='Email'
									required
								/>
							)}
						</div>
						<p className='flex gap-x-2 justify-between text-black'>
							<Link
								to='/'
								className='text-sky-300'
							>
								Login
							</Link>
						</p>
						<div className='divButton'>
							{isLoading ? (
								<div className='loadingImage'>
									<img
										src={loading}
										alt='loading...'
									/>
								</div>
							) : (
								<button
									type='submit'
									className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full'
								>
									Enviar
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
