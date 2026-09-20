import { Globe, User, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bajalshihab007@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 min-h-[80vh] flex flex-col justify-center relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">extraordinary.</span>
        </h2>
        
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Whether you have a complex enterprise project in mind or just want to say hi, my inbox is always open.
        </p>

        <form 
          className="max-w-md mx-auto space-y-6 text-left" 
          onSubmit={handleSubmit}
        >
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">Message</label>
            <textarea 
              id="message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Send Message <Send className="w-4 h-4" />
          </motion.button>
        </form>

      </div>
    </section>
  );
};
