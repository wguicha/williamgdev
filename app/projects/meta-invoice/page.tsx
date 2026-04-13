'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Invoice lands in Drive',
        desc: 'Meta generates PDF invoices per ad account. The client drops them into a shared Google Drive folder — no other action required.',
    },
    {
        num: '02',
        title: 'n8n detects the new file',
        desc: 'A Google Drive trigger in n8n fires as soon as a new file appears in the monitored folder. No polling interval — event-driven.',
    },
    {
        num: '03',
        title: 'AI reads the PDF',
        desc: 'The invoice is passed to an AI node with a structured extraction prompt. It identifies client name, ad account ID, billing period, line items, taxes, and total.',
    },
    {
        num: '04',
        title: 'Data is validated & normalized',
        desc: 'A code node cleans and normalizes the extracted fields — currency formatting, date standardization, null checks — before writing anywhere.',
    },
    {
        num: '05',
        title: 'Report is updated automatically',
        desc: 'Structured rows are appended to a Google Sheet. Each invoice becomes one row. The client gets a live, consolidated report across all accounts and months.',
    },
];

const stack = [
    { label: 'Orchestration', value: 'n8n' },
    { label: 'Trigger', value: 'Google Drive API' },
    { label: 'AI parsing', value: 'OpenAI GPT-4o' },
    { label: 'Output', value: 'Google Sheets' },
    { label: 'Format', value: 'PDF invoices' },
    { label: 'Hosting', value: 'n8n Cloud' },
];

const results = [
    { metric: '~6 hrs', label: 'saved per month per client' },
    { metric: '0', label: 'manual data entry steps' },
    { metric: '100%', label: 'invoice coverage across accounts' },
    { metric: '<30 s', label: 'from upload to report row' },
];

/* ─── Pipeline SVG ─────────────────────────────────────── */
function PipelineDiagram() {
    const nodes = [
        { id: 'meta',   label: 'Meta Ads',      sub: 'PDF invoice',       x: 60  },
        { id: 'drive',  label: 'Google Drive',  sub: 'shared folder',     x: 210 },
        { id: 'n8n',    label: 'n8n Trigger',   sub: 'event-driven',      x: 360 },
        { id: 'ai',     label: 'AI Parser',     sub: 'GPT-4o',            x: 510 },
        { id: 'sheet',  label: 'Report',        sub: 'Google Sheets',     x: 660 },
    ];

    const nodeW = 110;
    const nodeH = 56;
    const cy = 70;

    return (
        <div className="overflow-x-auto">
            <svg
                viewBox="0 0 780 140"
                className="w-full min-w-[600px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
                {/* Connector lines */}
                {nodes.slice(0, -1).map((n, i) => {
                    const x1 = n.x + nodeW;
                    const x2 = nodes[i + 1].x;
                    const mid = (x1 + x2) / 2;
                    return (
                        <g key={`line-${i}`}>
                            <motion.line
                                x1={x1} y1={cy}
                                x2={x2} y2={cy}
                                stroke="#2A2A2A"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                            />
                            {/* animated dot */}
                            <motion.circle
                                r="3"
                                fill="#00FF88"
                                initial={{ cx: x1, opacity: 0 }}
                                animate={{ cx: [x1, x2], opacity: [0, 1, 0] }}
                                transition={{
                                    delay: 1 + i * 0.2,
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                                cy={cy}
                            />
                            {/* arrowhead */}
                            <motion.polygon
                                points={`${x2},${cy} ${x2 - 8},${cy - 5} ${x2 - 8},${cy + 5}`}
                                fill="#2A2A2A"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + i * 0.15 }}
                            />
                        </g>
                    );
                })}

                {/* Nodes */}
                {nodes.map((n, i) => (
                    <motion.g
                        key={n.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                    >
                        <rect
                            x={n.x}
                            y={cy - nodeH / 2}
                            width={nodeW}
                            height={nodeH}
                            fill="#1A1A1A"
                            stroke={i === 0 || i === nodes.length - 1 ? '#00FF88' : '#2A2A2A'}
                            strokeWidth="1"
                            rx="2"
                        />
                        <text
                            x={n.x + nodeW / 2}
                            y={cy - 6}
                            textAnchor="middle"
                            fill="#E8E8E0"
                            fontSize="10"
                            fontWeight="600"
                        >
                            {n.label}
                        </text>
                        <text
                            x={n.x + nodeW / 2}
                            y={cy + 10}
                            textAnchor="middle"
                            fill="#555550"
                            fontSize="8.5"
                        >
                            {n.sub}
                        </text>
                    </motion.g>
                ))}

                {/* Step numbers below */}
                {nodes.map((n, i) => (
                    <motion.text
                        key={`step-${i}`}
                        x={n.x + nodeW / 2}
                        y={115}
                        textAnchor="middle"
                        fill="#333330"
                        fontSize="9"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                    >
                        {String(i + 1).padStart(2, '0')}
                    </motion.text>
                ))}
            </svg>
        </div>
    );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function MetaInvoicePage() {
    return (
        <article className="max-w-3xl mx-auto py-16 space-y-16">

            {/* Back */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#555550] hover:text-brand-accent transition-colors"
                >
                    <ArrowLeft size={12} /> back to projects
                </Link>
            </motion.div>

            {/* Header */}
            <div className="space-y-4">
                <motion.p
                    className="font-mono text-brand-accent text-xs tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    // case study
                </motion.p>
                <motion.h1
                    className="font-mono text-4xl md:text-5xl font-bold text-brand-text leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                >
                    Meta Invoice<br />Automation
                </motion.h1>
                <motion.p
                    className="font-mono text-xs text-[#444440] tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    n8n · AI · Google Drive · Google Sheets
                </motion.p>
                <motion.p
                    className="text-[#888880] text-base leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    A fully automated pipeline that watches a shared Google Drive for Meta ad invoices,
                    extracts every relevant field using AI, and consolidates everything into a live report —
                    without anyone touching a spreadsheet.
                </motion.p>
            </div>

            {/* Problem */}
            <motion.div
                className="space-y-4 border-l-2 border-[#222220] pl-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// the problem</p>
                <p className="text-[#888880] leading-relaxed">
                    Digital agencies running Meta campaigns for multiple clients deal with a flood of PDF invoices
                    every month — one per ad account, per billing cycle. Meta can generate 30–50 invoices
                    a month for a mid-sized agency. Someone had to open each PDF, copy the data into a spreadsheet,
                    and reconcile totals. That process was slow, error-prone, and completely manual.
                </p>
                <p className="text-[#888880] leading-relaxed">
                    The goal: zero human intervention from invoice arrival to consolidated report.
                </p>
            </motion.div>

            {/* Pipeline diagram */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// pipeline</p>
                <div className="bg-brand-surface border border-[#1F1F1F] p-6">
                    <PipelineDiagram />
                </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-6">
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// how it works</p>
                <div className="flex flex-col divide-y divide-[#1A1A1A]">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            className="flex gap-6 py-6 group"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.07 }}
                        >
                            <span className="font-mono text-sm text-[#333330] w-8 shrink-0 pt-0.5">
                                {s.num} /
                            </span>
                            <div>
                                <h3 className="font-mono text-sm font-semibold text-brand-text mb-1">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-[#888880] leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stack */}
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// tech stack</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {stack.map((s) => (
                        <div
                            key={s.label}
                            className="bg-brand-surface border border-[#222220] p-4"
                        >
                            <p className="font-mono text-xs text-[#444440] uppercase tracking-widest mb-1">
                                {s.label}
                            </p>
                            <p className="font-mono text-sm text-brand-text">{s.value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Results */}
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
            >
                <p className="font-mono text-xs text-[#555550] uppercase tracking-widest">// results</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {results.map((r, i) => (
                        <div key={i} className="border-l-2 border-brand-accent pl-4 py-2">
                            <p className="font-mono text-2xl font-bold text-brand-accent">{r.metric}</p>
                            <p className="font-mono text-xs text-[#555550] mt-1 leading-snug">{r.label}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="pt-4 border-t border-[#1A1A1A]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <p className="text-[#888880] text-sm mb-4">
                    Need something similar built for your agency?
                </p>
                <Link href="/contact">
                    <button className="font-mono text-sm px-6 py-3 bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent/90 transition-colors">
                        → Let's Talk
                    </button>
                </Link>
            </motion.div>

        </article>
    );
}
