import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
    title: 'Sagar Samaj Vivah | Hindu Gawandi Matrimony',
    description: 'The premier matrimonial platform for the Hindu Gawandi community.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
                    {children}
                </main>

                <footer className="site-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div>
                                <h3>Sagar Samaj Vivah</h3>
                                <p>Connecting hearts within the Hindu Gawandi community with trust and tradition.</p>
                            </div>
                            <div>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Support</a></li>
                                    <li><a href="/privacy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            © 2024 Sagar Samaj Vivah. All rights reserved.
                        </div>
                    </div>
                </footer>

                <style>{`
          .site-footer {
            background-color: var(--primary);
            color: white;
            padding: 4rem 0 2rem;
            margin-top: 4rem;
          }
          .site-footer h3 { color: white; margin-bottom: 1rem; }
          .site-footer h4 { color: var(--accent); margin-bottom: 1rem; font-size: 1.1rem; }
          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .site-footer ul { list-style: none; }
          .site-footer li { margin-bottom: 0.5rem; }
          .site-footer a:hover { color: var(--accent); }
          .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
          }
        `}</style>
            </body>
        </html>
    );
}
