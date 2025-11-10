'use client';
import { motion } from 'framer-motion';


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={{
                hidden: { opacity: 0, y: 15 },
                enter: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.2 }}
        >
            {children}
        </motion.main>
    );
}
