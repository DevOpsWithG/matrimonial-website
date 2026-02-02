"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, User } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Mock auth state - in a real app this comes from context
    const isLoggedIn = false;

    return (
        <nav className="navbar glass-panel">
            <div className="container nav-content">
                <Link href="/" className="logo">
                    Sagar <span className="logo-accent">Samaj</span> Vivah
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Community</Link>
                    <Link href="/contact">Contact</Link>
                    {isLoggedIn ? (
                        <>
                            <Link href="/dashboard">Browse Profiles</Link>
                            <Link href="/matches">Matches</Link>
                        </>
                    ) : (
                        <Link href="/dashboard">Browse (Demo)</Link>
                    )}
                </div>

                <div className="nav-actions desktop-only">
                    {isLoggedIn ? (
                        <button className="btn btn-primary"><User size={18} /> My Profile</button>
                    ) : (
                        <>
                            <Link href="/login" className="btn-text">Log In</Link>
                            <Link href="/signup" className="btn btn-accent"><Heart size={16} fill="white" /> Join Now</Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu glass-panel">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>Browse Profiles</Link>
                    <Link href="/login" onClick={() => setIsOpen(false)}>Log In</Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>Join Now</Link>
                </div>
            )}

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }
        .logo-accent {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-main);
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .btn-text {
          font-weight: 600;
          margin-right: 0.5rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
        </nav>
    );
}
