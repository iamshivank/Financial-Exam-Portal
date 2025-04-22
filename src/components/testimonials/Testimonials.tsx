import React, { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
    quote: string;
    name: string;
    position: string;
}

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            quote: "The FRM certification has been invaluable in my career progression. It provided me with the comprehensive knowledge needed to succeed in risk management.",
            name: "Sarah Johnson",
            position: "Chief Risk Officer, Global Bank"
        },
        {
            quote: "Obtaining my FRM was one of the best professional decisions I've made. The curriculum is rigorous but incredibly relevant to today's financial challenges.",
            name: "Michael Chen",
            position: "Senior Risk Analyst, Investment Firm"
        },
        {
            quote: "The FRM designation has given me credibility in an increasingly competitive field. The knowledge gained has been directly applicable to my daily work.",
            name: "Priya Patel",
            position: "Market Risk Manager, Asset Management"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonials">
            <h2>What FRM Holders Say</h2>
            <div className="testimonial-container">
                <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p>{testimonial.quote}</p>
                            <h4>{testimonial.name}</h4>
                            <span>{testimonial.position}</span>
                        </div>
                    ))}
                </div>
                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 