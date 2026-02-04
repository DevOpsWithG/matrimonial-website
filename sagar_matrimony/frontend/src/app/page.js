import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logo}>Sagar Samaj Vivah</div>
                        <div className={styles.links}>
                            <Link href="/auth/login" className="btn btn-secondary">Login</Link>
                            <Link href="/auth/register" className="btn">Register</Link>
                        </div>
                    </nav>
                </div>
            </header>

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Unite with Your Soulmate</h1>
                    <p className={styles.heroSubtitle}>
                        Dedicated to the <strong>Gawandi</strong> and <strong>Sagar Samaj</strong> community.
                        Find your perfect match with trust and tradition.
                    </p>
                    <div className={styles.cta}>
                        <Link href="/auth/register" className="btn">Start Your Journey</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
