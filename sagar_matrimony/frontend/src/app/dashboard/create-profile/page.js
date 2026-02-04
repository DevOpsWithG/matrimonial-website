'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../../lib/api';
import styles from './create-profile.module.css';

export default function CreateProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
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
        <div className={styles.container}>
            <div className="card">
                <h2>Create Your Profile</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Personal Info */}
                    <div className={styles.section}>
                        <h3>Personal Information</h3>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input name="full_name" value={formData.full_name} onChange={handleChange} required />
                        </div>
                        <div className={styles.row}>
                            <div className="input-group">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Date of Birth</label>
                                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    {/* Community */}
                    <div className={styles.section}>
                        <h3>Community Details</h3>
                        <div className={styles.row}>
                            <div className="input-group">
                                <label>Caste</label>
                                <input value="OBC" disabled style={{ opacity: 0.7, cursor: 'not-allowed' }} />
                            </div>
                            <div className="input-group">
                                <label>Sub Caste</label>
                                <select name="sub_caste" value={formData.sub_caste} onChange={handleChange}>
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
                            <div className="input-group">
                                <label>Height (cm)</label>
                                <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 175" />
                            </div>
                            <div className="input-group">
                                <label>Education</label>
                                <input name="education" value={formData.education} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Job Title / Profession</label>
                            <input name="job_title" value={formData.job_title} onChange={handleChange} required />
                        </div>
                        <div className={styles.row}>
                            <div className="input-group">
                                <label>City</label>
                                <input name="city" value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>State</label>
                                <input name="state" value={formData.state} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>About Me</label>
                        <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4" placeholder="Tell us about yourself..."></textarea>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Profile'}
                    </button>
                </form>
            </div>
        </div>
    );
}
