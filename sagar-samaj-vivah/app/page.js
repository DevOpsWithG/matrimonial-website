import Link from 'next/link';
import { Search, Shield, Users, HeartHandshake } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="badge">Exclusive for Hindu Gawandi Community</span>
                        <h1>Find Your Perfect Match within Your Tradition</h1>
                        <p>
                            Sagar Samaj Vivah connects hearts with shared values.
                            The most trusted matrimonial platform designed specifically for our community.
                        </p>

                        <div className="hero-actions">
                            <Link href="/signup" className="btn btn-accent btn-lg">
                                Create Free Profile
                            </Link>
                            <Link href="/dashboard" className="btn btn-outline-light">
                                Browse Members
                            </Link>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="search-widget glass-panel">
                            <h3>Quick Search</h3>
                            <div className="form-group">
                                <label>I'm looking for a</label>
                                <select>
                                    <option>Bride</option>
                                    <option>Groom</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Age Range</label>
                                <div className="age-inputs">
                                    <select><option>20</option><option>21</option><option>25</option></select>
                                    <span>to</span>
                                    <select><option>25</option><option>30</option><option>35</option></select>
                                </div>
                            </div>
                            <button className="btn btn-primary full-width">
                                <Search size={18} /> Search Matches
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="hero-bg"></div>
            </section>

            {/* Features Section */}
            <section className="features section-pad">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Sagar Samaj Vivah?</h2>
                        <p>We blend tradition with technology to help you find your soulmate.</p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>100% Verified Profiles</h3>
                            <p>Every profile is manually screened to ensure safety and trust for all members.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Users size={32} /></div>
                            <h3>Dedicated to Gawandi</h3>
                            <p>Exclusive community focus means relevant matches with shared cultural values.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><HeartHandshake size={32} /></div>
                            <h3>Privacy Control</h3>
                            <p>You decide who sees your photo and contact details. Complete control over specific data.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta section-pad">
                <div className="container center-text">
                    <h2>Ready to write your love story?</h2>
                    <p>Join thousands of happy couples from the Sagar Samaj.</p>
                    <Link href="/signup" className="btn btn-accent btn-lg">Get Started Today</Link>
                </div>
            </section>

            <style jsx>{`
        /* Hero Styles */
        .hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.15) 0%, transparent 40%);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .badge {
          display: inline-block;
          background: rgba(245, 158, 11, 0.2);
          color: var(--accent);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        .hero-text h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: white; /* Override default primary color */
        }
        .hero-text p {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }
        .btn-outline-light {
          border: 2px solid rgba(255,255,255,0.2);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
        }
        .btn-outline-light:hover {
          background: white;
          color: var(--primary);
        }

        /* Search Widget */
        .search-widget {
          padding: 2rem;
          border-radius: 1.5rem;
          background: rgba(255,255,255,0.95);
          color: var(--text-main);
        }
        .search-widget h3 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        select {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          font-family: inherit;
        }
        .age-inputs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .full-width {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }

        /* Features */
        .section-pad {
          padding: 5rem 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .icon-box {
          width: 70px;
          height: 70px;
          background: rgba(15, 23, 42, 0.05);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .feature-card p {
          color: var(--text-muted);
        }

        /* CTA */
        .cta {
          background: var(--primary);
          color: white;
        }
        .cta h2 { color: white; margin-bottom: 1rem; }
        .cta p { color: #94a3b8; margin-bottom: 2rem; }
        .center-text { text-align: center; }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text p { margin: 0 auto 2.5rem; }
          .hero-actions { justify-content: center; }
          .hero-card { max-width: 500px; margin: 0 auto; }
          .hero-text h1 { font-size: 2.5rem; }
        }
      `}</style>
        </>
    );
}
