'use client';
import { motion } from 'framer-motion';


export default function About() {
    return (
        <section className="max-w-3xl mx-auto space-y-6">
            <motion.h1
                className="text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                About Me
            </motion.h1>


            <motion.p
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                I specialize in analysis and problem-solving, consistently delivering organized solutions focused on achieving measurable goals. With over 10 years of experience in operations, planning, cost control, and logistics, I help organizations optimize processes and implement automation systems that enhance performance and reduce manual workload.
            </motion.p>


            <motion.p
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                My expertise includes tools like Excel, Power BI, SQL, VBA, and n8n, as well as web technologies such as JavaScript, HTML, and CSS. I’m passionate about data, automation, and the intersection of technology and business intelligence.
            </motion.p>
        </section>
    );
}