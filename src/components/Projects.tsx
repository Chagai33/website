import { useLanguage } from '../context/LanguageContext';
import rawSiteContent from '../data/site-content.json';
const siteContent = rawSiteContent as any;
import { ArrowUpRight, AlertCircle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// TypeScript interface for the new Project schema
interface LocalizedString {
  he: string;
  en: string;
}

interface ProjectItem {
  id: string;
  name: LocalizedString;
  type: LocalizedString;
  challenge: LocalizedString;
  solution: LocalizedString;
  result: LocalizedString;
  techStack: string[];
  url: string | null;
}

interface ProjectsData {
  title: LocalizedString;
  items: ProjectItem[];
}

export const Projects = () => {
  const { t } = useLanguage();

  // Access the new structure: projects.items
  const projectsData: ProjectsData = siteContent.projects || { title: { he: '', en: '' }, items: [] };
  const projects = projectsData.items || [];

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header - Now using JSON title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-2 border-blue-500 pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            {t(projectsData.title)}
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {t({ he: 'Case Studies', en: 'Case Studies' })}
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-8">
                {/* Header: Name & Type */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {t(project.name)}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                          aria-label={`Visit ${t(project.name)}`}
                        >
                          <ArrowUpRight className="w-4 h-4 text-blue-400" />
                        </a>
                      )}
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-full uppercase tracking-wider">
                      {t(project.type)}
                    </span>
                  </div>
                </div>

                {/* Body: Challenge → Solution → Result */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Challenge */}
                  <div className="p-5 rounded-lg bg-red-500/5 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                        {t({ he: 'האתגר', en: 'The Challenge' })}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm">
                      {t(project.challenge)}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                        {t({ he: 'הפתרון', en: 'The Solution' })}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm">
                      {t(project.solution)}
                    </p>
                  </div>

                  {/* Result - Highlighted */}
                  <div className="p-5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                        {t({ he: 'התוצאה', en: 'The Result' })}
                      </span>
                    </div>
                    <p className="text-emerald-300 font-medium leading-relaxed text-sm">
                      {t(project.result)}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
