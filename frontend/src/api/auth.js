import axios from './axios'

export const RegisterRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const verifyTokenrequest = () => axios.get(`/verify`)

export const logout = () => axios.post(`/logout`)

export const attends = async () => {
    return axios.get('/getAsistencias')
        .then(response => response.data)
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
            throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función
        });
};