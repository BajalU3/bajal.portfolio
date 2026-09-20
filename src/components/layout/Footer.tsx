import { Code, Briefcase, Mail, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-12 lg:px-24 border-t border-white/5 bg-dark-bg mt-32 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="font-heading font-bold text-2xl tracking-tighter text-white mb-2">
            Bajal<span className="text-primary">.</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bajal U. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors" title="GitHub">
            <Code className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" title="LinkedIn">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" title="Twitter/X">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-500 hover:text-white transition-colors" title="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
