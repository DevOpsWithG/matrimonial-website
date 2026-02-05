'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '../../../lib/api';
import styles from './create-profile.module.css';

export default function CreateProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    // ... existing state ...
    const [formData, setFormData] = useState({
        full_name: '',
        gender: 'Male',
        date_of_birth: '',
        sub_caste: 'Gawandi',
        bio: '',
        marital_status: 'Never Married',
        education: '',
        job_title: '',
        city: '',
        state: '',
        height: '',
        photos: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Ensure height is int
            const payload = {
                ...formData,
                height: formData.height ? parseInt(formData.height) : null
            };
            await api.post('/profile/', payload);
            router.push('/dashboard');
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
            <div style={{ padding: '2rem', textAlign: 'left' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                    Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                </Link>
            </div>

            <div className={styles.container} style={{ flex: 1, padding: '0 1.5rem 4rem' }}>
                <div className="card" style={{ maxWidth: '850px', margin: '0 auto' }}>
                    <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>Create Your Profile</h1>
                        <p style={{ color: 'var(--slate-400)' }}>Tell the community about yourself to find the best match.</p>
                    </header>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* Personal Info */}
                        <div className={styles.section}>
                            <h3>Personal Information</h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input className="form-control" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Full name as per records" />
                            </div>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input className="form-control" type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        {/* Community */}
                        <div className={styles.section}>
                            <h3>Community Details</h3>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Caste</label>
                                    <input className="form-control" value="OBC" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Sub Caste</label>
                                    <select className="form-control" name="sub_caste" value={formData.sub_caste} onChange={handleChange}>
                                        <option value="Gawandi">Gawandi</option>
                                        <option value="Sagar Samaj">Sagar Samaj</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Physical & Professional */}
                        <div className={styles.section}>
                            <h3>Physical & Professional</h3>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Height (cm)</label>
                                    <input className="form-control" type="number" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 175" />
                                </div>
                                <div className="form-group">
                                    <label>Education</label>
                                    <input className="form-control" name="education" value={formData.education} onChange={handleChange} required placeholder="Highest degree earned" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Job Title / Profession</label>
                                <input className="form-control" name="job_title" value={formData.job_title} onChange={handleChange} required placeholder="e.g. Software Engineer, Business Owner" />
                            </div>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>City</label>
                                    <input className="form-control" name="city" value={formData.city} onChange={handleChange} required placeholder="Current city" />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input className="form-control" name="state" value={formData.state} onChange={handleChange} required placeholder="Current state" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>About Me</label>
                            <textarea className="form-control" name="bio" value={formData.bio} onChange={handleChange} rows="4" placeholder="Share your values, interests, and what you're looking for..."></textarea>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={loading}>
                                {loading ? 'Saving...' : 'Save Profile & Continue'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

