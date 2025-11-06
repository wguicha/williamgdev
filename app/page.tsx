'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Transform your operations with automation & data intelligence
      </motion.h1>


      <motion.p
        className="text-lg max-w-2xl text-gray-600"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        I help businesses automate workflows, optimize processes, and gain insights with n8n, Power BI, and custom solutions.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
      >
        <Link href="/contact">
          <Button size="lg">Let’s Work Together</Button>
        </Link>
      </motion.div>
    </section>
  );
}