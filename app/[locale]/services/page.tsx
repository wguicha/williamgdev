'use client';
import { motion } from 'framer-motion';
import { Zap, BarChart, Code, Activity } from 'lucide-react';


export default function Services() {
    const services = [
        {
            title: 'Automation & Workflows',
            desc: 'Automate repetitive tasks and connect APIs with n8n to boost efficiency and accuracy.',
            icon: <Zap className="w-8 h-8 mb-4 text-blue-600" />
        },
        {
            title: 'Data Analytics & Dashboards',
            desc: 'Build insightful Power BI dashboards and perform ETL processes for data-driven decisions.',
            icon: <BarChart className="w-8 h-8 mb-4 text-blue-600" />
        },
        {
            title: 'Custom Solutions',
            desc: 'Develop tailored tools in Excel, VBA, SQL, or web apps to optimize operations and reporting.',
            icon: <Code className="w-8 h-8 mb-4 text-blue-600" />
        },
        {
            title: 'Process Optimization',
            desc: 'Analyze workflows, reduce costs, and implement continuous improvement strategies.',
            icon: <Activity className="w-8 h-8 mb-4 text-blue-600" />
        }
    ];


    return (
        <section className="space-y-12">
            <motion.h1
                className="text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Services
            </motion.h1>


            <div className="grid md:grid-cols-2 gap-8">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        {s.icon}
                        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}