import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 flex items-center justify-between"
    >
      <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-md border-b border-white/5" />
      
      <div className="relative z-10 font-heading font-bold text-xl tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        Bajal<span className="text-primary">.</span>
      </div>

      <nav className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Work</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>

      <div className="relative z-10 flex items-center">
        <a 
          href={`${import.meta.env.BASE_URL}resume.pdf`} 
          download="Bajal_U_Resume.pdf"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </motion.header>
  );
};
