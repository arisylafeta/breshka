'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
  AnimatePresence,
} from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../components/ui/navigation-menu';
import styles from './Header.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// --- Interactive Animation Logic ---

interface AnimatedNavItemProps {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
}

// This component wraps each navigation link to make it animate.
const AnimatedNavItem = ({ mouseX, children }: AnimatedNavItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate the distance between the mouse and the center of the item.
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform distance into a y-position. The item moves up when the mouse is close.
  const ySync = useTransform(distance, [-150, 0, 150], [0, -8, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  // Transform distance into a scale value. The item grows when the mouse is close.
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.15, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};


// --- Main Header Component ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Create a motion value to track the mouse's horizontal position.
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // An array for cleaner mapping of navigation items
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/products', label: t('products') },
    // { href: '/services', label: t('services') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
      style={{ backgroundColor: scrolled ? 'white' : 'transparent', height: '70px' }}
    >
      {!scrolled && <div className="absolute inset-0 backdrop-blur-md" style={{ zIndex: -1, opacity: 1}}></div>}
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center pt-2">
          <div className="flex h-full w-full items-center justify-between">
            {/* Left Section: Logo */}
            <div className="flex-1 flex justify-start -ml-4 md:-ml-6 lg:-ml-8">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/Logo.png" 
                  alt="Breshka Logo" 
                  width={120}
                  height={60}
                  className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Center Section: Navigation with Mouse-Chasing Effect */}
            <div className="hidden md:flex flex-1 justify-center">
              <NavigationMenu>
                <motion.div
                  // Event listeners to track and reset mouse position
                  onMouseMove={(e) => mouseX.set(e.pageX)}
                  onMouseLeave={() => mouseX.set(Infinity)}
                >
                  <NavigationMenuList className="space-x-12 lg:space-x-12 xl:space-x-12">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href} className={styles.navItem}>
                        {/* Each item is wrapped in the animation component */}
                        <AnimatedNavItem mouseX={mouseX}>
                          <NavigationMenuLink asChild className={`${styles.navLink} no-hover-bg`}>
                            <Link href={item.href}>
                              <span className={`${styles.navText} font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>{item.label}</span>
                              <span className={styles.hoverEffect}></span>
                            </Link>
                          </NavigationMenuLink>
                        </AnimatedNavItem>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </motion.div>
              </NavigationMenu>
            </div>

            {/* Right Section: Contact, Language Switcher */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-1 lg:space-x-2">
              <a href="tel:+41797757781" className={`flex items-center ${scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'} transition-colors`}>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-medium text-xs md:text-sm">{t('phone')}</span>
              </a>
              <LanguageSwitcher scrolled={scrolled} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-transform duration-300 active:scale-95"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="md:hidden bg-white shadow-lg fixed top-20 left-0 right-0 z-50 overflow-hidden"
          >
            <motion.div 
              className="px-4 pt-2 pb-4 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 py-2">
                  <a 
                    href="tel:+41797757781" 
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">{t('phone')}</span>
                  </a>
                </div>
                <div className="px-3 py-2">
                  <LanguageSwitcher scrolled={true} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;