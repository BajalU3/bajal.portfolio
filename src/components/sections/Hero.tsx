import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 100, damping: 20 },
  },
};

export const Hero = () => {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-10 flex justify-center">
          <div
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-b from-primary/50 to-transparent cursor-pointer group"
            onClick={() => setIsPhotoExpanded(true)}
          >
            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] animate-pulse group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-shadow duration-300" />
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Bajal U"
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <span className="glass px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide text-primary">
            Based in Kerala, India
          </span>
          {/* <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span>
            Available for work
          </div> */}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-4">Hi, I'm</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40 pb-4">
            Bajal U.
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 gap-y-2 text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto"
        >
          <span className="text-white whitespace-nowrap">Software Developer</span>
          <span className="text-gray-600 hidden md:block">•</span>
          <span className="text-primary whitespace-nowrap">Co-Founder at NexCreo</span>
          <span className="text-gray-600 hidden lg:block">•</span>
          <span className="text-secondary whitespace-nowrap">React Native Specialist</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isPhotoExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoExpanded(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/90 backdrop-blur-sm cursor-zoom-out p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full aspect-square rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-primary/50 to-secondary/50 shadow-[0_0_50px_rgba(0,240,255,0.3)]"
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Bajal U"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
