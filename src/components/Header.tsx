import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 py-6 ${isScrolled ? 'bg-gray-900 bg-opacity-70 backdrop-blur-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Liantsoa
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#certification">Certification</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-800 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex flex-col p-4">
              <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#certification" onClick={() => setIsMobileMenuOpen(false)}>
                Certification
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="block py-2 text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
