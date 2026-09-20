import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.word');

      if (words) {
        gsap.fromTo(
          words,
          { color: 'rgba(255, 255, 255, 0.1)' },
          {
            color: 'rgba(255, 255, 255, 1)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paragraph = "I am Bajal U, a Software Developer and Co-Founder of NexCreo. Over the past seven years, I have specialized in architecting cross-platform mobile applications using React Native and building dynamic, full-stack ecosystems. Great software is invisible; it simply empowers the user.";

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12">About & Philosophy</h2>

        <div ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.3] tracking-tight mb-24">
          {paragraph.split(' ').map((word, i) => {
            const isHighlight = ['NexCreo.', 'architecting', 'cross-platform', 'full-stack', 'invisible;'].includes(word);
            return (
              <span key={i} className={`word inline-block mr-3 md:mr-4 lg:mr-5 ${isHighlight ? 'text-secondary font-bold' : ''}`}>
                {word}
              </span>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enterprise-Grade Scalability",
              desc: "From comprehensive franchise management systems to specialized B2B e-commerce platforms, I architect solutions designed to grow leveraging Node.js and modern tooling."
            },
            {
              title: "Pixel-Perfect UI",
              desc: "A cutting-edge application must feel native, fluid, and intuitive. Using React Native, Vite, and Tailwind CSS, I bridge the gap between stunning design and flawless execution."
            },
            {
              title: "Resilience Through Testing",
              desc: "Code quality is non-negotiable. I integrate comprehensive unit testing and rigorous integration practices to guarantee stability long before production."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px -20px rgba(0, 240, 255, 0.4)',
                borderColor: 'rgba(0, 240, 255, 0.5)'
              }}
              transition={{ duration: 0.3 }}
              className="glass p-8 rounded-2xl transition-colors duration-500 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
