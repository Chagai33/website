import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Terminal } from './Terminal';

export const Hero = () => {
  const { t } = useLanguage();

  const skills = [
    "React", "Node.js", "Python", "Firebase", "Docker", "Google Workspace API", "TypeScript"
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-20">

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[60px] rounded-full pointer-events-none transform-gpu will-change-transform" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* Text Content - Aligned Start (First in DOM) */}
          <div className="text-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-3 md:mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full"
            >
              <span className="text-blue-400 text-xs font-mono tracking-wider font-medium uppercase">
                {t({ he: 'אוטומציה · מערכות · פיתוח', en: 'Automation · Systems · Development' })}
              </span>
            </motion.div>

            {/* H1 - Aggressive Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-6xl md:text-8xl font-black mb-3 md:mb-6 leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50"
            >
              {t({
                he: 'מערכות שעובדות. לאנשים שלא רוצים לחשוב עליהן.',
                en: "Systems That Work. For People Who'd Rather Not Think About Them."
              })}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mb-6 md:mb-10 leading-relaxed text-balance"
            >
              {t({
                he: 'רקע של עשור בתשתיות, ענן ואבטחה — עם יכולת לבנות כל מה שנדרש מאפס. אני לא מחפש בעיות לפתור; אני מונע אותן מראש.',
                en: "A decade of infrastructure, cloud, and security — with the ability to build whatever's needed from scratch. I don't look for problems to solve; I prevent them before they happen."
              })}
            </motion.p>
          </div>

          {/* Visual Anchor (Terminal) - Second in DOM */}
          <div>
            <Terminal />
          </div>
        </div>

        {/* Skills Ticker - Now Full Width Below or Integrated? User kept it in "Hero Section". 
            Let's keep it below the grid for balance 
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-5xl mx-auto border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm mt-20"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-mono text-zinc-500 uppercase tracking-widest hover:text-blue-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
