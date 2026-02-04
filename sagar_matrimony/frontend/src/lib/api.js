import Cookies from 'js-cookie';

const API_BASE = '/api'; // Proxied by Next.js to Nginx

const api = {
    async request(endpoint, options = {}) {
        const token = Cookies.get('token');

        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            ...options,
            headers,
        };

        try {
            const url = `${API_BASE}${endpoint}`;
            const response = await fetch(url, config);

            if (!response.ok) {
                let errorMsg = 'API request failed';
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.detail || errorMsg;
                } catch (e) {
                    const text = await response.text();
                    errorMsg = text || `Error ${response.status}: ${response.statusText}`;
                }
                throw new Error(errorMsg);
            }

            return await response.json();
        } catch (error) {
            console.error('Fetch Error:', error);
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error('Connection to API failed. Please check if the services are running.');
            }
            throw error;
        }
    },

    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    get(endpoint) {
        return this.request(endpoint, {
            method: 'GET',
        });
    },

    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
};

export default api;
