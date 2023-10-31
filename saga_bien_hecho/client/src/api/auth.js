import axios from './axios'

export const RegisterRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const verifyTokenrequest = () => axios.get(`/verify`)

export const logout = () => axios.post(`/logout`)