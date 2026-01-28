import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Credo } from './components/Credo';
import { HumanSide } from './components/HumanSide';
import { Footer } from './components/Footer';
import { MatrixLoader } from './components/MatrixLoader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && <MatrixLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black text-white pt-20 selection:bg-blue-500/30">
          <Navbar />

          <main className="max-w-7xl mx-auto px-4 md:px-6 space-y-32 pb-20">
            <Hero />
            <About />
            <Projects />
            {/* Credo might be redundant or need restyle, keeping for now but ensuring spacing */}
            <Credo />
            <HumanSide />
          </main>

          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
