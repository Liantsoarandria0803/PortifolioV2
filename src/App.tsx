import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm Liantsoa
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Artificial intelligence and Machine learning enthusiast , Fullstack web and mobile developer,game developer.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Mail size={20} />
                  Contact Me
                </a>
                <a href="/resume.pdf" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Resume
                </a>
              </motion.div>
              <motion.div 
                className="flex gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="https://github.com/Liantsoarandria0803" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="/sariko.png" 
                alt="Profile" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Projects />
      <Skills />
      <Certification />
      <Contact />

      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Liantsoa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;