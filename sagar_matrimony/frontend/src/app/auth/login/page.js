'use client';

import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import styles from './login.module.css';
import Link from 'next/link';

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState(''); // Email or Phone
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(username, password);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0B0F19' }}>
            <div style={{ padding: '2rem 1rem 1rem', textAlign: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                    Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                </Link>
            </div>

            <div className={styles.container} style={{ flex: 1, paddingTop: '0' }}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Welcome Back</h2>
                    <p className={styles.subtitle}>Log in to continue your search</p>

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email or Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g. name@example.com or 9876543210"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className={styles.footer}>
                        Don't have an account? <Link href="/auth/register">Register here</Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#0B0F19', color: 'white', padding: '5rem 0 2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                        <div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>
                                Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                            </div>
                            <p style={{ color: '#94A3B8', maxWidth: '400px', marginTop: '1.5rem', lineHeight: 1.6 }}>Connecting hearts within the Hindu Gawandi community with trust and tradition.</p>
                        </div>
                        <div>
                            <h3 style={{ color: '#F59E0B', fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.5rem' }}>Quick Links</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <Link href="/about" style={{ color: '#94A3B8' }}>About Us</Link>
                                <Link href="/contact" style={{ color: '#94A3B8' }}>Contact Support</Link>
                                <Link href="/privacy" style={{ color: '#94A3B8' }}>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', textAlign: 'center', color: '#475569', fontSize: '0.875rem' }}>
                        © 2024 Sagar Samaj Vivah. All rights reserved.
                    </div>
                </div>
            </footer>
        </main >
    );
}
