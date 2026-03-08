import React from 'react';
import { myProjects } from '../constants/index.js';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onClick(project)}
            className="group relative cursor-pointer glass-card p-10 h-full flex flex-col justify-between overflow-hidden"
        >
            <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-primary transition-colors">
                        {project.title}
                    </h3>
                    {project.subtitle && (
                        <p className="text-accent-primary/80 font-mono text-sm md:text-base italic opacity-70 group-hover:opacity-100 transition-opacity">
                            {project.subtitle}
                        </p>
                    )}
                    <p className="text-text-secondary font-mono text-base md:text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        {project.intent}
                    </p>
                </div>
            </div>


            <div className="mt-12 flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-accent-primary opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <span>View Exploration</span>
                <span className="text-lg">→</span>
            </div>

            {/* Subtle corner glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                style={{ backgroundColor: project.logoStyle?.backgroundColor || 'var(--accent-primary)' }}
            />
        </motion.div>
    );
};

const Projects = ({ onSelectProject }) => {
    return (
        <section id="work" className="py-24 space-y-20 w-full">
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Projects</h2>
                <p className="text-text-secondary font-mono text-lg opacity-60">Narratives of exploration and build</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {myProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        project={project}
                        onClick={onSelectProject}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
