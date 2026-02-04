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
            const response = await fetch(`${API_BASE}${endpoint}`, config);

            if (!response.ok) {
                // Handle 401 Unauthorized by logging out (optional)
                if (response.status === 401) {
                    Cookies.remove('token');
                    if (typeof window !== 'undefined') {
                        // window.location.href = '/auth/login'; // Optional: Redirect
                    }
                }
                const errorData = await response.json();
                throw new Error(errorData.detail || 'API request failed');
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
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
