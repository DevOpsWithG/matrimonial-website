import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Header / Navigation */}
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logo}>
                            Sagar <span className={styles.logoSpan}>Samaj</span> Vivah
                        </div>
                        <div className={styles.navLinks}>
                            <Link href="/" className={styles.navLink}>Home</Link>
                            <Link href="/about" className={styles.navLink}>About Community</Link>
                            <Link href="/contact" className={styles.navLink}>Contact</Link>
                            <Link href="/browse" className={styles.navLink}>Browse (Demo)</Link>
                        </div>
                        <div className={styles.authLinks}>
                            <Link href="/auth/login" className={styles.loginLink}>Log In</Link>
                            <Link href="/auth/register" className={styles.joinBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                Join Now
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <div className={styles.heroBadge}>Exclusive for Hindu Gawandi Community</div>
                            <h1 className={styles.heroTitle}>Find Your Perfect Match within Your Tradition</h1>
                            <p className={styles.heroSubtitle}>
                                Sagar Samaj Vivah connects hearts with shared values. The most trusted matrimonial platform designed specifically for our community.
                            </p>
                            <div className={styles.heroActions}>
                                <Link href="/auth/register" className="btn btn-primary">Create Free Profile</Link>
                                <Link href="/browse" className="btn btn-text">Browse Members</Link>
                            </div>
                        </div>

                        <div className={styles.searchCard}>
                            <h2 className={styles.searchTitle}>Quick Search</h2>
                            <form>
                                <div className="form-group">
                                    <label>I'm looking for a</label>
                                    <select className="form-control">
                                        <option>Bride</option>
                                        <option>Groom</option>
                                    </select>
                                </div>
                                <div className={styles.searchRow}>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label>Age Range</label>
                                        <select className="form-control">
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                        </select>
                                    </div>
                                    <div style={{ marginBottom: '1.75rem', color: '#666' }}>to</div>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label>&nbsp;</label>
                                        <select className="form-control">
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="button" className={styles.searchBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    Search Matches
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className={styles.features}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Why Choose Sagar Samaj Vivah?</h2>
                        <p className={styles.sectionSubtitle}>We blend tradition with technology to help you find your soulmate.</p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h3>100% Verified Profiles</h3>
                            <p>Every profile is manually screened to ensure safety and trust for all members.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3>Dedicated to Gawandi</h3>
                            <p>Exclusive community focus means relevant matches with shared cultural values.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>
                                    <path d="M8 10s1.5 2 4 2 4-2 4-2"></path>
                                    <path d="M9 10h.01"></path>
                                    <path d="M15 10h.01"></path>
                                </svg>
                            </div>
                            <h3>Privacy Control</h3>
                            <p>You decide who sees your photo and contact details. Complete control over specific data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Ready to write your love story?</h2>
                    <p className={styles.ctaSubtitle}>Join thousands of happy couples from the Sagar Samaj.</p>
                    <Link href="/auth/register" className="btn btn-primary">Get Started Today</Link>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logo} style={{ color: 'white' }}>
                                Sagar <span className={styles.logoSpan}>Samaj</span> Vivah
                            </div>
                            <p>Connecting hearts within the Hindu Gawandi community with trust and tradition.</p>
                        </div>
                        <div>
                            <h3 className={styles.footerTitle}>Quick Links</h3>
                            <div className={styles.footerLinks}>
                                <Link href="/about" className={styles.footerLink}>About Us</Link>
                                <Link href="/contact" className={styles.footerLink}>Contact Support</Link>
                                <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        © 2024 Sagar Samaj Vivah. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
