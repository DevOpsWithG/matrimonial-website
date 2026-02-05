'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../../../lib/api';
import styles from './search.module.css';

export default function SearchPage() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState('filters'); // 'filters' or 'results'

    const [searchParams, setSearchParams] = useState({
        gender: 'Female',
        min_age: 21,
        max_age: 35,
        min_height: 150,
        max_height: 190,
        education: '',
        job_title: '',
        city: '',
        marital_status: 'Never Married',
        gotra: '',
        sort_by: 'recently_joined'
    });

    const handleParamChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const fetchProfiles = async () => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            Object.keys(searchParams).forEach(key => {
                if (searchParams[key]) {
                    queryParams.append(key, searchParams[key]);
                }
            });
            const data = await api.get(`/profile/search?${queryParams.toString()}`);
            setProfiles(data);
            setView('results');
        } catch (err) {
            console.error(err);
            alert('Failed to fetch profiles');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <main className="dashboard-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-dark)' }}>
            <div className="text-center">
                <div style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Finding your matches...</div>
                <div className="text-muted">Searching through the community</div>
            </div>
        </main>
    );

    if (view === 'filters') {
        return (
            <main className="dashboard-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
                <div style={{ padding: '2rem', textAlign: 'left' }}>
                    <Link href="/dashboard" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                        Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                    </Link>
                </div>

                <div className={styles.container} style={{ flex: 1, padding: '0 1.5rem 4rem' }}>
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem', border: 'none' }}>Match Search</h2>
                            <p style={{ color: 'var(--slate-400)' }}>Define your expectations to find the perfect partner.</p>
                        </header>

                        <div className={styles.filterForm}>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Looking For</label>
                                    <select className="form-control" name="gender" value={searchParams.gender} onChange={handleParamChange}>
                                        <option value="Female">Bride (Brides)</option>
                                        <option value="Male">Groom (Grooms)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Marital Status</label>
                                    <select className="form-control" name="marital_status" value={searchParams.marital_status} onChange={handleParamChange}>
                                        <option value="Never Married">Never Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Awaiting Divorce">Awaiting Divorce</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Age Range</label>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <input type="number" className="form-control" name="min_age" value={searchParams.min_age} onChange={handleParamChange} placeholder="Min" />
                                        <span style={{ color: 'white' }}>to</span>
                                        <input type="number" className="form-control" name="max_age" value={searchParams.max_age} onChange={handleParamChange} placeholder="Max" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Height Range (cm)</label>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <input type="number" className="form-control" name="min_height" value={searchParams.min_height} onChange={handleParamChange} placeholder="Min" />
                                        <span style={{ color: 'white' }}>to</span>
                                        <input type="number" className="form-control" name="max_height" value={searchParams.max_height} onChange={handleParamChange} placeholder="Max" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>Education</label>
                                    <input className="form-control" name="education" value={searchParams.education} onChange={handleParamChange} placeholder="Degree, e.g. BE, MBBS" />
                                </div>
                                <div className="form-group">
                                    <label>Profession</label>
                                    <input className="form-control" name="job_title" value={searchParams.job_title} onChange={handleParamChange} placeholder="e.g. Engineer, Doctor" />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label>City / Location</label>
                                    <input className="form-control" name="city" value={searchParams.city} onChange={handleParamChange} placeholder="Search by city" />
                                </div>
                                <div className="form-group">
                                    <label>Kul / Gotra</label>
                                    <input className="form-control" name="gotra" value={searchParams.gotra} onChange={handleParamChange} placeholder="Search by Gotra" />
                                </div>
                            </div>

                            <button onClick={fetchProfiles} className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.25rem', marginTop: '2rem' }}>
                                Find Matches
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="dashboard-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/dashboard" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                    Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                </Link>
                <button onClick={() => setView('filters')} className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>
                    Modify Search
                </button>
            </div>

            <div className={styles.container} style={{ flex: 1, padding: '0 1.5rem 4rem' }}>
                <header className={styles.header}>
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem', border: 'none' }}>Search Results</h2>
                    <p style={{ color: 'var(--slate-400)' }}>Showing profiles matching your expectations.</p>
                </header>

                <div className={styles.grid}>
                    {profiles.map(profile => (
                        <div key={profile.id} className={`card ${styles.profileCard}`}>
                            <div className={styles.avatar}>
                                {profile.photos && profile.photos.length > 0 ? (
                                    <img src={profile.photos[0]} alt={profile.full_name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                ) : (
                                    profile.gender === 'Male' ? '🤴' : '👸'
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: 'white', border: 'none', padding: 0, marginBottom: '0.5rem' }}>{profile.full_name}</h3>
                            <p className={styles.subcaste}>{profile.sub_caste}</p>
                            <p className={styles.detail}>{profile.city}, {profile.state}</p>
                            <p style={{ color: 'var(--slate-300)', fontWeight: 600 }}>{profile.education}</p>
                            <p className={styles.job}>{profile.job_title}</p>
                            <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--slate-400)' }}>
                                <span>{profile.height} cm</span>
                                <span>•</span>
                                <span>{profile.marital_status}</span>
                            </div>
                            {profile.bio && <p className={styles.bio}>"{profile.bio}"</p>}

                            <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>View Full Profile</button>
                        </div>
                    ))}
                    {profiles.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '6rem 0', color: 'var(--slate-400)' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔍</div>
                            <h3 style={{ color: 'white', marginBottom: '1rem', border: 'none' }}>No direct matches found</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Try broadening your search criteria (e.g. increase age range or remove city filter).</p>
                            <button onClick={() => setView('filters')} className="btn btn-primary">Adjust Filters</button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}


