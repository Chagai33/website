import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'he' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  toggleLanguage: () => void;
  t: (content: { he: string; en: string } | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('he');
  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  const t = (content: { he: string; en: string } | string) => {
    if (typeof content === 'string') return content;
    return content[language];
  };

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
