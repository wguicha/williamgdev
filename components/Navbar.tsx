'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full border-b border-gray-200 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md fixed top-0 z-50 transition-all">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 relative group flex items-baseline">
                    <span>will</span>
                    <motion.span
                        className="text-4xl text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        IA
                    </motion.span>
                    <span>m G</span>
                    <span className="ml-1">dev</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
                </Link>

                <div className="flex items-center gap-6 text-sm md:text-base">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                                pathname === link.href
                                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                                    : 'text-gray-700 dark:text-gray-300'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
