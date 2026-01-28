import { useLanguage } from '../context/LanguageContext';
import siteContent from '../data/site-content.json';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-white/10 py-20">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            {t({ he: 'מחפשים מישהו שרואה את התמונה המלאה?', en: 'Need someone who sees the Big Picture?' })}
          </h2>

          <p className="text-lg text-slate-400 font-light mb-10">
            {t({
              he: 'זמין לפרויקטים (Freelance) ושיתופי פעולה טכנולוגיים.',
              en: 'Available for Freelance projects and technical collaborations.'
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href={`mailto:${siteContent.meta.socials.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            <Mail className="w-5 h-5" />
            {t({ he: 'שלח מייל', en: 'Send Email' })}
          </motion.a>

          <motion.a
            href={siteContent.meta.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/50 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>

          <motion.a
            href={siteContent.meta.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/50 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
        </motion.div>

        <div className="text-slate-500 text-sm font-light">
          © {new Date().getFullYear()} {siteContent.meta.author}. {t({ he: 'כל הזכויות שמורות.', en: 'All rights reserved.' })}
        </div>
      </div>
    </footer>
  );
};
