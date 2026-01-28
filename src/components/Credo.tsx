import { useLanguage } from '../context/LanguageContext';
import siteContent from '../data/site-content.json';
import { Shield, Zap, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  0: Shield,
  1: Zap,
  2: Cog,
};

export const Credo = () => {
  const { t } = useLanguage();

  return (
    <section id="credo" className="py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white tracking-tight">
            {t(siteContent.credo.title)}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.credo.items.map((item, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 bento-card rounded-xl hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300 text-center cursor-pointer"
              >
                <Icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                  {t(item.title)}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  {t(item.text)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
