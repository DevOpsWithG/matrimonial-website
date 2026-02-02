"use client";
import ProfileCard from '@/components/ProfileCard';
import { Filter } from 'lucide-react';

const MOCK_PROFILES = [
  { id: 1, name: 'Priya Patel', age: 24, profession: 'Software Engineer', location: 'Mumbai', isVerified: true, color: '#f87171' },
  { id: 2, name: 'Rahul Gawandi', age: 28, profession: 'Architect', location: 'Pune', isVerified: true, color: '#60a5fa' },
  { id: 3, name: 'Anjali Gupta', age: 26, profession: 'Doctor', location: 'Nashik', isVerified: false, color: '#a78bfa' },
  { id: 4, name: 'Vikram Singh', age: 29, profession: 'Business Owner', location: 'Surat', isVerified: true, color: '#34d399' },
  { id: 5, name: 'Sneha Deshmukh', age: 25, profession: 'Teacher', location: 'Nagpur', isVerified: true, color: '#f472b6' },
  { id: 6, name: 'Amit Kumar', age: 30, profession: 'Bank Manager', location: 'Mumbai', isVerified: false, color: '#fbbf24' },
];


export default function DashboardPage() {
  return (
    <div className="container dashboard-page">
      <div className="dashboard-header">
        <h1>Browse Profiles</h1>
        <button className="btn btn-outline">
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="profiles-grid">
        {MOCK_PROFILES.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      <div className="pagination">
        <button className="btn btn-outline">Previous</button>
        <span className="page-info">Page 1 of 5</span>
        <button className="btn btn-outline">Next</button>
      </div>

      <style jsx>{`
        .dashboard-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .btn-outline {
          background: white;
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        .page-info {
          font-weight: 500;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
