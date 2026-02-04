'use client';

import { useEffect, useState } from 'react';
import api from '../../lib/api';
import styles from './admin.module.css';

export default function AdminPage() {
    const [pending, setPending] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPending();
    }, []);

    const fetchPending = async () => {
        try {
            const data = await api.get('/profile/pending');
            setPending(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const approveProfile = async (id) => {
        try {
            await api.put(`/profile/${id}/approve`, {});
            setPending(pending.filter(p => p.id !== id));
        } catch (err) {
            alert("Failed to approve");
        }
    };

    if (loading) return <div className="container">Loading...</div>;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Admin Dashboard</h1>
                <p>Pending Approvals: {pending.length}</p>
            </header>

            <div className={styles.grid}>
                {pending.length === 0 ? (
                    <p>No pending profiles.</p>
                ) : (
                    pending.map(profile => (
                        <div key={profile.id} className="card">
                            <h3>{profile.full_name}</h3>
                            <p><strong>DoB:</strong> {profile.date_of_birth}</p>
                            <p><strong>Caste:</strong> {profile.sub_caste}</p>
                            <p><strong>Bio:</strong> {profile.bio}</p>
                            <div className={styles.actions}>
                                <button
                                    className="btn"
                                    onClick={() => approveProfile(profile.id)}
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
