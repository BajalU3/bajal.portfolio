import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: 'Co-Founder & Lead Developer',
    company: 'NexCreo',
    period: 'April 2026 - Present',
    description: 'Establishing the company and developing enterprise software. Architecting comprehensive franchise management systems and scalable backend infrastructure.',
  },
  {
    role: 'Software Developer',
    company: 'Codesap Technologies',
    period: 'May 2019 - Present',
    description: 'Specializing in Android application development and React Native. Built complex, full-stack ecosystems and specialized B2B e-commerce platforms with rigorous testing and resilience.',
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-24 text-center">Professional Journey</h2>

        <div ref={containerRef} className="relative">
          {/* Background Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Animated Line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary to-secondary origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-32">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-primary -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-colors duration-500 group">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <h4 className="text-lg text-gray-300 font-medium mb-1">{exp.company}</h4>
                      <p className="text-sm text-secondary mb-6 font-mono">{exp.period}</p>
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
