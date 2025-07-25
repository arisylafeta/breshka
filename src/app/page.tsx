import React from 'react'
import Image from 'next/image'
import MessageImage from "@/components/MessageImage";
import AnimatedCounter from "@/components/AnimatedCounter";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen w-full">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero.png)' }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>
                
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full pl-0 pr-8 md:pl-8 lg:pl-16 z-10">
            <div className="relative text-left max-w-2xl text-white p-10 rounded-r-3xl bg-black/30 backdrop-blur-[1.5px] w-full max-w-3xl">
              {/* Background effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1.5px] rounded-r-3xl -z-10"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Premium Metal Building 
                <span className="text-white">
                  Solutions
                </span>
              </h1>
              <p className="text-xl font-bold text-white mb-8 leading-relaxed">
                Engineering excellence in steel construction. From industrial warehouses to 
                commercial complexes, we deliver durable, cost-effective metal building solutions 
                that stand the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors">
                  View Our Projects
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* By the Numbers */}
      <div className="container mx-auto px-4 lg:px-8 py-16 border-t border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* 600+ Employees */}
          <div className="flex-1 px-8 py-6 relative">
            <h3 className="text-5xl font-normal text-red-600 mb-2">
              <AnimatedCounter end={600} suffix="+" className="inline-block" />
            </h3>
            <h4 className="text-lg font-medium text-red-600 mb-3">Employees</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our people are our greatest asset. Their knowledge, expertise and focus on serving our clients to the highest level is what has made MEVA the company it is today.
            </p>
            {/* Vertical Red Line */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
          </div>

          {/* 40+ Locations */}
          <div className="flex-1 px-8 py-6 relative">
            <h3 className="text-5xl font-normal text-red-600 mb-2">
              <AnimatedCounter end={40} suffix="+" className="inline-block" />
            </h3>
            <h4 className="text-lg font-medium text-red-600 mb-3">Locations</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We have seen substantial growth in recent years, with regional offices and local representatives serving MEVA across the globe.
            </p>
            {/* Vertical Red Line */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
          </div>

          {/* 130m Euros */}
          <div className="flex-1 px-8 py-6 relative">
            <h3 className="text-5xl font-normal text-red-600 mb-2">
              <AnimatedCounter end={130} suffix="m" className="inline-block" />
            </h3>
            <h4 className="text-lg font-medium text-red-600 mb-3">Euros</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              With our annual sales exceeding €130 million, we continue to re-invest in research and development to deliver innovation in product design.
            </p>
            {/* Vertical Red Line */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-red-600"></div>
          </div>

          {/* 8,000+ Clients */}
          <div className="flex-1 px-8 py-6">
            <h3 className="text-5xl font-normal text-red-600 mb-2">
              <AnimatedCounter end={8000} suffix="+" className="inline-block" />
            </h3>
            <h4 className="text-lg font-medium text-red-600 mb-3">Clients</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are truly humbled by the number of clients that put their trust in us every day to deliver formwork solutions to their specific needs.
            </p>
          </div>
        </div>
      </div>
       
            {/* Message from Leadership */}
            <div className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-red-600 w-full max-w-2xl"></div>
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <MessageImage />
              
              {/* Quote Section */}
              <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
                <div className="text-5xl font-serif text-red-600 mb-6">&ldquo;</div>
                <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
                Whatever challenges you face, our extensive technical expertise in formwork allows us to find the best solutions for your needs to ensure smooth progress and deadlines are met. With us, your project is in good hands.
                </blockquote>
                <div className="border-t border-gray-200 w-20 my-6"></div>
                <div className="text-lg font-medium text-gray-900">John Smith</div>
                <div className="text-gray-600">CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Main Content */}
     <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Service Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-stretch">
          {/* Rental */}
          <div className="flex-1 flex flex-col items-center text-center px-6 max-w-xs">
            <div className="mb-6 w-full h-64">
              <Image 
                src="/images/Rental.jpg" 
                alt="Rental" 
                width={500} 
                height={300} 
                className="w-full h-full object-cover rounded-md" 
              />
            </div>
            <div className="flex flex-col justify-between h-48">
              <h3 className="text-2xl font-bold text-foreground mb-4">Rental</h3>
              <p className="text-muted-foreground text-base leading-relaxed tracking-wide">
                Our products are available for purchase directly or for rental through our partners. We also stock all the spare parts and accessories you may need.
              </p>
            </div>
          </div>
          
          {/* Vertical Red Line */}
          <div className="hidden md:block w-px bg-red-600 h-auto mx-3 self-stretch"></div>
          
          {/* Technical know-how */}
          <div className="flex-1 flex flex-col items-center text-center px-6 max-w-xs">
            <div className="mb-6 w-full h-64">
              <img src="/images/Know.jpg" alt="Technical know-how" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col justify-between h-48">
              <h3 className="text-2xl font-bold text-foreground mb-4">Technical know-how</h3>
              <p className="text-muted-foreground text-base leading-relaxed tracking-wide">
                Do you have technical questions? Do you need help optimizing formwork, material rotations, and formwork solutions, or creating technical drawings or BIM models?
              </p>
            </div>
          </div>
          
          {/* Vertical Red Line */}
          <div className="hidden md:block w-px bg-red-600 h-auto mx-3 self-stretch"></div>
          
          {/* Repair and maintenance */}
          <div className="flex-1 flex flex-col items-center text-center px-6 max-w-xs">
            <div className="mb-6 w-full h-64">
              <img src="/images/Service.jpg" alt="Repair and maintenance" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col justify-between h-48">
              <h3 className="text-2xl font-bold text-foreground mb-4">Repair and maintenance</h3>
              <p className="text-muted-foreground text-base leading-relaxed tracking-wide">
                We take care of maintaining the value of your formwork. Our service includes cleaning, panel replacement, and repairs, all the way to complete regeneration.
              </p>
            </div>
          </div>
          
          {/* Vertical Red Line */}
          <div className="hidden md:block w-px bg-red-600 h-auto mx-3 self-stretch"></div>
          
          {/* On-site assistance */}
          <div className="flex-1 flex flex-col items-center text-center px-6 max-w-xs">
            <div className="mb-6 w-full h-64">
              <img src="/images/Onsite.jpg" alt="On-site assistance" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col justify-between h-48">
              <h3 className="text-2xl font-bold text-foreground mb-4">On-site assistance</h3>
              <p className="text-muted-foreground text-base leading-relaxed tracking-wide">
                Do you need training for formwork installation or maintenance? Do you have a project and need advice? Our team is here to support you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Popular Products</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* AluFix Product Card - Large Left */}
          <div className="md:w-1/2 bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-96 overflow-hidden">
              <img src="/images/AlphaN.jpg" alt="Alpha N Formwork" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
              <h3 className="text-2xl font-bold mb-4">Alpha N</h3>
              <p className="text-gray-600 mb-6">
              Alpha N allows a homogeneous materialization of joints and panel holes, thus meeting the aesthetic requirements of exposed concrete.
              </p>
              <div className="flex justify-end">
                <a href="/products/AlphaN" className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column with 2 Products */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {/* AluStar Product Card - Top Right */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img src="/images/AluB.jpg" alt="AluB Formwork" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
                  <h3 className="text-xl font-bold mb-2">Alu B</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                  The AluB system  is a manuportable aluminium formwork solution designed for the production of standard height straight concrete walls. It is particularly suitable for construction sites without cranes or in hard-to-reach areas.
                  </p>
                  <div className="flex justify-end">
                    <a href="/products/AluB" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* StarTec Product Card - Bottom Right */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img src="/images/StarTex.jpg" alt="StarTec XT Formwork" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="text-sm text-gray-500 mb-1">Wall formwork</div>
                  <h3 className="text-xl font-bold mb-2">StarTec XT</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    The StarTec XT formwork combines three anchoring methods thanks to the integrated Combi rod guide.
                  </p>
                  <div className="flex justify-end">
                    <a href="/products/StarTex" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

       {/* Projects Section */}
       <div className="container mx-auto px-4 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img src="/images/project1.jpeg" alt="Project 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">Modern Office Building</h3>
                <p className="text-gray-200 mb-4 text-sm">Commercial Construction</p>
                <a href="/projects/project1" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img src="/images/project2.jpeg" alt="Project 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">High-Rise Development</h3>
                <p className="text-gray-200 mb-4 text-sm">Residential Complex</p>
                <a href="/projects/project2" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img src="/images/project3.jpeg" alt="Project 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">Contemporary Museum</h3>
                <p className="text-gray-200 mb-4 text-sm">Cultural Architecture</p>
                <a href="/projects/project3" className="inline-flex items-center justify-center w-10 h-10 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Contact Form */}
       <div className="bg-gray-100 py-16">
         <div className="container mx-auto px-4 lg:px-8">
           <div className="flex flex-col md:flex-row">
             {/* Left Column - Contact Text */}
             <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
               <h2 className="text-3xl font-bold mb-6">Let our team help you choose the right product and service.</h2>
               <p className="text-gray-700 mb-6">
                 Speak to one of our MEVA formwork specialists; we can help you with all your formwork needs. Let us help you with your next formwork project.
               </p>
               
               {/* Contact Person Info */}
               <div className="mt-12 flex items-start">
                 <div className="mr-6">
                   <div className="relative">
                     <div className="w-32 h-40 overflow-hidden">
                       <img src="/images/person.jpeg" alt="Contact Person" className="w-full h-full object-cover" />
                     </div>
                     <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
                   </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold">Jean-Luc Schott</h3>
                   <p className="text-gray-600 mb-4">Sales Director for French-speaking Switzerland</p>
                   
                   <div className="flex items-center mb-2">
                     <div className="w-5 h-5 mr-2 flex-shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-red-600 fill-current">
                         <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 152c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C280 162.7 269.3 152 256 152zM296 352h-80C202.8 352 192 341.3 192 328c0-13.25 10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 192 224 192h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 352 296 352z"/>
                       </svg>
                     </div>
                     <span>Swiss</span>
                   </div>
                   
                   <p className="text-gray-700 mb-1">MEVA Schalungs-Systeme AG</p>
                   <p className="text-gray-700 mb-1">Route 26 of the Chocolatière</p>
                   <p className="text-gray-700 mb-4">1026 Echandens</p>
                   
                   <div className="flex items-center mb-2">
                     <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                         <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                       </svg>
                     </div>
                     <span>+41 79 946 36 79</span>
                   </div>
                   
                   <div className="flex items-center mb-2">
                     <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current">
                         <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                       </svg>
                     </div>
                     <a href="#" className="text-red-600 hover:underline">View LinkedIn profile</a>
                   </div>
                   
                   <div className="flex items-center">
                     <div className="w-5 h-5 mr-2 flex-shrink-0 text-red-600">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                         <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
                       </svg>
                     </div>
                     <a href="#" className="text-red-600 hover:underline">Send me an email</a>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Right Column - Contact Form */}
             <div className="md:w-1/2">
               <form className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="relative">
                     <input 
                       type="text" 
                       placeholder="First and last name" 
                       className="w-full p-3 border border-gray-300 rounded" 
                       required 
                     />
                     <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                   </div>
                   <div className="relative">
                     <input 
                       type="email" 
                       placeholder="E-mail address" 
                       className="w-full p-3 border border-gray-300 rounded" 
                       required 
                     />
                     <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="relative">
                     <input 
                       type="tel" 
                       placeholder="Phone" 
                       className="w-full p-3 border border-gray-300 rounded" 
                       required 
                     />
                     <span className="absolute top-0 right-0 text-red-600 font-bold">*</span>
                   </div>
                   <div>
                     <select className="w-full p-3 border border-gray-300 rounded appearance-none bg-white">
                       <option>Swiss</option>
                       <option>France</option>
                       <option>Germany</option>
                       <option>Other</option>
                     </select>
                   </div>
                 </div>
                 
                 <div className="relative">
                   <textarea 
                     placeholder="Your message" 
                     rows={6} 
                     className="w-full p-3 border border-gray-300 rounded resize-none" 
                   ></textarea>
                 </div>
                 
                 <div className="text-red-600 text-sm">
                   * These fields are required
                 </div>
                 
                 <div className="pt-2">
                   <p className="text-sm font-medium mb-2">Data protection</p>
                   <div className="flex items-start mb-4">
                     <input type="checkbox" className="mt-1 mr-2" id="privacy" required />
                     <label htmlFor="privacy" className="text-sm">
                       I have read and accept the <a href="#" className="text-red-600 hover:underline">privacy policy</a>.
                     </label>
                   </div>
                   
                   <div className="flex items-start mb-4">
                     <input type="checkbox" className="mt-1 mr-2" id="newsletter" />
                     <label htmlFor="newsletter" className="text-sm">
                       I would like to subscribe to the Newsletter.
                     </label>
                   </div>
                 </div>
                 
                 <div>
                   <button type="submit" className="bg-red-600 text-white px-8 py-3 font-medium uppercase hover:bg-red-700 transition-colors">
                     Send a message
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default HomePage