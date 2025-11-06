'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <section className="flex flex-col items-center text-center gap-6">
            <motion.h1
                className="text-9xl font-bold text-blue-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                404
            </motion.h1>
            <motion.h2
                className="text-3xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Page Not Found
            </motion.h2>
            <motion.p
                className="text-lg max-w-md text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Sorry, the page you are looking for does not exist. You can go back to the homepage.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Link href="/">
                    <Button size="lg">Go to Homepage</Button>
                </Link>
            </motion.div>
        </section>
    );
}
