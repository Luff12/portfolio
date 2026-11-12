
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation handler
  const handleNavigation = (event, href) => {
    event.preventDefault();

    const targetId = href.substring(1);

    // Close mobile menu
    setMenuOpen(false);

    // Update browser URL
    window.history.pushState(null, '', href);

    // Wait for mobile menu closing animation
    setTimeout(() => {
      const target = document.getElementById(targetId);

      if (!target) {
        console.warn(`Section not found: ${targetId}`);
        return;
      }

      const navbarHeight = 82;

      const position =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: Math.max(0, position),
        behavior: 'smooth',
      });
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090c]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-[#08090c]/70 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 h-[82px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, '#home')}
          className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight"
        >
          Shibin C Mathew<span className="text-[#a3e635]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="relative py-2 text-[14px] font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a3e635] rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          onClick={(event) => handleNavigation(event, '#contact')}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#a3e635]/50 text-[#a3e635] text-sm font-semibold hover:bg-[#a3e635] hover:text-black hover:-translate-y-0.5 transition-all duration-300"
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="lg:hidden p-2 text-white hover:text-[#a3e635] transition-colors"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0c0e12] border-t border-white/10"
          >
            <div className="max-w-[1320px] mx-auto px-7 py-7 flex flex-col gap-5">

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-300 hover:text-[#a3e635] text-base transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={(event) =>
                  handleNavigation(event, '#contact')
                }
                className="inline-flex items-center justify-center gap-2 bg-[#a3e635] text-black font-semibold rounded-full py-3 mt-2"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
