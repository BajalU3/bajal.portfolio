import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Next.js'],
  },
  {
    category: 'Styling & Build Tools',
    items: ['Tailwind CSS', 'Vite', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Engineering Practices',
    items: [
      'Unit Testing (Jest/Detox)',
      'Push Notifications (Firebase/OneSignal)',
      'API Architecture',
      'System Design',
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12 md:mb-16 text-center">Core Arsenal</h2>
        
        <div className="space-y-12 md:space-y-24">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-10 tracking-wide text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                      borderColor: 'rgba(0, 240, 255, 0.8)',
                      transition: { duration: 0.2 }
                    }}
                    className="glass px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full text-gray-300 font-medium tracking-wide border border-white/5 cursor-default relative overflow-hidden group will-change-transform"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
