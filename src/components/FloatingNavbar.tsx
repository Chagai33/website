import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingNavbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="glass-nav rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <div className="text-xl font-bold text-slate-50">
          <span className="text-blue-400">C</span>Y
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-300 hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            {t({ he: 'אודות', en: 'About' })}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-300 hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            {t({ he: 'פרויקטים', en: 'Projects' })}
          </button>
          <button
            onClick={() => scrollToSection('footer')}
            className="text-slate-300 hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            {t({ he: 'צור קשר', en: 'Contact' })}
          </button>
        </div>

        {/* Language Switch */}
        <button
          onClick={toggleLanguage}
          aria-label={`Switch to ${language === 'he' ? 'English' : 'Hebrew'}`}
          className="p-2 hover:bg-slate-700/50 rounded-full transition-all cursor-pointer focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 group"
        >
          <Languages className="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
          <span className="sr-only">{language === 'he' ? 'EN' : 'עב'}</span>
        </button>
      </div>
    </motion.nav>
  );
};
