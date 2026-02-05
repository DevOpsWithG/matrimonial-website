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
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
                <div style={{ padding: '2rem', textAlign: 'left' }}>
                    <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                        Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                    </Link>
                </div>

                <div className={styles.container} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem 4rem' }}>
                    <div className="card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>Complete Your Profile</h2>
                        <p style={{ color: 'var(--slate-400)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Namaste! To begin your journey and find the perfect match within the community, please complete your profile.
                        </p>
                        <Link href="/dashboard/create-profile" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Create Profile
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
            <div style={{ padding: '2rem', textAlign: 'left' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none', fontFamily: 'var(--font-heading)' }}>
                    Sagar <span style={{ color: 'var(--primary)' }}>Samaj</span> Vivah
                </Link>
            </div>

            <div className={styles.container} style={{ flex: 1, padding: '0 1.5rem 4rem' }}>
                <header style={{ marginBottom: '3rem' }}>
                    <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Namaste, {profile.full_name}</h1>
                    <div className={styles.statusWrapper}>
                        <span className={`${styles.status} ${profile.is_approved ? styles.approved : styles.pending}`}>
                            {profile.is_approved ? '✓ Profile Verified' : '⟳ Verification Pending'}
                        </span>
                    </div>
                </header>

                <div className={styles.grid}>
                    <div className="card">
                        <h3>Your Profile</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--slate-300)' }}>
                            <p><strong>Caste:</strong> {profile.caste} ({profile.sub_caste})</p>
                            <p><strong>Location:</strong> {profile.city}, {profile.state}</p>
                            <p><strong>Profession:</strong> {profile.job_title}</p>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/dashboard/create-profile" className="btn btn-outline" style={{ width: '100%' }}>Edit Profile</Link>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Find Matches</h3>
                        {profile.is_approved ? (
                            <p style={{ color: 'var(--slate-300)', marginBottom: '1.5rem' }}>
                                Your profile is verified! You can now explore matches within the community.
                            </p>
                        ) : (
                            <p style={{ color: 'var(--slate-400)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                Your profile is currently under review by our administrators. Matching will be available once approved.
                            </p>
                        )}

                        <div style={{ marginTop: '2rem' }}>
                            {profile.is_approved ? (
                                <Link href="/dashboard/search" className="btn btn-primary" style={{ width: '100%' }}>Search Profiles</Link>
                            ) : (
                                <button className="btn btn-primary" disabled style={{ width: '100%', opacity: 0.5 }}>Search Locked</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

