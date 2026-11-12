
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Rocket,
  ArrowUpRight,
  MapPin,
  Lightbulb,
} from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    number: '01',
    title: 'Software Development',
    description:
      'Building responsive applications and practical software solutions using modern technologies.',
  },
  {
    icon: BrainCircuit,
    number: '02',
    title: 'Data Science',
    description:
      'Exploring data, developing machine learning models and extracting meaningful insights.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Problem Solving',
    description:
      'Enjoying technical challenges and turning complex ideas into simple solutions.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Continuous Learning',
    description:
      'Exploring emerging technologies and continuously improving my technical skills.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#a3e635]/[0.035] blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Section heading */}
        <div className="mb-10 sm:mb-14">
          <p className="section-label mb-4 sm:mb-5">
            01 / About Me
          </p>

          <h2 className="section-heading max-w-4xl">
            More than just
            <span className="accent-text"> writing code.</span>
            <br className="hidden sm:block" />
            {' '}I build solutions.
          </h2>
        </div>

        {/* Main introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-start">

          {/* Introduction */}
          <div className="min-w-0">
            <p className="text-gray-200 text-lg sm:text-2xl leading-relaxed font-medium">
              I'm Shibin C Mathew, a Computer Science and Engineering
              enthusiast passionate about
              <span className="text-[#a3e635]"> Data Science</span>,
              <span className="text-[#a3e635]"> Machine Learning</span>
              {' '}and
              <span className="text-[#a3e635]"> Software Development.</span>
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-6 sm:mt-7">
              I enjoy exploring technology, solving real-world problems
              and building applications that make everyday tasks easier.
              My interests span data analytics, predictive modelling,
              artificial intelligence and modern web and mobile
              application development.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4 sm:mt-5">
              Through academic projects, internships and independent
              learning, I've gained practical exposure to different
              technologies and development workflows. I believe in
              continuous learning and turning ideas into meaningful
              products.
            </p>

            {/* Education information */}
            <div className="mt-8 sm:mt-10 glass-card p-5 sm:p-7 border-l-2 border-l-[#a3e635]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#a3e635]/10 flex items-center justify-center shrink-0">
                  <GraduationCap
                    size={23}
                    className="text-[#a3e635]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[#a3e635] text-[11px] sm:text-xs tracking-widest uppercase font-semibold mb-2">
                    Education
                  </p>

                  <h3 className="text-white text-base sm:text-lg font-semibold leading-snug">
                    B.Tech – Computer Science & Engineering
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    College of Engineering Kallooppara
                  </p>

                  <div className="flex items-start gap-2 text-gray-500 text-xs sm:text-sm mt-3">
                    <MapPin size={14} className="shrink-0 mt-0.5" />
                    <span>Pathanamthitta, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#a3e635] font-semibold text-sm sm:text-base mt-7 sm:mt-9 group"
            >
              Let's connect

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative glass-card p-5 sm:p-6 lg:p-7 min-h-0 sm:min-h-[220px] lg:min-h-[230px] hover:border-[#a3e635]/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Card number */}
                  <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#a3e635]/10 flex items-center justify-center group-hover:bg-[#a3e635] transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-[#a3e635] group-hover:text-black transition-colors duration-300"
                      />
                    </div>

                    <span className="text-gray-600 text-xs tracking-widest">
                      / {item.number}
                    </span>
                  </div>

                  <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7">
                    {item.description}
                  </p>

                  {/* Decorative hover glow */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#a3e635]/[0.06] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
