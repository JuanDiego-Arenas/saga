use('saga');

db.personas.insertMany([
	{
		nombre: 'Juan Diego',
		apellido: 'Arenas Cuellar',
		cedula: '15679938032',
		correo: 'jad@saga.dev',
		ficha: '2502639',
		rol: 'Aprendiz',
	},
	{
		nombre: 'Hector D',
		apellido: 'Toledo G',
		cedula: '043281233',
		correo: 'hdtoledo@saga.in',
		ficha: ['2502639', '3923423', '23423'],
		rol: 'Instructor',
	},
	{
		nombre: 'Diego Fernando',
		apellido: 'Polo',
		cedula: '479283792',
		correo: 'xhope@saga.dev',
		rol: 'Administrador',
	},
	{
		nombre: 'Juan Fernando',
		apellido: 'Calderon',
		cedula: '872382822',
		correo: 'jad@saga.dev',
		ficha: '2502639',
		rol: 'Aprendiz',
	},
	{
		nombre: 'Marcos',
		apellido: 'Montealegre',
		cedula: '823092384',
		correo: 'markitos@saga.com',
		ficha: ['49534905', '2342342', '234234'],
		rol: 'Instructor',
	},
	{
		nombre: 'Julian',
		apellido: 'Salazar',
		cedula: '859475303',
		correo: 'julian@saga.com',
		ficha: '2502639',
		rol: 'Aprendiz',
	},
	{
		nombre: 'Jose',
		apellido: 'Arciniegas',
		cedula: '45352233',
		correo: 'jose@saga.com',
		ficha: '2502639',
		rol: 'Administrador',
	},
]);

db.noticias.insertMany([
	{
		titulo: 'Evento De HalLowen',
		contenido:
			'El dia de mañana se realizar un evento de disfrazes para la celebracion de Hallowen',
		fecha: ISODate('2023-10-28'),
	},
	{
		titulo: 'Viaje recreativo',
		contenido:
			'Para una despedida del la formacion ADSO se hara una salida recreativa en una zona rural',
		fecha: ISODate('2023-12-15'),
	},
	{
		titulo: 'SENA Anuncia Nuevos Programas de Formación',
		contenido:
			'El SENA amplía su oferta formativa con programas actualizados y relevantes para el mercado laboral',
		fecha: ISODate('2023-06-11'),
	},
	{
		titulo: 'SENA Participa en Feria de Empleo Local',
		contenido:
			'La institución se une a una feria de empleo local para conectar a sus egresados con oportunidades laborales',
		fecha: ISODate('2022-08-18'),
	},
	{
		titulo: 'SENA Abre Inscripciones para Cursos en Línea Gratuitos',
		contenido:
			'Se abre el registro para cursos en línea gratuitos ofrecidos por el SENA, brindando acceso a la educación a distancia',
		fecha: ISODate('2022-10-22'),
	},
	{
		titulo: 'SENA Firma Acuerdo de Cooperación Internacional',
		contenido:
			'La institución establece un acuerdo de colaboración con una entidad extranjera para fortalecer sus programas de formación y capacitación',
		fecha: ISODate('2022-04-30'),
	},
]);

db.prestamos.insertMany([
	{
		codigo: '71375087',
		producto: 'Portatil',
		descripcion: 'Lenovo 23g, Ram: 16GB, Procsador: Core i5, ',
		fecha_prestamo: ISODate('2021-02-02'),
		fecha_entrega: ISODate('2023-12-28T13:30')
	},
	{
		codigo: '14143463',
		producto: 'Libro Matematicas',
		descripcion: 'Funciones Trigonometricas',
		fecha_prestamo: ISODate('2022-04-12'),
		fecha_entrega: ISODate('2023-12-15T14:15')
	},
	{
		codigo: '89456578',
		producto: 'Pipeta',
		descripcion: 'Utencilio cientifico para muestras',
		fecha_prestamo: ISODate('2022-11-28'),
		fecha_entrega: ISODate('2023-12-15T15:20')
	},
	{
		codigo: '5454643',
		producto: 'Teclado',
		descripcion: 'hyperX',
		fecha_prestamo: ISODate('2023-02-09'),
		fecha_entrega: ISODate('2023-12-15T14:00')
	},
	{
		codigo: '46757793',
		producto: 'Impresora',
		descripcion: 'EPSON',
		fecha_prestamo: ISODate('2023-07-24'),
		fecha_entrega: ISODate('2023-12-15T14:00')
	}
]);

db.formaciones.insertMany([
	{
		ficha: '2502639',
		nombre: 'Análisis y desarrollo de software',
		ambiente: '106',
		tipo: 'Tecnólogo',
		jornada: 'Mañana',
		sede: 'Principal',
	},
	{
		ficha: '5435432',
		nombre: 'Gestión empresarial',
		ambiente: '232',
		tipo: 'Tecnólogo',
		jornada: 'Tarde',
		sede: 'Alterna',
	},
	{
		ficha: '7890564',
		nombre: 'Barismo',
		ambiente: '128',
		tipo: 'Técnico',
		jornada: 'Tarde',
		sede: 'Principal',
	},
	{
		ficha: '0745984',
		nombre: 'Gestión agroempresarial',
		ambiente: '236',
		tipo: 'Tecnólogo',
		jornada: 'Noche',
		sede: 'Virtual',
	},
	{
		ficha: '5474567856',
		nombre: 'Producción musical',
		ambiente: 'Teams',
		tipo: 'Curso corto',
		jornada: 'Mañana',
		sede: 'Virtual',
	},
	{
		ficha: '666',
		nombre: 'Defensa contra las artes oscuras',
		ambiente: '101',
		tipo: 'Tecnólogo',
		jornada: 'Noche',
		sede: 'Principal',
	},
]);

db.asistencias.insertMany([]);