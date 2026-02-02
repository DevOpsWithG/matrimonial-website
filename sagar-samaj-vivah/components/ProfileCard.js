"use client";
import { Heart, Briefcase, MapPin, CheckCircle } from 'lucide-react';

export default function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <div className="card-image">
        <div className="photo-placeholder" style={{ backgroundColor: profile.color || '#cbd5e1' }}>
          <span>{profile.name[0]}</span>
        </div>
        {profile.isVerified && (
          <div className="verified-badge" title="Verified Profile">
            <CheckCircle size={14} fill="var(--accent)" color="white" /> Verified
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{profile.name}, {profile.age}</h3>
          <button className="favorite-btn"><Heart size={18} /></button>
        </div>

        <div className="card-details">
          <div className="detail-row">
            <Briefcase size={16} className="icon-muted" />
            <span>{profile.profession}</span>
          </div>
          <div className="detail-row">
            <MapPin size={16} className="icon-muted" />
            <span>{profile.location}</span>
          </div>
        </div>

        <button className="btn btn-primary full-btn">Send Request</button>
      </div>

      <style jsx>{`
        .profile-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.2s;
          border: 1px solid var(--border);
        }
        .profile-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.1);
        }
        .card-image {
          height: 250px;
          background-color: #f1f5f9;
          position: relative;
        }
        .photo-placeholder {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: white;
          font-family: 'Outfit', sans-serif;
        }
        .verified-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          padding: 0.25rem 0.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .card-header h3 {
          font-size: 1.2rem;
          margin: 0;
        }
        .favorite-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 0;
        }
        .favorite-btn:hover {
          color: #ef4444;
        }
        .card-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .detail-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .icon-muted {
          color: #94a3b8;
        }
        .full-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
