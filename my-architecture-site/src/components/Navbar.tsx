import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo - Modern Glassmorphism */}
            <Link to="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glassmorphism-logo px-4 py-2 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <motion.span
                  className="text-lg lg:text-xl font-medium tracking-wide bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
                  transition={{ duration: 0.3 }}
                >
                  OH Architecture
                </motion.span>
                
                {/* Holographic accent */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1), rgba(255, 255, 0, 0.1))',
                    filter: 'blur(1px)'
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Modern Glassmorphism */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }}
                  >
                    <Link to={item.path} className="relative group">
                      <motion.div
                        className={`glassmorphism-nav-item px-6 py-3 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? 'glassmorphism-nav-active' 
                            : 'glassmorphism-nav-inactive'
                        }`}
                        style={{
                          background: isActive 
                            ? 'rgba(0, 255, 255, 0.15)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(12px)',
                          border: isActive 
                            ? '1px solid rgba(0, 255, 255, 0.3)' 
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive 
                            ? '0 8px 32px rgba(0, 255, 255, 0.2)' 
                            : '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          background: isActive 
                            ? 'rgba(0, 255, 255, 0.25)' 
                            : 'rgba(255, 255, 255, 0.15)',
                          boxShadow: isActive 
                            ? '0 12px 48px rgba(0, 255, 255, 0.3)' 
                            : '0 8px 32px rgba(255, 255, 255, 0.1)',
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`text-sm font-medium tracking-wide relative z-10 ${
                            isActive 
                              ? 'text-cyan-300' 
                              : 'text-white/90'
                          }`}
                        >
                          {item.name}
                        </span>
                        
                        {/* Holographic glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
                            filter: 'blur(8px)'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile Menu Button - Glassmorphism */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-white"
                  animate={{ scale: isOpen ? 1.1 : 1 }}
                >
                  {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                </motion.div>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Ultra Modern Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Glassmorphism Background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px) saturate(200%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Floating Glass Panel - Clean Modern */}
            <div className="relative flex flex-col justify-center items-center h-full px-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glassmorphism-mobile-panel p-8 rounded-3xl max-w-sm w-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <Link
                        to={item.path}
                        className="block group text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className="relative py-4"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span 
                            className={`text-xl font-light tracking-wide transition-all duration-300 ${
                              location.pathname === item.path 
                                ? 'text-cyan-400' 
                                : 'text-white/90 group-hover:text-white'
                            }`}
                          >
                            {item.name}
                          </span>
                          
                          {/* Modern underline for mobile */}
                          <motion.div
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ 
                              width: location.pathname === item.path ? '60%' : '0',
                              opacity: location.pathname === item.path ? 1 : 0
                            }}
                            whileHover={{
                              width: '60%',
                              opacity: 1
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Minimal decorative elements */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400/60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar