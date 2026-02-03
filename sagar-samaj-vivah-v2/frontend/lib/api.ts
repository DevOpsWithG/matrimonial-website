import axios from 'axios';

// Create an Axios instance with default config
// On your GCP VM, you might need to adjust the baseURL if testing locally or remotely
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Points to FastAPI
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the auth token
api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

export default api;
