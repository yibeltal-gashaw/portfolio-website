import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, Menu, X, Home, FolderOpen, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Add these animation variants before the App function
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Update animation variants with slower, smoother transitions
const smoothFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 2,
    ease: [0.43, 0.13, 0.23, 0.96] // Smooth easing curve
  }
};

const smoothSlideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const smoothSlideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { 
    duration: 2.5,
    ease: [0.43, 0.13, 0.23, 0.96],
    staggerChildren: 0.3
  }
};

const smoothSlideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { 
    duration: 2.5,
    ease: [0.43, 0.13, 0.23, 0.96]
  }
};

// Add this for hover animations
const smoothHover = {
  scale: 1.05,
  transition: {
    duration: 0.8, // Slower hover effect
    ease: [0.43, 0.13, 0.23, 0.96]
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              YG
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:yibeltalgashaw320@example.com"
                className="px-4 py-2 bg-blue-600 hover:bg-gradient-to-r from-purple-600 to-purple-40 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div 
              className="max-w-2xl text-center md:text-left"
              initial="initial"
              animate="animate"
              variants={smoothFadeIn}
            >
              <motion.h1 
                variants={smoothSlideInFromLeft}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
              >
                Hello, I'm Yibeltal Gashaw
              </motion.h1>
              <motion.p 
                variants={smoothSlideInFromRight}
                className="text-2xl md:text-3xl text-gray-300 mb-8"
              >
                Full Stack Developer
              </motion.p>
              <motion.p 
                variants={smoothSlideUp}
                transition={{ 
                  duration: 2.5,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  opacity: { duration: 2 }
                }}
                className="text-xl text-gray-400 mb-12 leading-relaxed"
              >
                Crafting robust and scalable web applications with modern technologies.
                Passionate about creating exceptional user experiences and efficient backend solutions.
              </motion.p>
              <div className="flex justify-center gap-6">
                <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/yibeltal-gashaw21/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:yibeltalgashaw320@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="./src/cv/my_cv.pdf"
                  download // group-hover:scale-110 transition-transform duration-300
                  className="group inline-flex items-center justify-center gap-3 w-50 px-6 py-3 bg-blue-600 hover:bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-lg font-medium text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="font-medium">Download CV</span>
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Profile Photo */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl transform -rotate-45 group-hover:-rotate-12 transition-transform duration-300"></div>
              <div className="relative bg-gray-900 p-4 rounded-2xl shadow-xl transform -rotate-30">
                <div className="rounded-sm -mt-8 bg-sky-300 overflow-hidden border-1 border-blue-400/30">
                  <img 
                    src="../src/images/pp2.png" 
                    alt="Yibeltal Gashaw"
                    className="w-full h-full object-cover transform rotate-5 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center transform rotate-30">
                  <h3 className="text-lg font-semibold text-blue-400">Yibeltal Gashaw</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Expertise</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ 
              once: true, 
              margin: "-100px",
              amount: 0.3 // Trigger animation when 30% of element is in view
            }}
          >
            {[
              { icon: <Layout className="w-8 h-8 mb-4 text-blue-400" />, title: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
              { icon: <Server className="w-8 h-8 mb-4 text-emerald-400" />, title: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Java'] },
              { icon: <Database className="w-8 h-8 mb-4 text-purple-400" />, title: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] },
              { icon: <Code2 className="w-8 h-8 mb-4 text-orange-400" />, title: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={smoothHover}
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-400">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with real-time inventory management',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Task Management System',
                description: 'Collaborative project management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
                tech: ['Next.js', 'PostgreSQL', 'WebSocket']
              },
              {
                title: 'Analytics Dashboard',
                description: 'Data visualization platform with advanced filtering capabilities',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
                tech: ['React', 'D3.js', 'Express']
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl overflow-hidden group"
                variants={fadeInUp}
                whileHover={smoothHover}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Let's Work Together</h2>
            <p className="text-gray-400 text-center mb-12">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate or just want to connect!
            </p>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Form */}
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-800/50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="mailto:yibeltalgashaw320@example.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <Mail className="w-5 h-5 mr-3" />
                      yibeltalgashaw320@example.com
                    </a>
                    <a href="https://www.linkedin.com/in/yibeltal-gashaw21/" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </a>
                    <a href="https://github.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <p className="text-gray-300">Addis Ababa, Ethiopia</p>
                  <p className="text-gray-400 mt-2">Available for remote work worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="py-12 bg-gray-900/50 border-t border-gray-800">
        <div className="container mx-auto px-6">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  YG
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Crafting exceptional digital experiences with modern technologies and innovative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/yibeltal-gashaw21/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:yibeltalgashaw320@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                    <span className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300">
                      <Home size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="font-medium">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                    <span className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-300">
                      <Code2 size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="font-medium">Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                    <span className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300">
                      <FolderOpen size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="font-medium">Projects</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                    <span className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gradient-to-r from-pink-600 to-pink-400 transition-all duration-300">
                      <MessageSquare size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="font-medium">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Addis Ababa, Ethiopia</li>
                <li>yibeltalgashaw320@example.com</li>
                <li>Available for remote work</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Yibeltal Gashaw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;