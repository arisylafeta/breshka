'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image 
                src="/images/Logo.png" 
                alt="MEVA Logo" 
                width={150}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Specialists in the manufacture and sale of formwork equipment. MEVA is a family-owned company with an international reach. With 40+ years worldwide, we are proud of the confidence put in more than 40 countries. The headquarters is located in Haiterbach, Germany. Be the first. Build smart.
            </p>
          </div>

          {/* Popular Products */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold mb-4">Popular Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products/AluFix" className="text-gray-400 hover:text-white text-sm">AluFix</Link></li>
              <li><Link href="/products/AluStar" className="text-gray-400 hover:text-white text-sm">AluStar</Link></li>
              <li><Link href="/products/StarTex" className="text-gray-400 hover:text-white text-sm">StarTec XT</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MevaDec</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MT 60</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MGC-H</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MevaFlex</Link></li>
            </ul>
          </div>

          {/* MEVA Services */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold mb-4">MEVA Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Rental</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Engineering</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">On-site guidance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Refurbishment</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Rental</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Pre-assembly</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Academy</Link></li>
            </ul>
          </div>

          {/* Tools & Contact */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Downloads</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">BIM tools</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Wall thickness pressure calculator</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Calculator for supporting column forms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MEVA Formwork Systems Ltd</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MEVA UK</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">MEVA Spain</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">International</Link></li>
                <li>
                  <p className="text-gray-400 text-sm">+41 62 769 71 00</p>
                  <a href="mailto:info@meva.net" className="text-gray-400 hover:text-white text-sm">info@meva.net</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} MEVA. All rights reserved. 
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white">Terms</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white">Legal Notice</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </div>
          <div className="flex space-x-4">
            <span className="text-xs text-gray-500">Visit us on social media:</span>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;