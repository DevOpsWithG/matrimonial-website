import Link from 'next/link';
import styles from '../page.module.css';

export default function BrowsePage() {
    return (
        <main className={styles.main} style={{ backgroundColor: 'var(--navy-950)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1.5rem 2rem', textAlign: 'left' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                    Sagar <span style={{ color: '#F59E0B' }}>Samaj</span> Vivah
                </Link>
            </div>

            {/* Content Section */}
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className={styles.heroTitle}>Browse Profiles</h1>
                        <p className={styles.heroSubtitle}>
                            Discover potential matches from the community. Please <strong>Log In</strong> or <strong>Register</strong> to view full profiles and use advanced filters.
                        </p>
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link href="/auth/register" className="btn btn-primary">Join Now to Browse</Link>
                        </div>
                    </div>
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
