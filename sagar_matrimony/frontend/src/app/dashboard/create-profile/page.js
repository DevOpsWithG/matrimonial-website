'use client';

import { useState, useEffect } from 'react';
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
        photos: [] // Impl simplified for now
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simplified: always trying POST, ideally PUT if exists
            // But our backend 'create_profile' uses POST and checks existence.
            // We really should have an Update endpoint or check if we are editing.
            // For Initial Task: Just Create logic.
            await api.post('/profile/', formData);
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
                        <div className="input-group">
                            <label>Sub Caste</label>
                            <select name="sub_caste" value={formData.sub_caste} onChange={handleChange}>
                                <option value="Gawandi">Gawandi</option>
                                <option value="Sagar Samaj">Sagar Samaj</option>
                            </select>
                        </div>
                    </div>

                    {/* Professional & Location */}
                    <div className={styles.section}>
                        <h3>Professional & Location</h3>
                        <div className="input-group">
                            <label>Education</label>
                            <input name="education" value={formData.education} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Job Title</label>
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
                        <label>Bio</label>
                        <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4"></textarea>
                    </div>

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Profile'}
                    </button>
                </form>
            </div>
        </div>
    );
}
