'use client';
import { motion } from 'framer-motion';

const skills = [
    {
        category: 'Automation',
        items: ['n8n', 'workflow design', 'REST APIs', 'webhooks', 'AI agents'],
    },
    {
        category: 'Data Analysis',
        items: ['Power BI', 'DAX', 'SQL', 'ETL pipelines', 'Excel', 'VBA'],
    },
    {
        category: 'Next.js Development',
        items: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'REST APIs'],
    },
    {
        category: 'Operations',
        items: ['process mapping', 'cost control', 'logistics', 'KPIs', 'planning'],
    },
];

export default function About() {
    return (
        <section className="max-w-3xl mx-auto space-y-12 py-16">
            <motion.p
                className="font-mono text-brand-accent text-xs tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                // about me
            </motion.p>

            <motion.h1
                className="font-mono text-4xl font-bold text-brand-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
            >
                About Me
            </motion.h1>

            <motion.p
                className="text-[#888880] text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
            >
                I specialize in analysis and problem-solving, consistently delivering organized solutions focused on achieving measurable goals. With over 10 years of experience in operations, planning, cost control, and logistics, I help organizations optimize processes and implement automation systems that enhance performance and reduce manual workload.
            </motion.p>

            <motion.p
                className="text-[#888880] text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
            >
                My expertise includes tools like Excel, Power BI, SQL, VBA, and n8n, as well as web technologies such as JavaScript, HTML, and CSS. I'm passionate about data, automation, and the intersection of technology and business intelligence.
            </motion.p>

            {/* Skills */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
            >
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// skills</p>
                <div className="grid md:grid-cols-2 gap-4">
                    {skills.map((group, i) => (
                        <motion.div
                            key={group.category}
                            className="bg-brand-surface border border-[#222220] p-5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.07 }}
                        >
                            <p className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-3">
                                {group.category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-xs text-[#888880] border border-[#2A2A2A] px-2 py-1"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
