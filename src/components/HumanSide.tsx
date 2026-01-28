import { useLanguage } from '../context/LanguageContext';
import siteContent from '../data/site-content.json';
import { Camera, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const HumanSide = () => {
  const { t } = useLanguage();

  return (
    <section id="human-side" className="py-32">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            {t(siteContent.humanSide.title)}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-12 bento-card rounded-xl"
        >
          <Camera className="w-16 h-16 text-indigo-400 mx-auto mb-6" />

          <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
            {t(siteContent.humanSide.text)}
          </p>

          <motion.a
            href={siteContent.humanSide.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            {t(siteContent.humanSide.linkText)}
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
