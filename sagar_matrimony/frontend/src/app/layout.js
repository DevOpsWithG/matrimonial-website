import './globals.css';
import { AuthProvider } from '../context/AuthContext';

export const metadata = {
    title: 'Sagar Samaj Vivah | Premier Matrimony',
    description: 'Exclusive matrimonial platform for Gawandi and Sagar Samaj',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
            </head>
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
