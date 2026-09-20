import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X } from 'lucide-react';

const projects = [
  {
    title: 'NexCreo FMS',
    description: 'An enterprise franchise management system with complex mobile and web interfaces, designed for massive scalability and real-time operations.',
    tags: ['React Native', 'Node.js', 'Enterprise'],
    link: '#',
  },
  {
    title: 'Edusap',
    description: 'Comprehensive school management platform covering admissions, attendance, timetables, fee management, and parent-teacher communication in a mobile-first application.',
    tags: ['EdTech', 'React Native', 'MySQL'],
    link: '#',
  },
  {
    title: 'SpeakEazy',
    description: 'English learning application with structured lessons, interactive exercises, and pronunciation-focused learning feedback.',
    tags: ['EdTech', 'Flutter', 'Dart'],
    link: '#',
  },
  {
    title: 'DOPA',
    description: 'NEET coaching platform with study materials, mock tests, performance analytics, and live class support for medical entrance aspirants.',
    tags: ['EdTech', 'React Native', 'JavaScript'],
    link: '#',
  }
];

const TiltCard = ({ project, onClick }: { project: typeof projects[0], onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full h-[400px] rounded-2xl glass p-8 cursor-pointer group flex flex-col justify-between overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: 'translateZ(0)' }}
      />
      
      <div style={{ transform: 'translateZ(50px)' }} className="z-10">
        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div style={{ transform: 'translateZ(30px)' }} className="z-10 mt-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-white/50 group-hover:text-white transition-colors duration-300">
          <a href={project.link} onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
          <a href={project.link} onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
            <Code className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-16 text-center">Featured Work</h2>
        
        <div className="flex flex-wrap justify-center gap-8 perspective-[1000px]">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]">
              <TiltCard project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-charcoal rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.15)] cursor-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-sm font-mono text-secondary bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href={selectedProject.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-primary text-dark-bg px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </a>
                <a 
                  href={selectedProject.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300"
                >
                  <Code className="w-5 h-5" />
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
