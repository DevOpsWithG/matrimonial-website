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
        native_place: '',
        gotra: '',
        family_details: '',
        bio: '',
        marital_status: 'Never Married',
        education: '',
        job_title: '',
        income_range: '',
        city: '',
        state: '',
        height: '',
        horoscope: '',
        partner_preference: '',
        photos: ['', '', ''] // Start with 3 slots
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoChange = (index, value) => {
        const newPhotos = [...formData.photos];
        newPhotos[index] = value;
        setFormData(prev => ({ ...prev, photos: newPhotos }));
    };

    const addPhotoSlot = () => {
        if (formData.photos.length < 6) {
            setFormData(prev => ({ ...prev, photos: [...prev.photos, ''] }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Clean up photos (remove empty strings)
            const cleanPhotos = formData.photos.filter(p => p.trim() !== '');
            if (cleanPhotos.length < 3) {
                throw new Error('Please provide at least 3 photos (links for now).');
            }

            const payload = {
                ...formData,
                height: formData.height ? parseInt(formData.height) : null,
                photos: cleanPhotos
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
        <main className="dashboard-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
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
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Height (cm)</label>
                                    <input className="form-control" type="number" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 175" />
                                </div>
                                <div className="form-group">
                                    <label>Marital Status</label>
                                    <select className="form-control" name="marital_status" value={formData.marital_status} onChange={handleChange}>
                                        <option value="Never Married">Never Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Awaiting Divorce">Awaiting Divorce</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Community Detail */}
                        <div className={styles.section}>
                            <h3>Community Details</h3>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Caste</label>
                                    <input className="form-control" value="OBC (Gawandi - Sagar Samaj)" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Sub Caste</label>
                                    <select className="form-control" name="sub_caste" value={formData.sub_caste} onChange={handleChange}>
                                        <option value="Gawandi">Gawandi</option>
                                        <option value="Sagar Samaj">Sagar Samaj</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Native Place (Gaon)</label>
                                    <input className="form-control" name="native_place" value={formData.native_place} onChange={handleChange} required placeholder="Your ancestral village" />
                                </div>
                                <div className="form-group">
                                    <label>Kul / Gotra</label>
                                    <input className="form-control" name="gotra" value={formData.gotra} onChange={handleChange} required placeholder="Your Gotra" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Family Details</label>
                                <textarea className="form-control" name="family_details" value={formData.family_details} onChange={handleChange} rows="3" placeholder="Tell us about your parents, siblings, etc."></textarea>
                            </div>
                        </div>

                        {/* Professional & Location */}
                        <div className={styles.section}>
                            <h3>Professional & Location</h3>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Education</label>
                                    <input className="form-control" name="education" value={formData.education} onChange={handleChange} required placeholder="Highest degree earned" />
                                </div>
                                <div className="form-group">
                                    <label>Annual Income Range</label>
                                    <select className="form-control" name="income_range" value={formData.income_range} onChange={handleChange}>
                                        <option value="">Select Range</option>
                                        <option value="Below 3L">Below 3 Lakhs</option>
                                        <option value="3L - 5L">3L - 5 Lakhs</option>
                                        <option value="5L - 10L">5L - 10 Lakhs</option>
                                        <option value="10L - 20L">10L - 20 Lakhs</option>
                                        <option value="Above 20L">Above 20 Lakhs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Job Title / Profession</label>
                                <input className="form-control" name="job_title" value={formData.job_title} onChange={handleChange} required placeholder="e.g. Software Engineer, Civil Contractor" />
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

                        {/* Preferences & Bio */}
                        <div className={styles.section}>
                            <h3>Additional Details</h3>
                            <div className="form-group">
                                <label>Horoscope Details (Optional)</label>
                                <input className="form-control" name="horoscope" value={formData.horoscope} onChange={handleChange} placeholder="Manglik status, Rashi, etc." />
                            </div>
                            <div className="form-group">
                                <label>About Me</label>
                                <textarea className="form-control" name="bio" value={formData.bio} onChange={handleChange} rows="4" placeholder="Share your values, interests, and personality..."></textarea>
                            </div>
                            <div className="form-group">
                                <label>Partner Preference</label>
                                <textarea className="form-control" name="partner_preference" value={formData.partner_preference} onChange={handleChange} rows="4" placeholder="Describe the kind of person you are looking for..."></textarea>
                            </div>
                        </div>

                        {/* Photos */}
                        <div className={styles.section}>
                            <h3>Photos (3 - 6 images)</h3>
                            <p style={{ color: 'var(--slate-400)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                Please provide image URLs for now. A real upload feature will be added soon.
                            </p>
                            <div className={styles.photosGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {formData.photos.map((photo, index) => (
                                    <div key={index} className="form-group">
                                        <label>Photo {index + 1} URL</label>
                                        <input
                                            className="form-control"
                                            value={photo}
                                            onChange={(e) => handlePhotoChange(index, e.target.value)}
                                            placeholder={`URL for photo ${index + 1}`}
                                            required={index < 3}
                                        />
                                    </div>
                                ))}
                            </div>
                            {formData.photos.length < 6 && (
                                <button type="button" onClick={addPhotoSlot} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                                    + Add More Photo Slots
                                </button>
                            )}
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.25rem' }} disabled={loading}>
                                {loading ? 'Saving Profile...' : 'Create My Marriage Profile'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}


