import React, { useRef, useState } from 'react';

const Card = ({ children, className = '' }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for cursor tracking
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`card-premium relative overflow-hidden group ${className}`}
        >
            {/* Glow Overlay using the pseudo-element logic in CSS or inline style for customization */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), var(--glow), transparent 40%)`
                }}
            />

            {/* Content Layer */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default Card;
