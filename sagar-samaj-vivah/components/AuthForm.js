"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Mail, Lock, User, Phone } from 'lucide-react';

export default function AuthForm({ mode = 'login' }) {
    const router = useRouter();
    const isLogin = mode === 'login';
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                <p>{isLogin ? 'Log in to continue your search' : 'Join Sagar Samaj Vivah today'}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <div className="form-group">
                        <label>Full Name</label>
                        <div className="input-wrapper">
                            <User size={18} />
                            <input type="text" placeholder="e.g. Rahul Sharma" required />
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                        <Mail size={18} />
                        <input type="email" placeholder="you@example.com" required />
                    </div>
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <div className="input-wrapper">
                            <Phone size={18} />
                            <input type="tel" placeholder="+91 98765 43210" required />
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        <Lock size={18} />
                        <input type="password" placeholder="••••••••" required />
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
          max-width: 450px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .auth-header h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .auth-header p { color: var(--text-muted); }
        
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
        .input-wrapper input:focus {
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
