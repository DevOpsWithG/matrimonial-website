'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import api from '../lib/api';

const AuthContext = createContext({
    user: null,
    loading: false,
    login: async () => { },
    register: async () => { },
    logout: () => { }
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const userData = await api.get('/auth/users/me');
                setUser(userData);
            } catch (err) {
                console.error("Failed to fetch user", err);
                Cookies.remove('token');
                setUser(null);
            }
        }
        setLoading(false);
    };

    const login = async (username, password) => {
        // 1. Get Token
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        // Custom fetch for x-www-form-urlencoded
        const res = await fetch('/api/auth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.detail || 'Login failed');
        }

        const data = await res.json();
        Cookies.set('token', data.access_token, { expires: 7 });

        // 2. Fetch User Profile to get latest data
        await checkUser();
        router.push('/dashboard');
    };

    const register = async (email, phone, password) => {
        await api.post('/auth/register', { email, phone, password });
        // Auto login after register
        await login(email || phone, password);
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
