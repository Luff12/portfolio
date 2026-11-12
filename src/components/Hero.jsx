
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Code2,
} from 'lucide-react';

import profileImage from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="absolute top-20 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#a3e635]/[0.05] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full min-w-0"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#a3e635]/20 bg-[#a3e635]/[0.06] mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm text-[#a3e635]">
              Available for opportunities
            </span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg mb-3 sm:mb-4">
            Hello, I'm
          </p>

          {/* Full Name */}
          <h1 className="font-['Space_Grotesk'] text-[46px] min-[400px]:text-[52px] sm:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05]">
            Shibin C
            <br />
            <span className="text-[#a3e635]">Mathew.</span>
          </h1>

          <h2 className="text-lg sm:text-2xl font-semibold text-gray-200 mt-6 sm:mt-8 mb-4 sm:mb-5 leading-snug">
            Data Science & Software Development
          </h2>

          <p className="text-gray-400 text-sm sm:text-lg leading-7 sm:leading-8 max-w-xl">
            I build intelligent solutions using data, machine learning
            and modern technologies. Passionate about transforming
            ideas into practical applications and meaningful experiences.
          </p>

          <div className="flex flex-col min-[400px]:flex-row flex-wrap items-stretch min-[400px]:items-center gap-3 sm:gap-4 mt-7 sm:mt-9">
            <a
              href="#projects"
              className="inline-flex justify-center items-center gap-2 bg-[#a3e635] text-black px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#b9f65a] hover:-translate-y-1 transition-all duration-300"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 border border-white/20 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:border-[#a3e635] hover:text-[#a3e635] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-8 sm:mt-10">
            <span className="text-gray-500 text-xs sm:text-sm">
              Follow me
            </span>

            <a
              href="https://github.com/Luff12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#a3e635] transition-colors flex items-center gap-2"
            >
              <Code2 size={19} />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shibin-c-mathew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#a3e635] transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center w-full min-w-0 mt-4 lg:mt-0"
        >
          <div className="relative w-[85%] max-w-[320px] sm:max-w-[390px] mx-auto lg:translate-x-3">

            <div className="absolute -inset-2 sm:-inset-4 rounded-[28px] sm:rounded-[35px] border border-[#a3e635]/20 rotate-3 pointer-events-none" />

            <div className="relative h-[380px] sm:h-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#a3e635]/30 bg-[#111318] shadow-[0_0_60px_rgba(163,230,53,0.08)]">

              <img
                src={profileImage}
                alt="Shibin C Mathew - Developer and Data Science Enthusiast"
                className="w-full h-full object-cover object-[center_20%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/90 via-transparent to-transparent" />

              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7">
                <p className="text-[#a3e635] text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase mb-2">
                  Developer & Data Enthusiast
                </p>

                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold">
                  Shibin C Mathew
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                  Building ideas into reality.
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-3 sm:-right-12 top-10 sm:top-16 glass-card px-3 sm:px-5 py-3 sm:py-4 z-20 shadow-xl"
            >
              <p className="text-[#a3e635] text-xs sm:text-sm font-semibold">
                Python
              </p>

              <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                Development
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-3 sm:-left-12 bottom-24 sm:bottom-32 glass-card px-3 sm:px-5 py-3 sm:py-4 z-20 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#a3e635]" />

                <p className="text-white text-xs sm:text-sm font-semibold">
                  Machine Learning
                </p>
              </div>

              <p className="text-gray-400 text-[10px] sm:text-xs mt-2">
                Data Science
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 hover:text-[#a3e635] transition-colors"
      >
        <span className="text-xs tracking-[3px] uppercase">
          Scroll Down
        </span>

        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
