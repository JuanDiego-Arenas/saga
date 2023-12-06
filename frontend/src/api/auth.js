import instance from './axios';

export const RegisterRequest = user => instance.post(`/register`, user)

export const loginRequest = user => instance.post(`/login`, user)

export const verifyTokenrequest = () => instance.get(`/verify`)

export const logout = () => instance.post(`/logout`)

export const attends = async () => {
    return instance.get('/getAsistencias')
        .then(response => response.data)
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
            throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función
        });
};

export const registerAttendance = attendanceData => {
    return instance.post('/registerAttendance', attendanceData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
            throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función
        });
};