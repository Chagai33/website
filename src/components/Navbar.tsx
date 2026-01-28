import { useLanguage } from '../context/LanguageContext';
import { Languages, Code2, Github, Linkedin } from 'lucide-react';
import siteContent from '../data/site-content.json';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-md">
            <Code2 className="w-5 h-5 text-blue-500" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight text-white">
            CY<span className="text-white/40">.DEV</span>
          </span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {t({ he: 'אודות', en: 'About' })}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {t({ he: 'פרויקטים', en: 'Projects' })}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {t({ he: 'צור קשר', en: 'Contact' })}
          </button>
        </div>

        {/* Language & Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'he' ? 'English' : 'Hebrew'}`}
            className="p-2 hover:bg-white/5 rounded-md transition-colors border border-transparent hover:border-white/10 text-zinc-400 hover:text-white"
          >
            <Languages className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-white/10 mx-1" />

          <a
            href={siteContent.meta.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={siteContent.meta.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
