'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Automation & Workflows',
        desc: 'Automate repetitive tasks and connect APIs with n8n to boost efficiency and accuracy.',
        stack: ['n8n', 'REST APIs', 'webhooks', 'AI agents'],
    },
    {
        num: '02',
        title: 'Data Analytics & Dashboards',
        desc: 'Build insightful Power BI dashboards and perform ETL processes for data-driven decisions.',
        stack: ['Power BI', 'SQL', 'ETL', 'DAX'],
    },
    {
        num: '03',
        title: 'Custom Solutions',
        desc: 'Develop tailored tools in Excel, VBA, SQL, or web apps to optimize operations and reporting.',
        stack: ['Excel', 'VBA', 'SQL', 'Next.js'],
    },
    {
        num: '04',
        title: 'Process Optimization',
        desc: 'Analyze workflows, reduce costs, and implement continuous improvement strategies.',
        stack: ['process mapping', 'KPIs', 'cost control'],
    },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="flex flex-col gap-8 py-20 md:py-32">
                <motion.p
                    className="font-mono text-brand-accent text-sm tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    n8n · Power BI · Data Analysis · Next.js
                </motion.p>

                <motion.h1
                    className="font-mono text-4xl md:text-6xl font-bold leading-tight text-brand-text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    I build systems<br />
                    that run<br />
                    <span className="text-brand-accent">without you.</span>
                </motion.h1>

                <motion.p
                    className="text-base max-w-xl text-[#888880] leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    Automation pipelines, data intelligence, and custom tools that eliminate manual work
                    and surface decisions you actually need.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                >
                    <Link href="/contact">
                        <button className="font-mono text-sm px-6 py-3 bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent/90 transition-colors">
                            → Let's Work Together
                        </button>
                    </Link>
                </motion.div>
            </section>

            {/* Services */}
            <section className="space-y-0 pb-24">
                <motion.h2
                    className="font-mono text-xs tracking-widest uppercase text-[#555550] mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                >
                    // what I do
                </motion.h2>

                <div className="flex flex-col divide-y divide-[#1F1F1F]">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="flex gap-6 md:gap-12 py-8 pl-4 border-l-2 border-transparent hover:border-brand-accent transition-colors duration-300 group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                        >
                            <span className="font-mono text-sm text-[#444440] w-8 shrink-0 pt-1">
                                {s.num} /
                            </span>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-mono text-lg font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-[#888880] leading-relaxed max-w-lg">
                                    {s.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {s.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-xs text-[#555550] border border-[#2A2A2A] px-2 py-0.5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
