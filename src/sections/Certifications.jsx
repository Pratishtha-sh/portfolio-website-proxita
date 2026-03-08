import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../constants/index.js';

const CertificationItem = ({ cert, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] rounded-xl transition-all group"
    >
        <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-accent-primary transition-colors">
                {cert.title}
            </h3>
            <p className="text-text-secondary font-mono text-xs uppercase tracking-widest opacity-60">
                {cert.issuer}
            </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center">
            <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-[0.2em] text-accent-primary hover:text-white transition-colors flex items-center gap-1 group/link"
            >
                [View certificate (PDF)]
                <span className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all">→</span>
            </a>
        </div>
    </motion.div>
);

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    const defaultCerts = certifications.filter(c => c.category === 'default');
    const moreCerts = certifications.filter(c => c.category === 'more');

    return (
        <section id="certifications" className="py-24 border-t border-white/5 space-y-20 w-full">
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Learning & Certifications</h2>
                <p className="text-text-secondary font-mono text-lg opacity-60">Continuous growth through focused education</p>
            </div>

            <div className="space-y-2">
                {defaultCerts.map((cert, index) => (
                    <CertificationItem key={index} cert={cert} index={index} />
                ))}

                <AnimatePresence>
                    {showAll && moreCerts.map((cert, index) => (
                        <CertificationItem
                            key={index + defaultCerts.length}
                            cert={cert}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {!showAll && moreCerts.length > 0 && (
                <div className="pt-4">
                    <button
                        onClick={() => setShowAll(true)}
                        className="text-accent-primary font-mono text-sm uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                        <span>Show more ({moreCerts.length})</span>
                        <span className="translate-y-0.5 group-hover:translate-y-1 transition-transform">↓</span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Certifications;
