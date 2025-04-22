import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import ExamInfo from './components/ExamInfo/ExamInfo';
import Resources from './components/Resources/Resources';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <ExamInfo />
        <Resources />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App; 