'use client';

import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import styles from '../login/login.module.css'; // Reuse login styles
import Link from 'next/link';

export default function RegisterPage() {
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
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
            const fullPhone = `${countryCode}${phone.replace(/\D/g, '')}`;
            await register(email, fullPhone, password);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header / Navigation */}
            <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', padding: '0.75rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0B0F19' }}>
                            Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <Link href="/" style={{ fontWeight: 500, color: '#475569', fontSize: '0.95rem' }}>Home</Link>
                            <Link href="/about" style={{ fontWeight: 500, color: '#475569', fontSize: '0.95rem' }}>About Community</Link>
                            <Link href="/contact" style={{ fontWeight: 500, color: '#475569', fontSize: '0.95rem' }}>Contact</Link>
                            <Link href="/browse" style={{ fontWeight: 500, color: '#475569', fontSize: '0.95rem' }}>Browse (Demo)</Link>
                        </div>
                        <div>
                            <Link href="/auth/register" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '0.6rem 1.4rem', borderRadius: '9999px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Join Sagar Samaj</h2>
                    <p className={styles.subtitle}>Begin your journey today</p>

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email (Optional)</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <select
                                    className="form-control"
                                    style={{ width: '100px', flexShrink: 0 }}
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                >
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+971">+971 (UAE)</option>
                                    <option value="+61">+61 (AU)</option>
                                    <option value="+1">+1 (CA)</option>
                                </select>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Mobile Number"
                                    required
                                />
                            </div>
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
                            {password.length > 0 && password.length < 8 && (
                                <small style={{ color: '#EF4444', display: 'block', marginTop: '0.25rem' }}>
                                    Must be at least 8 characters long.
                                </small>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                            {loading ? 'Creating Account...' : 'Register'}
                        </button>
                    </form>

                    <p className={styles.footer}>
                        Already have an account? <Link href="/auth/login">Login here</Link>
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
        </main>
    );
}
