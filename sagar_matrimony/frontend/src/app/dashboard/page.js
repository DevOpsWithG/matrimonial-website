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
            <div className={styles.container}>
                <div className="card">
                    <h2>Complete Your Profile</h2>
                    <p>You need to create a profile to start searching for matches.</p>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Link href="/dashboard/create-profile" className="btn">Create Profile</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Namaste, {profile.full_name}</h1>
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
    );
}
