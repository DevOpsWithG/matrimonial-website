"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { ArrowRight, Mail, Lock, User, Phone, Briefcase, MapPin } from 'lucide-react';

export default function AuthForm({ mode = 'login' }) {
    const router = useRouter();
    const isLogin = mode === 'login';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        profession: '',
        location: '',
        age: '',
        gender: 'Bride'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isLogin) {
                // NextAuth Login
                const res = await signIn('credentials', {
                    email: formData.email,
                    password: formData.password,
                    redirect: false
                });

                if (res?.error) {
                    setError('Invalid email or password');
                } else {
                    router.push('/dashboard');
                    router.refresh();
                }

            } else {
                // Register API Call
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (res.ok) {
                    // Auto login after signup
                    await signIn('credentials', {
                        email: formData.email,
                        password: formData.password,
                        redirect: false
                    });
                    router.push('/dashboard');
                } else {
                    const data = await res.json();
                    setError(data.message || 'Registration failed');
                }
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                <p>{isLogin ? 'Log in to continue your search' : 'Join Sagar Samaj Vivah today'}</p>
            </div>

            {error && <div className="error-msg">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <div className="signup-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-wrapper">
                                <User size={18} />
                                <input name="name" type="text" placeholder="Rahul Sharma" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <div className="input-wrapper">
                                <input name="age" type="number" placeholder="25" className="simple-input" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>I am searching for</label>
                            <select name="gender" onChange={handleChange} className="simple-input">
                                <option value="Bride">Bride</option>
                                <option value="Groom">Groom</option>
                            </select>
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                        <Mail size={18} />
                        <input name="email" type="email" placeholder="you@example.com" required onChange={handleChange} />
                    </div>
                </div>

                {!isLogin && (
                    <>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <div className="input-wrapper">
                                <Phone size={18} />
                                <input name="mobile" type="tel" placeholder="+91 98765 43210" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Profession</label>
                            <div className="input-wrapper">
                                <Briefcase size={18} />
                                <input name="profession" type="text" placeholder="Engineer" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>City/Location</label>
                            <div className="input-wrapper">
                                <MapPin size={18} />
                                <input name="location" type="text" placeholder="Mumbai" onChange={handleChange} />
                            </div>
                        </div>
                    </>
                )}

                <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        <Lock size={18} />
                        <input name="password" type="password" placeholder="••••••••" required onChange={handleChange} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                    {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
                    {!loading && <ArrowRight size={18} />}
                </button>
            </form>

            <div className="auth-footer">
                {isLogin ? (
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                ) : (
                    <p>Already have an account? <a href="/login">Log in</a></p>
                )}
            </div>

            <style jsx>{`
        .auth-container {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 500px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .auth-header h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .auth-header p { color: var(--text-muted); }
        
        .error-msg {
          background: #fee2e2;
          color: #b91c1c;
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
        }

        .signup-grid {
           display: grid;
           gap: 1rem;
        }
        
        .form-group { margin-bottom: 1.5rem; }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .input-wrapper input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.8rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        .simple-input {
           padding-left: 1rem !important;
        }
        select.simple-input {
           width: 100%;
           padding: 0.8rem;
           border: 1px solid var(--border);
           border-radius: 0.75rem;
        }
        .input-wrapper input:focus, select:focus {
          outline: none;
          border-color: var(--primary);
        }
        .full-width { width: 100%; justify-content: center; }
        
        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .auth-footer a {
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
}
