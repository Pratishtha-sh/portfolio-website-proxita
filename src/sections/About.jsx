import React, { useRef } from 'react'

const About = () => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section id="about" className="py-24 space-y-20">
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">About Me</h2>
            </div>

            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="glass-card p-8 md:p-12 group w-full"
            >
                {/* Spotlight overlay */}
                <div className="spotlight-overlay" />

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                        <img
                            src="/images/me.jpg"
                            alt="Pratishtha"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Biography */}
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-col gap-5 about-bio">
                            <p>
                                I like learning by doing, usually by picking something apart, building it, and then rebuilding it a little better.
                            </p>
                            <p>
                                Over time, I’ve explored ideas across AI, machine learning, and systems through a mix of academic work and personal experiments. Not everything I build is meant to be a finished project; many of them are ways for me to understand how things work under the hood.
                            </p>
                            <p>
                                I care more about depth than speed, and I often revisit ideas to refine them as my understanding improves. Right now, I’m focused on turning this exploration into more complete, end-to-end systems, while continuing to learn and go deeper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
