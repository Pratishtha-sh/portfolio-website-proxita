import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetail = ({ project, onBack }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <section className="min-h-screen pt-28 pb-8 px-5 md:px-10 bg-bg-main relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/2 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 text-text-secondary hover:text-white transition-colors cursor-pointer"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-mono text-base uppercase tracking-widest">Back to Projects</span>
                </button>

                {/* Header Row */}
                <div className="mb-12 space-y-8">
                    <div className="space-y-4 max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight"
                        >
                            {project.title}
                        </motion.h1>
                        {project.subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 }}
                                className="text-accent-primary text-lg md:text-xl font-mono italic"
                            >
                                {project.subtitle}
                            </motion.p>
                        )}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-text-secondary text-base md:text-lg font-mono leading-relaxed max-w-3xl"
                        >
                            {project.intent}
                        </motion.p>
                    </div>

                    {/* Links shifted completely left */}
                    <div className="flex flex-wrap gap-4 shrink-0 justify-start w-full">
                        {project.id !== 'customer-feedback-automation' && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm font-bold uppercase tracking-widest"
                            >
                                Source Code
                            </a>
                        )}
                        {project.href && (
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-accent-primary text-white rounded-full hover:brightness-110 transition-all duration-300 font-mono text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(202,62,49,0.3)]"
                            >
                                Check Live Site
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Snippets Section - Scaled Down Carousel with Object Contain (Moved to Top) */}
                <div className="space-y-10 max-w-5xl mx-auto mb-16">
                    <div className="space-y-3 text-center">
                        <h2 className="text-lg font-mono uppercase tracking-[0.2em] text-accent-primary">Project Snippets</h2>
                        <p className="text-text-secondary font-mono text-xl">Exploring the build through snapshots</p>
                    </div>

                    <div className="relative group mx-auto">
                        <div className="overflow-hidden rounded-3xl h-[400px] md:h-[500px] bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-4 md:p-6 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full relative flex flex-col items-center justify-center"
                                >
                                    <img
                                        src={project.images[currentImageIndex].url}
                                        alt={project.images[currentImageIndex].caption}
                                        className="max-w-full max-h-full object-contain rounded-xl shadow-lg border border-white/5"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-xl" />
                                    {project.images[currentImageIndex].caption && (
                                        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center px-6">
                                            <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 shadow-2xl max-w-2xl text-center">
                                                <p className="text-white/90 font-mono text-sm md:text-base">
                                                    {project.images[currentImageIndex].caption}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10 z-20">
                            <button
                                onClick={prevImage}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all text-white text-2xl shadow-xl"
                            >
                                ←
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 z-20">
                            <button
                                onClick={nextImage}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all text-white text-2xl shadow-xl"
                            >
                                →
                            </button>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-4 mt-10">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-16 h-2 transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'bg-accent-primary shadow-[0_0_10px_rgba(202,62,49,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content: 2-Column for 'What I Built' and 'Tech Stack' aligned at top */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
                    {/* Left: What I Built */}
                    <div className="lg:col-span-7">
                        {project.whatBuilt && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-mono uppercase tracking-[0.2em] text-accent-primary">What I Built</h2>
                                <div className="text-text-primary text-lg md:text-xl leading-relaxed whitespace-pre-line tracking-wide">
                                    {project.whatBuilt}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Tech List */}
                    <div className="lg:col-span-5 p-8 glass-card border border-white/5 bg-white/5 rounded-3xl h-fit">
                        <h2 className="text-lg font-mono uppercase tracking-[0.2em] text-accent-primary mb-6">What I worked with</h2>
                        <ul className="space-y-3">
                            {project.techUsedList.map((tech, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-text-secondary font-mono text-lg border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(202,62,49,0.5)]" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* How the System Works - Divided into 2 columns */}
                <div className="space-y-6 mb-16 max-w-7xl">
                    <h2 className="text-lg font-mono uppercase tracking-[0.2em] text-accent-primary">
                        {project.systemSteps ? 'How the System Works' : project.whatBuilt ? 'How the System Works' : 'Refinement & Learning'}
                    </h2>
                    {project.systemSteps ? (
                        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {project.systemSteps.map((step, index) => (
                                <li key={index} className="flex gap-6 items-start">
                                    <span className="font-mono text-accent-primary font-bold shrink-0 text-3xl">{index + 1}.</span>
                                    <div>
                                        <strong className="text-white font-semibold text-lg md:text-xl">{step.title}</strong>
                                        <p className="text-text-primary/90 text-base md:text-lg mt-2 leading-relaxed">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div className="text-text-primary text-lg md:text-xl leading-relaxed whitespace-pre-line">
                            {project.learned}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
