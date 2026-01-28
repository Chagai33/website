import { useLanguage } from '../context/LanguageContext';
import rawSiteContent from '../data/site-content.json';
const siteContent = rawSiteContent as any;
import { Code2, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useLanguage();

  if (!siteContent.about) return null;

  return (
    <section id="about" className="py-32">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white tracking-tight">
            {t(siteContent.about.title)}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="p-8 bento-card rounded-xl hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 cursor-pointer"
          >
            <Server className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">IT & System Admin</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              10+ {t({ he: 'שנות ניסיון', en: 'years experience' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="p-8 bento-card rounded-xl hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 cursor-pointer"
          >
            <Code2 className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">Full-Stack Development</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              4 {t({ he: 'שנות פיתוח', en: 'years coding' })}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            {t(siteContent.about.content)}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
