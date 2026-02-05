import Link from 'next/link';
import styles from '../page.module.css';

export default function ContactPage() {
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

            {/* Content Section */}
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className={styles.heroTitle}>Get in Touch</h1>
                        <p className={styles.heroSubtitle}>
                            Have questions or need assistance? Our support team is here to help you on your journey.
                            Email us at <strong>support@sagarsamajvivah.com</strong> or call us at <strong>+91 98765 43210</strong>.
                        </p>
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
