"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User, Heart, MessageSquare } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Matches", href: "/matches" },
        { name: "Membership", href: "/pricing" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                            SSV<span className="text-foreground">.2</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary border-b-2 border-primary" : "text-gray-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-sm font-medium hover:text-primary">
                            Login
                        </Link>
                        <Link href="/register" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold hover:bg-primary/90 transition-colors">
                            Join Now
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-foreground focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <Link href="/login" className="block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>Login</Link>
                            <Link href="/register" className="block px-3 py-2 text-base font-medium text-primary" onClick={() => setIsOpen(false)}>Register</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
