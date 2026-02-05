'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../../../lib/api';
import styles from './search.module.css';

export default function SearchPage() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        try {
            const data = await api.get('/profile/search');
            setProfiles(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredProfiles = filter === 'All'
        ? profiles
        : profiles.filter(p => p.gender === filter);

    if (loading) return <div className="container">Loading matches...</div>;

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
            <div style={{ padding: '2rem', textAlign: 'left' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                    Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                </Link>
            </div>

            <div className={styles.container} style={{ flex: 1, padding: '0 1.5rem 4rem' }}>
                <header className={styles.header}>
                    <h2>Find Your Match</h2>
                    <div className={styles.filters}>
                        <button
                            onClick={() => setFilter('All')}
                            className={`${styles.filterBtn} ${filter === 'All' ? styles.filterBtnActive : ''}`}
                        >
                            All Members
                        </button>
                        <button
                            onClick={() => setFilter('Male')}
                            className={`${styles.filterBtn} ${filter === 'Male' ? styles.filterBtnActive : ''}`}
                        >
                            Grooms
                        </button>
                        <button
                            onClick={() => setFilter('Female')}
                            className={`${styles.filterBtn} ${filter === 'Female' ? styles.filterBtnActive : ''}`}
                        >
                            Brides
                        </button>
                    </div>
                </header>

                <div className={styles.grid}>
                    {filteredProfiles.map(profile => (
                        <div key={profile.id} className={`card ${styles.profileCard}`}>
                            <div className={styles.avatar}>
                                {profile.gender === 'Male' ? '🤴' : '👸'}
                            </div>
                            <h3>{profile.full_name}</h3>
                            <p className={styles.subcaste}>{profile.sub_caste}</p>
                            <p className={styles.detail}>{profile.city}, {profile.state}</p>
                            <p className={styles.job}>{profile.job_title}</p>
                            {profile.bio && <p className={styles.bio}>"{profile.bio}"</p>}

                            <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>View Full Profile</button>
                        </div>
                    ))}
                    {filteredProfiles.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 0', color: 'var(--slate-400)' }}>
                            <p style={{ fontSize: '1.25rem' }}>No profiles found matching your selection.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

