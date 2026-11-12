
import { motion } from 'framer-motion';
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';

const experiences = [
  {
    number: '01',
    role: 'Data Science Intern',
    company: 'Zoople Technologies',
    period: 'Ongoing',
    location: 'Kerala, India',
    type: 'Internship',
    icon: BrainCircuit,
    current: true,
    description: [
      'Working with Python for data analysis and data manipulation.',
      'Developing practical skills in SQL, Excel and Power BI.',
      'Exploring data visualization, analytical techniques and statistical concepts.',
      'Learning R and applying data science concepts through practical exercises.',
    ],
    technologies: ['Python', 'Pandas', 'SQL', 'Excel', 'Power BI', 'R'],
  },
  {
    number: '02',
    role: 'App Development Trainee',
    company: 'Coxdo Solutions',
    period: '1 Month',
    location: 'India',
    type: 'Training',
    icon: Code2,
    current: false,
    description: [
      'Gained practical exposure to mobile application development.',
      'Worked with application development concepts and implementation.',
      'Developed an understanding of software development workflows.',
    ],
    technologies: ['Flutter', 'Dart', 'Mobile Development'],
  },
  {
    number: '03',
    role: 'Cybersecurity & Ethical Hacking Intern',
    company: 'Torc Infotech',
    period: '2024',
    location: 'Kerala, India',
    type: 'Internship',
    icon: ShieldCheck,
    current: false,
    description: [
      'Gained exposure to cybersecurity fundamentals.',
      'Explored ethical hacking concepts and security practices.',
      'Learned about common security vulnerabilities and their prevention.',
    ],
    technologies: [
      'Cybersecurity',
      'Ethical Hacking',
      'Information Security',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-16 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-[#a3e635]/[0.035] blur-[90px] sm:blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="section-label mb-4 sm:mb-5">
            03 / Experience
          </p>

          <h2 className="section-heading max-w-3xl">
            My professional
            <span className="accent-text"> journey.</span>
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8">
            My journey through internships, training and practical
            learning experiences in technology and software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative ml-[6px] sm:ml-3">

          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#a3e635] via-[#a3e635]/40 to-transparent" />

          <div className="flex flex-col gap-6 sm:gap-8">

            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative pl-7 sm:pl-12"
                >
                  {/* Timeline marker */}
                  <div className="absolute -left-[6px] top-7 sm:top-9 w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] rounded-full bg-[#a3e635] border-[3px] sm:border-4 border-[#08090c] shadow-[0_0_15px_rgba(163,230,53,0.5)]" />

                  {/* Experience card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 sm:p-7 lg:p-9 hover:border-[#a3e635]/40 transition-all duration-300"
                  >
                    {/* Top section */}
                    <div className="flex justify-between items-start gap-3 sm:gap-5">

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">

                          <span className="text-[#a3e635] text-[10px] sm:text-xs font-semibold uppercase tracking-[1.5px] sm:tracking-[2px]">
                            {exp.type}
                          </span>

                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#a3e635]/10 text-[#a3e635] text-[10px] sm:text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
                              Currently Working
                            </span>
                          )}

                        </div>

                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug break-words">
                          {exp.role}
                        </h3>

                        <p className="text-gray-400 mt-2 text-sm sm:text-base font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-[#a3e635]/10 flex items-center justify-center">
                        <Icon
                          size={21}
                          className="text-[#a3e635] sm:w-[27px] sm:h-[27px]"
                        />
                      </div>

                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs sm:text-sm text-gray-500 mt-5 sm:mt-7 mb-5 sm:mb-7">

                      <span className="flex items-center gap-2">
                        <CalendarDays size={15} className="shrink-0" />
                        {exp.period}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={15} className="shrink-0" />
                        {exp.location}
                      </span>

                    </div>

                    {/* Responsibilities */}
                    <div className="border-t border-white/10 pt-5 sm:pt-6">

                      <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                        Key Responsibilities & Learning
                      </p>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 sm:gap-3 text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7"
                          >
                            <span className="text-[#a3e635] mt-0.5 shrink-0">
                              ✦
                            </span>
                            <span className="min-w-0">{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-6 sm:mt-7">

                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="max-w-full break-words px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-300 text-[10px] sm:text-xs hover:text-[#a3e635] hover:border-[#a3e635]/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-9 sm:mt-12 border-t border-white/10 pt-6 sm:pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          <p className="text-gray-500 text-xs sm:text-sm leading-6">
            Every experience is another opportunity to learn and grow.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#a3e635] text-sm font-semibold hover:gap-3 transition-all"
          >
            Let's connect
            <ArrowUpRight size={17} />
          </a>

        </div>

      </motion.div>
    </section>
  );
}
