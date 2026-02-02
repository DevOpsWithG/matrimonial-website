"use client";
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

export const metadata = {
  title: 'Upgrade to Premium - Sagar Samaj Vivah',
};

export default function PricingPage() {
  return (
    <div className="container pricing-page">
      <div className="pricing-header">
        <span className="badge">Premium Plans</span>
        <h1>Unlock Exclusive Features</h1>
        <p>Take the next step in finding your life partner with our premium benefits.</p>
      </div>

      <div className="pricing-grid">
        {/* Free Plan */}
        <div className="pricing-card basic">
          <div className="card-header">
            <h3>Basic</h3>
            <div className="price">Free</div>
            <p>To get you started</p>
          </div>
          <ul className="features-list">
            <li><Check size={18} /> Create Profile</li>
            <li><Check size={18} /> Browse Limited Profiles</li>
            <li><Check size={18} /> Send Interest (5/month)</li>
            <li className="disabled"><Check size={18} /> Chat with Matches</li>
            <li className="disabled"><Check size={18} /> View Contact Numbers</li>
          </ul>
          <button className="btn btn-outline full-btn">Current Plan</button>
        </div>

        {/* Gold Plan */}
        <div className="pricing-card popular">
          <div className="popular-tag">Most Popular</div>
          <div className="card-header">
            <h3>Gold Membership</h3>
            <div className="price">₹2,999<span className="period">/3 mos</span></div>
            <p>Serious about marriage</p>
          </div>
          <ul className="features-list">
            <li><Check size={18} /> Everything in Basic</li>
            <li><Check size={18} /> Unlimited Profile Viewing</li>
            <li><Check size={18} /> Send Unlimited Interests</li>
            <li><Check size={18} /> Chat with Matches</li>
            <li><Check size={18} /> 25 Verified Contacts</li>
          </ul>
          <button className="btn btn-primary full-btn">Upgrade Now</button>
        </div>

        {/* Platinum Plan */}
        <div className="pricing-card">
          <div className="card-header">
            <h3>Platinum</h3>
            <div className="price">₹5,999<span className="period">/6 mos</span></div>
            <p>Maximum visibility & support</p>
          </div>
          <ul className="features-list">
            <li><Check size={18} /> Everything in Gold</li>
            <li><Check size={18} /> 50 Verified Contacts</li>
            <li><Check size={18} /> Relationship Manager</li>
            <li><Check size={18} /> Priority Support</li>
            <li><Check size={18} /> Profile Highlighter</li>
          </ul>
          <button className="btn btn-accent full-btn">Select Platinum</button>
        </div>
      </div>

      <style jsx>{`
        .pricing-page {
          padding-top: 4rem;
          padding-bottom: 6rem;
          text-align: center;
        }
        .pricing-header {
          max-width: 600px;
          margin: 0 auto 4rem;
        }
        .badge {
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: block;
        }
        .pricing-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: center;
        }
        .pricing-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          text-align: left;
          position: relative;
        }
        .pricing-card.popular {
          border: 2px solid var(--accent);
          transform: scale(1.05);
          box-shadow: 0 20px 40px -10px rgba(245, 158, 11, 0.2);
          z-index: 2;
        }
        .popular-tag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .price {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
        }
        .period {
          font-size: 1rem;
          color: var(--text-muted);
          font-weight: 400;
        }
        .features-list {
          list-style: none;
          margin: 2rem 0;
        }
        .features-list li {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          align-items: center;
        }
        .features-list li svg {
          color: var(--accent);
          flex-shrink: 0;
        }
        .features-list li.disabled {
          color: #cbd5e1;
        }
        .features-list li.disabled svg {
          color: #cbd5e1;
        }
        .full-btn { width: 100%; justify-content: center; }
        .btn-outline {
          border: 1px solid var(--primary);
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
