import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LegalModal } from './LegalModal';
import siteContent from '../data/site-content.json';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  const legalContent = {
    privacy: {
      title: t({ he: 'מדיניות פרטיות', en: 'Privacy Policy' }),
      content: t({
        he: `הפרטיות שלך חשובה לי.
האתר אינו משתמש בעוגיות מעקב (Cookies) לצרכי פרסום ואינו אוסף מידע אישי מזהה ללא ידיעתך.
במידה ויופעל בעתיד כלי סטטיסטי (כגון Google Analytics), הוא יופעל בתצורה אנונימית (Anonymized IP).
האתר מאוחסן על גבי תשתיות מאובטחות (Netlify).`,
        en: `Your privacy is important.
This site does not use tracking cookies for advertising and does not collect personally identifiable information without your knowledge.
If a statistical tool (such as Google Analytics) is used in the future, it will be operated in an anonymous configuration (Anonymized IP).
The site is hosted on secure infrastructure (Netlify).`
      })
    },
    accessibility: {
      title: t({ he: 'הצהרת נגישות', en: 'Accessibility Statement' }),
      content: t({
        he: `אתר זה נבנה מתוך מחויבות עמוקה לנגישות דיגיטלית, בהתאם לתקן ת"י 5568 ברמה AA.
האתר מותאם לניווט מקלדת, תומך בקוראי מסך (NVDA/JAWS) ומשתמש בניגודיות צבעים גבוהה (High Contrast).
רכיבי הממשק ברורים ומסומנים (ARIA Labels).
אם נתקלת בקושי, ניתן לפנות אליי במייל: chagai33@gmail.com`,
        en: `This site was built with a deep commitment to digital accessibility, in accordance with IS 5568 Level AA standards.
The site is optimized for keyboard navigation, supports screen readers (NVDA/JAWS), and uses High Contrast.
Interface components are clear and labeled (ARIA Labels).
If you encounter any difficulty, please contact me at: chagai33@gmail.com`
      })
    },
    terms: {
      title: t({ he: 'תנאי שימוש', en: 'Terms of Use' }),
      content: t({
        he: `השימוש באתר הינו באחריות המשתמש בלבד.
התכנים, העיצוב והקוד באתר הינם קניינו הרוחני של חגי יחיאל (למעט ספריות קוד פתוח).
אין להעתיק או לשכפל תוכן ללא אישור בכתב.`,
        en: `Use of this site is at the user's sole risk.
The content, design, and code on this site are the intellectual property of Chagai Yechiel (excluding open source libraries).
No content may be copied or reproduced without written permission.`
      })
    }
  };

  const currentModal = activeModal ? legalContent[activeModal] : null;

  // Handle email link correctly (json has mailto: prefix)
  const emailLink = siteContent.meta.socials.email;

  return (
    <footer id="contact" className="bg-black mt-20 border-t border-white/10">
      {/* Contact Section */}
      <div className="py-20 container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            {t(siteContent.contact.title)}
          </h2>

          <p className="text-lg text-slate-400 font-light mb-10">
            {t(siteContent.contact.subtitle)}
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
            href={emailLink}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Mail className="w-5 h-5" />
            {t(siteContent.contact.cta)}
          </motion.a>

          <motion.a
            href={siteContent.meta.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/50 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
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
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/50 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Legal & Copyright Strip */}
      <div className="py-12 border-t border-white/10 bg-black/50">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-sm text-zinc-300 hover:text-blue-400 transition-colors uppercase tracking-wider font-mono px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={t({ he: 'פתח מדיניות פרטיות', en: 'Open Privacy Policy' })}
            >
              {t({ he: 'מדיניות פרטיות', en: 'Privacy Policy' })}
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-sm text-zinc-300 hover:text-blue-400 transition-colors uppercase tracking-wider font-mono px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={t({ he: 'פתח תנאי שימוש', en: 'Open Terms of Use' })}
            >
              {t({ he: 'תנאי שימוש', en: 'Terms of Use' })}
            </button>
            <button
              onClick={() => setActiveModal('accessibility')}
              className="text-sm text-zinc-300 hover:text-blue-400 transition-colors uppercase tracking-wider font-mono px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={t({ he: 'פתח הצהרת נגישות', en: 'Open Accessibility Statement' })}
            >
              {t({ he: 'הצהרת נגישות', en: 'Accessibility Statement' })}
            </button>
          </div>

          <div className="text-zinc-500 text-xs font-mono tracking-wider">
            © 2025 Chagai Yechiel. All rights reserved.
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={currentModal?.title || ''}
        content={currentModal?.content || ''}
      />
    </footer>
  );
};
