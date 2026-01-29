import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Target } from 'lucide-react';

export const WhyWorkWithMe = () => {
  const { t } = useLanguage();

  const bulletPoints = [
    {
      icon: Brain,
      he: 'חשיבה מערכתית לפני שורה ראשונה של קוד',
      en: 'Systems thinking before a single line of code'
    },
    {
      icon: Zap,
      he: 'אוטומציה ויעילות — לא עוד פיצ\'רים',
      en: 'Automation and efficiency — not more features'
    },
    {
      icon: Shield,
      he: 'רקע עמוק בתשתיות, ענן, אבטחה ופיתוח',
      en: 'Deep background in infrastructure, cloud, security, and development'
    },
    {
      icon: Target,
      he: 'לומד מהר, עובד עצמאי, לוקח אחריות מלאה',
      en: 'Fast learner, works independently, full ownership'
    }
  ];

  return (
    <section id="why-me" className="py-32">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white tracking-tight">
            {t({ he: 'מה אני מביא לשולחן', en: 'What I Bring to the Table' })}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bento-card rounded-xl p-8 md:p-10 mb-12"
        >
          <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
            <p>
              {t({
                he: 'אני לא רק מפתח — אני מגיע מעולם שבו מערכות צריכות לעבוד, ללא פשרות.',
                en: "I'm not just a developer — I come from a world where systems have to work, no exceptions."
              })}
            </p>
            <p>
              {t({
                he: 'במשך יותר מעשור, עבדתי בתשתיות, ענן, אבטחה ותהליכים ארגוניים. כל מה שנדרש — למדתי תוך כדי תנועה, מתוך צורך אמיתי לפתור בעיות.',
                en: "For over a decade, I've worked across infrastructure, cloud, security, and organizational workflows. Whatever was needed — I learned it on the job, driven by real problems."
              })}
            </p>
            <p className="text-white font-medium">
              {t({
                he: 'העיקרון שלי:',
                en: 'My principle:'
              })}
            </p>
            <p className="text-indigo-300 border-s-2 border-indigo-500 ps-4">
              {t({
                he: 'מונעים טעויות לפני שהן קורות. מייעלים תהליכים. ורק אז — כותבים קוד.',
                en: 'Prevent errors before they happen. Streamline operations. Only then — write code.'
              })}
            </p>
            <p>
              {t({
                he: 'קוד הוא הכלי, לא היעד. היעד הוא מערכת יציבה שנותנת לבעלים שלה שקט ראש — וזמן לעסוק במה שחשוב באמת.',
                en: "Code is the tool, not the destination. The goal is a stable system that gives its owners peace of mind — and time to focus on what actually matters."
              })}
            </p>
            <p>
              {t({
                he: 'אם אתם מחפשים מישהו שיבין את הבעיה, יקח אחריות מקצה לקצה, ויספק פתרון שעובד בשטח — בדיוק לשם אני מביא ערך.',
                en: "If you're looking for someone who understands the problem, takes end-to-end ownership, and delivers solutions that work in the real world — that's where I add value."
              })}
            </p>
          </div>
        </motion.div>

        {/* Bullet Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-4 p-5 bento-card rounded-xl hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-slate-300 font-light">
                {t({ he: point.he, en: point.en })}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
