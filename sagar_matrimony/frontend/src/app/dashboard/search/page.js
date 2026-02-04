'use client';

import { useEffect, useState } from 'react';
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
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>Find Your Match</h2>
                <div className={styles.filters}>
                    <button onClick={() => setFilter('All')} className={filter === 'All' ? 'btn' : 'btn btn-secondary'}>All</button>
                    <button onClick={() => setFilter('Male')} className={filter === 'Male' ? 'btn' : 'btn btn-secondary'}>Grooms</button>
                    <button onClick={() => setFilter('Female')} className={filter === 'Female' ? 'btn' : 'btn btn-secondary'}>Brides</button>
                </div>
            </header>

            <div className={styles.grid}>
                {filteredProfiles.map(profile => (
                    <div key={profile.id} className={`card ${styles.profileCard}`}>
                        <div className={styles.avatar}>
                            {profile.gender === 'Male' ? '🤴' : '👸'}
                        </div>
                        <h3>{profile.full_name}</h3>
                        <p className={styles.detail}>{profile.date_of_birth} • {profile.city}</p>
                        <p className={styles.subcaste}>{profile.sub_caste}</p>
                        <p className={styles.job}>{profile.job_title}</p>
                        {profile.bio && <p className={styles.bio}>"{profile.bio}"</p>}

                        <button className="btn" style={{ marginTop: '1rem', width: '100%' }}>Connect</button>
                    </div>
                ))}
                {filteredProfiles.length === 0 && <p>No profiles found.</p>}
            </div>
        </div>
    );
}
