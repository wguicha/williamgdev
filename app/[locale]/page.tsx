'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations('Index');
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {t('title')}
      </motion.h1>


      <motion.p
        className="text-lg max-w-2xl text-gray-600"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        {t('description')}
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