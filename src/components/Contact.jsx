
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowUpRight,
  Send,
  MessageCircle,
  CheckCircle2,
  Code2,
  Globe,
} from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'shibinmathew968@gmail.com',
    href: 'mailto:shibinmathew968@gmail.com',
  },
  {
    icon: Code2,
    label: 'GITHUB',
    value: 'github.com/Luff12',
    href: 'https://github.com/Luff12',
  },
  {
    icon: Globe,
    label: 'LINKEDIN',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/shibin-c-mathew',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -right-20 sm:-right-40 bottom-0 w-56 sm:w-96 h-56 sm:h-96 bg-lime-400/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="section-label mb-4 sm:mb-5"
        >
          06 / CONTACT
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div variants={itemVariants} className="min-w-0">
            <p className="text-lime-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-5">
              Have a project in mind?
            </p>

            <h2 className="section-heading leading-[1.15]">
              Let's create
              <br />
              something
              <br />
              <span className="accent-text">meaningful.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-5 sm:mt-7 max-w-lg">
              I'm open to opportunities in Data Science, Data Analytics,
              and Software Development. Whether you have a project,
              collaboration, or job opportunity, I'd love to hear from you.
            </p>

            <motion.a
              href="mailto:shibinmathew968@gmail.com"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-lime-400 text-black font-semibold px-5 sm:px-7 py-3.5 sm:py-4 rounded-full mt-7 sm:mt-9 text-sm sm:text-base hover:bg-lime-300 transition-colors duration-300"
            >
              <Send size={17} />
              Let's Talk
              <ArrowUpRight size={18} />
            </motion.a>

            {/* Availability */}
            <div className="flex items-center gap-3 mt-8 sm:mt-10">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400" />
              </span>

              <span className="text-gray-400 text-xs sm:text-sm">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center gap-3 sm:gap-4 min-w-0"
          >
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  target={item.label === 'EMAIL' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-lime-400/[0.04] hover:border-lime-400/30 transition-all duration-300 min-w-0"
                >
                  <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-lime-400/10 border border-lime-400/10 flex items-center justify-center group-hover:bg-lime-400 transition-all duration-300">
                      <Icon
                        size={19}
                        className="text-lime-400 group-hover:text-black transition-colors"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-gray-500 text-[10px] sm:text-[11px] tracking-[0.2em] mb-1.5 sm:mb-2">
                        {item.label}
                      </p>

                      <p className="text-white text-xs sm:text-base font-medium break-all sm:break-words group-hover:text-lime-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-gray-500 group-hover:text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </motion.a>
              );
            })}

            {/* Opportunity Card */}
            <motion.div
              variants={itemVariants}
              className="mt-2 sm:mt-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-400/[0.08] to-transparent"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-lime-400/10 flex items-center justify-center">
                  <MessageCircle size={19} className="text-lime-400" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-white text-sm sm:text-base font-semibold mb-2">
                    Let's work together
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-6">
                    Have an idea or opportunity? Feel free to reach out.
                    I'm always interested in meaningful work and collaboration.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-4 text-lime-400 text-[11px] sm:text-xs font-medium">
                    <CheckCircle2 size={15} />
                    Open to new opportunities
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
