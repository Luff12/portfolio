
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  BarChart3,
  Database,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';

const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    subtitle: 'Writing clean and efficient code',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Data Science & ML',
    subtitle: 'Building intelligent solutions',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    number: '03',
    title: 'Data Analytics',
    subtitle: 'Turning data into insights',
    icon: BarChart3,
    skills: [
      'Power BI',
      'DAX',
      'SQL',
      'Excel',
      'Plotly',
      'Data Visualization',
    ],
  },
  {
    number: '04',
    title: 'Development & Databases',
    subtitle: 'Creating modern applications',
    icon: Database,
    skills: [
      'React.js',
      'Node.js',
      'Flutter',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
    ],
  },
  {
    number: '05',
    title: 'Tools & Platforms',
    subtitle: 'Tools I use in my workflow',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Google Colab',
      'Jupyter Notebook',
      'Android Studio',
    ],
  },
];

export default function Skills() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardTap = (number) => {
    setActiveCard((current) =>
      current === number ? null : number
    );
  };

  return (
    <section
      id="skills"
      className="section-container relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-[#a3e635]/[0.035] blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="min-w-0">
            <p className="section-label mb-4 sm:mb-5">
              02 / Technical Skills
            </p>

            <h2 className="section-heading max-w-3xl">
              My technical
              <span className="accent-text"> toolkit.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4 sm:mt-5 max-w-2xl">
              Technologies, programming languages and tools I use
              to develop applications, analyze data and build
              intelligent solutions.
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-500 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse shrink-0" />
            Always learning. Always building.
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const isActive = activeCard === group.number;

            return (
              <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                onClick={() => handleCardTap(group.number)}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleCardTap(group.number);
                  }
                }}
                className={`group relative glass-card p-5 sm:p-6 lg:p-7 overflow-hidden min-w-0 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? 'border-[#a3e635]/60 bg-[#a3e635]/[0.06] shadow-[0_0_25px_rgba(163,230,53,0.08)]'
                    : 'border-white/[0.08] hover:border-[#a3e635]/40'
                } ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Top section */}
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div
                    className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#a3e635]'
                        : 'bg-[#a3e635]/10 group-hover:bg-[#a3e635]'
                    }`}
                  >
                    <Icon
                      size={23}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? 'text-black'
                          : 'text-[#a3e635] group-hover:text-black'
                      }`}
                    />
                  </div>

                  <span
                    className={`text-xs sm:text-sm tracking-widest transition-colors ${
                      isActive
                        ? 'text-[#a3e635]'
                        : 'text-gray-600'
                    }`}
                  >
                    / {group.number}
                  </span>
                </div>

                {/* Category */}
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 leading-snug">
                  {group.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-7">
                  {group.subtitle}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 pr-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`max-w-full break-words px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border text-[11px] sm:text-xs lg:text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-[#a3e635]/10 border-[#a3e635]/30 text-[#a3e635]'
                          : 'bg-white/[0.035] border-white/[0.08] text-gray-300 hover:bg-[#a3e635]/10 hover:border-[#a3e635]/30 hover:text-[#a3e635]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative glow */}
                <div
                  className={`absolute -bottom-16 -right-16 w-36 h-36 rounded-full bg-[#a3e635]/[0.07] blur-3xl transition-opacity duration-500 pointer-events-none ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Arrow */}
                <div
                  className={`absolute bottom-4 right-5 sm:bottom-5 sm:right-6 transition-colors ${
                    isActive
                      ? 'text-[#a3e635]'
                      : 'text-gray-700 group-hover:text-[#a3e635]'
                  }`}
                >
                  <ArrowUpRight size={17} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 border-t border-white/10 pt-6 sm:pt-7">
          <p className="text-gray-500 text-xs sm:text-sm">
            Continuously expanding my technical knowledge.
          </p>

          <span className="text-[#a3e635] text-xs sm:text-sm font-medium">
            Learning never stops.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
