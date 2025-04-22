import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const examDate = new Date('2024-05-15T09:00:00');
            const now = new Date();
            const difference = examDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <h1>Financial Risk Manager (FRM)</h1>
            <p>The globally recognized professional certification for financial risk management professionals</p>
            <div className="countdown-timer">
                <h3>Next Exam Starts In:</h3>
                <div className="timer-grid">
                    <div className="timer-item">
                        <span className="timer-value">{timeLeft.days}</span>
                        <span className="timer-label">Days</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value">{timeLeft.hours}</span>
                        <span className="timer-label">Hours</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value">{timeLeft.minutes}</span>
                        <span className="timer-label">Minutes</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value">{timeLeft.seconds}</span>
                        <span className="timer-label">Seconds</span>
                    </div>
                </div>
            </div>
            <a href="#" className="cta-button">Register for the FRM Exam</a>
        </section>
    );
};

export default Hero; 