import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> fb67c22 (third commit)
