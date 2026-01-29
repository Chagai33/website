import { useLanguage } from '../context/LanguageContext';
import rawSiteContent from '../data/site-content.json';
const siteContent = rawSiteContent as any;
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { t } = useLanguage();
  // Safety check for projects
  const projects = siteContent.projects || [];

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-2 border-blue-500 pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            {t({ he: 'בעיות שפתרתי', en: 'Problems I\'ve Solved' })}
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {t({ he: 'מחיכוך לשקט תפעולי', en: 'From Friction to Operational Calm' })}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: '#3b82f6' }}
              className="group relative p-8 bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {t(project.title)}
                  </h3>
                  {project.url && (
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-500 transition-colors" />
                  )}
                </div>

                <p className="text-zinc-400 font-light mb-8 flex-grow leading-relaxed">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((stack: string) => (
                    <span
                      key={stack}
                      className="px-2 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {/* Click Area Overlay */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                  aria-label={`View ${t(project.title)}`}
                >
                  <span className="sr-only">View Project</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
