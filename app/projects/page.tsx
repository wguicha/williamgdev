'use client';
import { motion } from 'framer-motion';


export default function Projects() {
    const projects = [
        {
            title: 'Invoice Automation Flow',
            desc: 'An n8n workflow to download, parse, and record invoice data automatically.'
        },
        {
            title: 'Financial Dashboard',
            desc: 'Power BI dashboard integrating multiple Excel and SQL data sources.'
        },
        {
            title: 'Production Cost Tracker',
            desc: 'Custom Excel + VBA tool to monitor production costs and KPIs in real time.'
        }
    ];


    return (
        <section className="space-y-12">
            <motion.h1
                className="text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Projects
            </motion.h1>


            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-gray-600">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}