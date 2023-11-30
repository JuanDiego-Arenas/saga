import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import LogoSena from '../assets/svg/LogoSena.svg';
import loading from '../assets/svg/loading.svg';
import Swal from 'sweetalert2';

let regExPassword =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.-_@$!%*?&#])[A-Za-z\d.-_@$!%*?&#]{8,16}$/;

const ResetPassword = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const { tokenresetpassword } = useParams();

	// Verificar si el token aun es valido
	useEffect(() => {
		const checkTokenValidity = async () => {
			try {
				// Hacer la solicitud al backend para verificar la validez del token
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/password_reset/${tokenresetpassword}`
				);
			} catch (error) {
				// Manejar errores de solicitud (puedes mostrar un mensaje o redirigir a una página de error)
				// Verificar si la solicitud obtuvo una respuesta con código de estado 401
				if (error.response && error.response.status === 401) {
					Swal.fire({
						showCancelButton: true,
						icon: 'error',
						text: 'El token ha expirado, por favor genera otro',
					});
					navigate('/forgot_password');
				} else {
					// Si hay otros errores, mostrar un mensaje genérico o redirigir a una página de error
					Swal.fire({
						showCancelButton: true,
						icon: 'error',
						text: 'Error al verificar el token',
					});
					navigate('/forgot_password');
				}
			}
		};

		// Llamar a la función para verificar el token cuando se monte el componente
		checkTokenValidity();
	}, []); // El segundo argumento es un array vacío para ejecutar esto solo una vez al montar el componente

	const handleSubmit = async e => {
		e.preventDefault();

		const userPassword = {
			password: e.target.password.value,
		};

		if (!regExPassword.test(userPassword.password)) {
			Swal.fire({
				showConfirmButton: true,
				icon: 'error',
				text: 'la contraseña debe de contener al menos: entre 8 y 16 cráteres, 1 número, 1 minúscula, 1 mayúscula y 1 carácter especial como .,-,_,#,@,%,$',
			});
			return;
		}

		setIsLoading(true);
		await axios
			.patch(`${import.meta.env.VITE_API_URL}/password_reset/${tokenresetpassword}`, userPassword)
			.then(res => {
				setIsLoading(false);
				Swal.fire({
					showCancelButton: true,
					icon: 'success',
					text: 'Contraseña cambiada correctamente',
				});
				navigate('/');
			})
			.catch(error => {
				Swal.fire({
					showCancelButton: true,
					icon: 'error',
					text: `Error al actualizar (╯°□°）╯︵ ┻━┻: ${error}`,
				});
			});
	};

	const checkValidation = e => {
		const confirmPass = e.target.value;
		setConfirmPassword(confirmPass);
		if (password !== confirmPass) {
			setIsError('La contraseña no coincide');
		} else {
			setIsError('');
		}
	};

	const switchShowPassword = () => {
		setShowPassword(!showPassword);
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
						<h1>Nueva Contraseña</h1>
						<div className='divInput'>
							<h2>Contraseña:</h2>
							{isLoading ? (
								<input
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={e => setPassword(e.target.value)}
									name='password'
									className='inputForm'
									placeholder='Nueva contraseña'
									required
									disabled='true'
								/>
							) : (
								<input
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={e => setPassword(e.target.value)}
									name='password'
									className='inputForm'
									placeholder='Nueva contraseña'
									required
								/>
							)}
							<a
								style={{ cursor: 'pointer' }}
								onClick={switchShowPassword}
							>
								{showPassword ? 'Ocultar' : 'Mostrar'}
							</a>
						</div>
						<div className='divInput'>
							<h2>Confirmar contraseña:</h2>
							{isLoading ? (
								<input
									type={showPassword ? 'text' : 'password'}
									value={confirmPassword}
									onChange={e => checkValidation(e)}
									name='confirmPassword'
									className='inputForm'
									placeholder='Confirmar contraseña'
									required
									disabled='true'
								/>
							) : (
								<input
									type={showPassword ? 'text' : 'password'}
									value={confirmPassword}
									onChange={e => checkValidation(e)}
									name='confirmPassword'
									className='inputForm'
									placeholder='Confirmar contraseña'
									required
								/>
							)}
						</div>
						<div className='confirmPassword'>{isError}</div>
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

export default ResetPassword;
