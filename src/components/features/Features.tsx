import React, { useState } from 'react';
import './Features.css';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const Features: React.FC = () => {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const features: Feature[] = [
        {
            icon: '📊',
            title: 'Industry Recognition',
            description: 'The FRM credential is the most widely respected designation for risk management professionals worldwide.'
        },
        {
            icon: '💼',
            title: 'Career Advancement',
            description: 'FRM certification holders earn significantly higher salaries and have access to more senior positions.'
        },
        {
            icon: '🌐',
            title: 'Global Network',
            description: 'Join a community of over 70,000 certified FRMs working in nearly every major market across the globe.'
        }
    ];

    return (
        <section className="features">
            <h2>Why Choose the FRM Certification?</h2>
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`feature-card ${hoveredFeature === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredFeature(index)}
                        onMouseLeave={() => setHoveredFeature(null)}
                    >
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        {hoveredFeature === index && (
                            <div className="feature-overlay">
                                <a href="#" className="learn-more">Learn More</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features; 