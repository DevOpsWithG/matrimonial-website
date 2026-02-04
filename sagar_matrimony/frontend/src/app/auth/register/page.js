'use client';

import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import styles from '../login/login.module.css'; // Reuse login styles
import Link from 'next/link';

export default function RegisterPage() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        setError('');
        setLoading(true);
        try {
            await register(email, phone, password);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={`card ${styles.card}`}>
                <h2 className={styles.title}>Join Sagar Samaj</h2>
                <p className={styles.subtitle}>Begin your journey today</p>

                {error && <div className={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email (Optional)</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +919876543210"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {password.length > 0 && password.length < 8 && (
                            <small style={{ color: '#EF4444', display: 'block', marginTop: '0.25rem' }}>
                                Must be at least 8 characters long.
                            </small>
                        )}
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </button>
                </form>

                <p className={styles.footer}>
                    Already have an account? <Link href="/auth/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}
