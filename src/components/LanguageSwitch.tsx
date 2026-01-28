import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'he' ? 'English' : 'Hebrew'}`}
      className="fixed top-6 left-6 z-50 p-3 glass-card rounded-full hover:bg-slate-700 transition-all duration-300 shadow-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 group"
    >
      <Languages className="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
      <span className="sr-only">{language === 'he' ? 'EN' : 'עב'}</span>
    </button>
  );
};
