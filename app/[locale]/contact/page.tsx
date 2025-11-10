'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks for your message! This form can later connect to n8n.');
    };


    return (
        <section className="max-w-xl mx-auto">
            <motion.h1
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Contact Me
            </motion.h1>


            <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </motion.div>


                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </motion.div>


                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2 h-32"
                        required
                    />
                </motion.div>


                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <Button type="submit" size="lg" className="w-full">
                        Send Message
                    </Button>
                </motion.div>
            </motion.form>
        </section>
    );
}