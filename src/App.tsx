
import { HelmetProvider } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Projects } from './components/Projects';
import { Credo } from './components/Credo';
import { HumanSide } from './components/HumanSide';
import { Footer } from './components/Footer';

function App() {
  const { language } = useLanguage();

  return (
    <HelmetProvider>
      <SEO lang={language} />
      <div className={`min-h-screen bg-black transition-colors duration-300 ${language === 'he' ? 'rtl' : 'ltr'}`}>
        <div className="min-h-screen bg-black text-white pt-20 selection:bg-blue-500/30">
          <Navbar />

          <main className="max-w-7xl mx-auto px-4 md:px-6 space-y-32 pb-20">
            <Hero />
            <About />
            <Services />
            <WhyWorkWithMe />
            <Projects />
            {/* Credo might be redundant or need restyle, keeping for now but ensuring spacing */}
            <Credo />
            <HumanSide />
          </main>

          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
