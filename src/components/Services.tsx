import { useLanguage } from '../context/LanguageContext';
import rawSiteContent from '../data/site-content.json';
const siteContent = rawSiteContent as any;
import { Wrench, Link2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// TypeScript interfaces
interface LocalizedString {
  he: string;
  en: string;
}

interface ServiceItem {
  title: LocalizedString;
  text: LocalizedString;
}

interface ServicesData {
  title: LocalizedString;
  items: ServiceItem[];
}

// Map icons to service items
const iconMap = [Wrench, Link2, ShieldCheck];

export const Services = () => {
  const { t } = useLanguage();

  const servicesData: ServicesData = siteContent.services || { title: { he: '', en: '' }, items: [] };
  const services = servicesData.items || [];

  if (!siteContent.services) return null;

  return (
    <section id="services" className="py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white tracking-tight">
            {t(servicesData.title)}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[index] || Wrench;
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
                  {t(service.title)}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  {t(service.text)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
