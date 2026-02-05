'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    const { user, loading: authLoading } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetchProfile();
        } else if (!authLoading) {
            // Not logged in handled by layout or middleware ideally
            setLoading(false);
        }
    }, [user, authLoading]);

    const fetchProfile = async () => {
        try {
            const data = await api.get('/profile/me');
            setProfile(data);
        } catch (err) {
            // Profile not found - User needs to create one
            setProfile(null);
        } finally {
            setLoading(false);
        }
    };

    if (authLoading || loading) return <div className="container">Loading...</div>;

    if (!profile) {
        // User has no profile
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0B0F19' }}>
                <div style={{ padding: '1.5rem 2rem', textAlign: 'left' }}>
                    <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                        Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                    </Link>
                </div>

                <div className={styles.container} style={{ flex: 1, paddingTop: '0', paddingBottom: '3rem' }}>
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Complete Your Profile</h2>
                        <p style={{ textAlign: 'center' }}>You need to create a profile to start searching for matches.</p>
                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                            <Link href="/dashboard/create-profile" className="btn">Create Profile</Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // ... updating the other return statement ...

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0B0F19' }}>
            <div style={{ padding: '1.5rem 2rem', textAlign: 'left' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                    Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                </Link>
            </div>

            <div className={styles.container} style={{ flex: 1, paddingTop: '0', paddingBottom: '3rem' }}>
                <header className={styles.header} style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Namaste, {profile.full_name}</h1>
                    <span className={`${styles.status} ${profile.is_approved ? styles.approved : styles.pending}`}>
                        {profile.is_approved ? 'Approved' : 'Pending Approval'}
                    </span>
                </header>

                <div className={styles.grid}>
                    <div className="card">
                        <h3>Your Profile</h3>
                        <p><strong>Caste:</strong> {profile.caste} ({profile.sub_caste})</p>
                        <p><strong>Location:</strong> {profile.city}, {profile.state}</p>
                        <p><strong>Job:</strong> {profile.job_title}</p>
                        <div style={{ marginTop: '1rem' }}>
                            <Link href="/dashboard/create-profile" className="btn btn-secondary">Edit Profile</Link>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Find Matches</h3>
                        {profile.is_approved ? (
                            <p>Search for your perfect partner within the community.</p>
                        ) : (
                            <p className={styles.locked}>Your profile is pending approval data. Matches are hidden.</p>
                        )}

                        <div style={{ marginTop: '1rem' }}>
                            {profile.is_approved ? (
                                <Link href="/dashboard/search" className="btn">Search Profiles</Link>
                            ) : (
                                <button className="btn" disabled>Search Locked</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
