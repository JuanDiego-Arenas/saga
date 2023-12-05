import axios from "axios";


const instance = axios.create({
	baseURL: VITE_API_URL,
	withCredentials: true,
});

export default instance