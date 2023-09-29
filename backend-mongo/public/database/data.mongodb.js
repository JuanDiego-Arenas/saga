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
		_id: {
			$oid: '65142813082f2a63d43cdcfa',
		},
		titulo: 'Evento De HalLowen',
		contenido:
			'El dia de mañana se realizar un evento de disfrazes para la celebracion de Hallowen',
		fecha: ISODate('2023-10-28'),
	},
	{
		_id: {
			$oid: '65142813082f2a63d43cdcfb',
		},
		titulo: 'Viaje recreativo',
		contenido:
			'Para una despedida del la formacion ADSO se hara una salida recreativa en una zona rural',
		fecha: ISODate('2023-12-15'),
	},
	{
		_id: {
			$oid: '65142813082f2a63d43cdcfc',
		},
		titulo: 'SENA Anuncia Nuevos Programas de Formación',
		contenido:
			'El SENA amplía su oferta formativa con programas actualizados y relevantes para el mercado laboral',
		fecha: ISODate('2023-06-11'),
	},
	{
		_id: {
			$oid: '65142813082f2a63d43cdcfd',
		},
		titulo: 'SENA Participa en Feria de Empleo Local',
		contenido:
			'La institución se une a una feria de empleo local para conectar a sus egresados con oportunidades laborales',
		fecha: ISODate('2022-08-18'),
	},
	{
		_id: {
			$oid: '65142813082f2a63d43cdcfe',
		},
		titulo: 'SENA Abre Inscripciones para Cursos en Línea Gratuitos',
		contenido:
			'Se abre el registro para cursos en línea gratuitos ofrecidos por el SENA, brindando acceso a la educación a distancia',
		fecha: ISODate('2022-10-22'),
	},
	{
		_id: {
			$oid: '65142813082f2a63d43cdcff',
		},
		titulo: 'SENA Firma Acuerdo de Cooperación Internacional',
		contenido:
			'La institución establece un acuerdo de colaboración con una entidad extranjera para fortalecer sus programas de formación y capacitación',
		fecha: ISODate('2022-04-30'),
	},
]);
