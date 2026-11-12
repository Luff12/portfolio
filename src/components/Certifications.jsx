
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Cybersecurity & Ethical Hacking Internship',
    organization: 'Torc Infotech',
    year: '2024',
    category: 'Cybersecurity',
  },
  {
    title: 'App Development Training',
    organization: 'Coxdo Solutions',
    year: 'Add Year',
    category: 'Application Development',
  },
  {
    title: 'Web Development Internship',
    organization: 'PACELAB – Redefining Technology',
    year: 'Add Year',
    category: 'Web Development',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label mb-4">05 / Certifications</p>

        <h2 className="section-heading max-w-3xl">
          Learning and
          <span className="accent-text"> recognition.</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl leading-7">
          Training programs, internships and learning experiences
          that have contributed to my technical journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 hover:border-[#a3e635]/40 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#a3e635]/10 flex items-center justify-center">
                  <Award size={27} className="text-[#a3e635]" />
                </div>

                <span className="text-xs text-gray-500 border border-white/10 rounded-full px-3 py-2">
                  {cert.year}
                </span>
              </div>

              <span className="text-[#a3e635] text-xs uppercase tracking-widest font-semibold">
                {cert.category}
              </span>

              <h3 className="text-white text-lg font-bold mt-3 leading-7">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                {cert.organization}
              </p>

              <div className="flex items-center gap-2 mt-7 text-gray-500 text-xs">
                <ShieldCheck size={16} className="text-[#a3e635]" />
                Training / Internship
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
