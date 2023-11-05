import React, { useState, useRef } from 'react';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const inputRef = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();
		// Simula una operación de consulta (aquí podrías realizar la consulta a tu base de datos)
		setLoading(true);

		try {
			const response = await fetch('http://localhost:3000/api/asistencia', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ cedula: inputValue }), // Envía los datos en el cuerpo de la solicitud en formato JSON
			});

			if (response.ok) {
				setSuccess(true);
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

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleRestart = () => {
		setInputValue('');
		setSuccess(false);
		inputRef.current.focus();
	};

	return (
		<div className='App'>
			<h1>Proyecto de Consulta React</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					autoFocus
					// onSubmit={handleRestart}
					ref={inputRef}
				/>
				<button
					type='submit'
					disabled={loading}
				>
					Enviar
				</button>
			</form>
			{loading && <p>Procesando...</p>}
			{success && <p>Éxito. Tu consulta se completó correctamente.</p>}
			{success && (
				<button onClick={handleRestart}>Realizar otra consulta</button>
			)}
		</div>
	);
}

export default App;
