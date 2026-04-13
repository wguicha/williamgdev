'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            const response = await fetch('https://n8n-proxy-nine.vercel.app/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setSubmissionStatus('error');
            }
        } catch {
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        'w-full bg-brand-surface border border-[#2A2A2A] text-brand-text placeholder-[#444440] font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors';

    return (
        <section className="max-w-xl mx-auto py-16 space-y-8">
            <div>
                <motion.p
                    className="font-mono text-brand-accent text-xs tracking-widest uppercase mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    // contact
                </motion.p>
                <motion.h1
                    className="font-mono text-4xl font-bold text-brand-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Let's Work Together
                </motion.h1>
            </div>

            <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block font-mono text-xs text-[#555550] uppercase tracking-widest mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block font-mono text-xs text-[#555550] uppercase tracking-widest mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="block font-mono text-xs text-[#555550] uppercase tracking-widest mb-2">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} h-36 resize-none`}
                        required
                    />
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full font-mono text-sm px-6 py-3 bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent/90 disabled:opacity-50 transition-colors"
                    >
                        {isSubmitting ? '// sending...' : '→ Send Message'}
                    </button>
                </motion.div>
            </motion.form>

            {submissionStatus === 'success' && (
                <p className="font-mono text-sm text-brand-accent text-center">
                    // message sent. I'll get back to you soon.
                </p>
            )}
            {submissionStatus === 'error' && (
                <p className="font-mono text-sm text-red-400 text-center">
                    // something went wrong. Please try again.
                </p>
            )}
        </section>
    );
}
