'use client';

import React from 'react'
import Hero from '@/components/landing-page/Hero';
import Stats from '@/components/landing-page/Stats';
import Quote from '@/components/landing-page/Quote';
import Services from '@/components/landing-page/Services';
import FeaturedProducts from '@/components/landing-page/FeaturedProducts';
import ContactSection from '@/components/landing-page/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Quote />
      <Services />
      <FeaturedProducts />
      {/* Keep projects hidden to preserve current behavior; uncomment to show */}
      {/* <Projects /> */}
      <ContactSection />
    </div>
  )
}

export default HomePage