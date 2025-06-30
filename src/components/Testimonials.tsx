import React from 'react';
import Image from 'next/image';

const testimonialItems = [
    {
      imgSrc: 'https://picsum.photos/seed/news/300/200',
      title: 'MEVA News',
      text: 'The latest news and press releases from the MEVA Group.',
    },
    {
      imgSrc: 'https://picsum.photos/seed/press/300/200',
      title: 'Formwork Press',
      text: 'Current articles from the trade press about MEVA.',
    },
    {
      imgSrc: 'https://picsum.photos/seed/surfaces/300/200',
      title: '"A fresh look at concrete surfaces"',
      text: 'A specialist article on the subject of architectural concrete.',
    },
];

const Testimonials = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialItems.map((item, index) => (
              <div key={index} className="border border-gray-200 group">
                <div className="overflow-hidden">
                    <Image 
                      src={item.imgSrc} 
                      alt={item.title} 
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                    />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
export default Testimonials;