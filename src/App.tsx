import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download } from 'lucide-react';
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
      <section className="pt-32 pb-16 bg-gradient-to-r from-[#006466] via-[#065a60] via-[#0b525b] via-[#144552] via-[#1b3a4b] via-[#212f45] via-[#272640] via-[#312244] via-[#3e1f47] to-[#4d194d]">
        <div className="max-w-6xl mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 min-h-[80vh]"
            >
            <div className="flex-1">
              <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              >
              <TypeAnimation
              sequence={[
                "Hello!", 1000,
                "I'm Liantsoa", 1000
              ]}
              speed={50}
              repeat={Infinity}
              >
              </TypeAnimation>
              
              </motion.h1>
              <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              >
              Artificial intelligence and Machine learning enthusiast , Fullstack web and mobile developer,game developer enthusiast.
              </motion.p>
              <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              >
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-px transition-all duration-200 ease-in-out flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="/resume.pdf" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-px transition-all duration-200 ease-in-out flex items-center gap-2">
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
              <a href="https://github.com/Liantsoarandria0803" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-200 ease-in-out">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-200 ease-in-out">
                <Linkedin size={24} />
              </a>
              </motion.div>
            </div>
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img 
              src="/Lian.png" 
              alt="Profile" 
              className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </motion.div>
            </motion.div>
        </div>
      </section>
      <Projects />
      <Skills />
      <Certification />
      <Contact />
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Liantsoa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;