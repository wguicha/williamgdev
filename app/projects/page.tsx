'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects: { title: string; tag: string; desc: string; highlights: string[]; link: string | null; caseStudy?: string }[] = [
    {
        title: 'Meta Invoice Automation',
        tag: 'n8n · AI · Google Drive',
        desc: 'Automated pipeline that monitors a shared Google Drive folder for Meta ad invoices, reads and extracts data using AI, and tabulates everything into a structured report. Built for agencies managing multiple clients, where Meta can generate dozens of invoices per month across different ad accounts.',
        highlights: [
            'AI-powered invoice parsing — no manual data entry',
            'Google Drive integration for seamless client handoff',
            'Handles multiple clients and ad accounts at scale',
        ],
        link: null,
        caseStudy: '/projects/meta-invoice',
    },
    {
        title: 'Production Operations Dashboard',
        tag: 'Power BI · SQL · ETL · VBA',
        desc: 'End-to-end data solution for a large printing company in Colombia. Tracks daily production progress order by order, pulling data from multiple SQL databases, web sources, and internal systems through a full ETL process. VBA macros automate daily report generation and refresh the Power BI dashboard for real-time operational visibility.',
        highlights: [
            'Multi-source ETL: SQL databases + web data + internal systems',
            'Order-level daily tracking across the entire production floor',
            'Automated daily refresh via VBA macros',
        ],
        link: null,
    },
    {
        title: 'Loan Projections Calculator',
        tag: 'Web App · Finance · Data Viz',
        desc: 'Web application for mortgage amortization analysis. Users can calculate their full amortization schedule and run rate-change scenarios — seeing exactly how their payments and total interest shift when rates move. Built with interactive charts for clear financial decision-making.',
        highlights: [
            'Full amortization schedule generation',
            'Interest rate scenario comparisons with charts',
            'Live at loanprojections.com',
        ],
        link: 'https://loanprojections.com',
    },
];

export default function Projects() {
    return (
        <section className="space-y-12 py-16">
            <div>
                <motion.p
                    className="font-mono text-brand-accent text-xs tracking-widest uppercase mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    // projects
                </motion.p>
                <motion.h1
                    className="font-mono text-4xl font-bold text-brand-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Selected Work
                </motion.h1>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="p-6 bg-brand-surface border border-[#222220] hover:border-brand-accent/30 transition-colors duration-300 flex flex-col gap-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        <div>
                            <span className="font-mono text-xs text-[#444440] uppercase tracking-widest">
                                {p.tag}
                            </span>
                            <h3 className="font-mono text-lg font-semibold mt-2 mb-2 text-brand-text">{p.title}</h3>
                            <p className="text-[#888880] text-sm leading-relaxed">{p.desc}</p>
                        </div>

                        <ul className="space-y-1 mt-auto">
                            {p.highlights.map((h, j) => (
                                <li key={j} className="font-mono text-xs text-[#555550] flex gap-2">
                                    <span className="text-brand-accent">—</span>
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-2 mt-1">
                            {p.caseStudy && (
                                <Link
                                    href={p.caseStudy}
                                    className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-accent hover:underline"
                                >
                                    <ArrowRight size={12} />
                                    view case study
                                </Link>
                            )}
                            {p.link && (
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-accent hover:underline"
                                >
                                    <ExternalLink size={12} />
                                    {p.link.replace('https://', '')}
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
