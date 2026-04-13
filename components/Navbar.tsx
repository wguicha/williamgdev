'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: '/', label: 'home' },
    { href: '/projects', label: 'projects' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={cn(
                'w-full fixed top-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-brand-bg/80 backdrop-blur-md border-b border-[#1F1F1F]'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between py-5 px-6">
                <Link href="/" className="font-mono text-brand-text font-bold text-lg tracking-tight hover:text-brand-accent transition-colors">
                    WG.dev
                </Link>

                <div className="flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'font-mono transition-colors',
                                pathname === link.href
                                    ? 'text-brand-accent'
                                    : 'text-[#888880] hover:text-brand-text'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
