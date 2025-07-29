'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../components/ui/navigation-menu';
import styles from './Header.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    console.log('Header mounted with ID:', document.getElementById('main-header')?.id || 'not found');
    console.log('Initial scroll position:', window.scrollY);
    
    // Count how many header elements exist
    const headerCount = document.querySelectorAll('header#main-header').length;
    console.log('Number of header elements with ID "main-header":', headerCount);

    // Check scroll position on mount
    handleScroll();

    function handleScroll() {
      const isScrolled = window.scrollY > 10;
      console.log('Scroll detected:', window.scrollY, 'isScrolled:', isScrolled);
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        console.log('Scroll state changed to:', isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
      style={{ backgroundColor: scrolled ? 'white' : 'transparent', height: '70px' }}
    >
      {/* Enhanced blur overlay when not scrolled */}
  {!scrolled && <div className="absolute inset-0 backdrop-blur-md" style={{ zIndex: -1, opacity: 1}}></div>}
      
      {/* Add z-10 here to lift the content above the blur layer */}
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

            {/* Center Section: Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="space-x-12 lg:space-x-12 xl:space-x-12">
                  <NavigationMenuItem className={styles.navItem}>
                    <NavigationMenuLink asChild className={`${styles.navLink} no-hover-bg`}>
                      <Link href="/">
                        <span className={`${styles.navText} font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>{t('home')}</span>
                        <span className={styles.hoverEffect}></span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={styles.navItem}>
                    <NavigationMenuLink asChild className={`${styles.navLink} no-hover-bg`}>
                      <Link href="/products">
                        <span className={`${styles.navText} font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>{t('products')}</span>
                        <span className={styles.hoverEffect}></span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={styles.navItem}>
                    <NavigationMenuLink asChild className={`${styles.navLink} no-hover-bg`}>
                      <Link href="/services">
                        <span className={`${styles.navText} font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>{t('services')}</span>
                        <span className={styles.hoverEffect}></span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={styles.navItem}>
                    <NavigationMenuLink asChild className={`${styles.navLink} no-hover-bg`}>
                      <Link href="/contact">
                        <span className={`${styles.navText} font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>{t('contact')}</span>
                        <span className={styles.hoverEffect}></span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Section: Contact, Language Switcher & Social */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-1 lg:space-x-2">
              <a href="tel:+1234567890" className={`flex items-center ${scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'} transition-colors`}>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-medium text-xs md:text-sm">{t('phone')}</span>
              </a>
              <LanguageSwitcher scrolled={scrolled} />
              <div className="flex items-center space-x-1 lg:space-x-2">
                {/* Social icons */}
                <a href="#" className={`${scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'} transition-colors`}>
                  <span className="sr-only">Facebook</span>
                  <svg className="h-3 w-3 md:h-[15px] md:w-[15px] lg:h-4 lg:w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className={`${scrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'} transition-colors`}>
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4 md:h-[18px] md:w-[18px] lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="p-5 rounded-md hover:bg-accent" 
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="px-4 py-2 text-lg font-medium hover:bg-red-600 hover:text-white rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              href="/products" 
              className="px-4 py-2 text-lg font-medium hover:bg-red-600 hover:text-white rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('products')}
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 text-lg font-medium hover:bg-red-600 hover:text-white rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('services')}
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-lg font-medium hover:bg-red-600 hover:text-white rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <a href="tel:+1234567890" className="flex items-center px-4 py-2 text-lg font-medium hover:bg-red-600 hover:text-white rounded-md transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {t('phone')}
              </a>
            </div>
            <div className="flex justify-center space-x-6 pt-2">
              <a href="#" className="text-black/70 hover:text-red-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-black/70 hover:text-red-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;