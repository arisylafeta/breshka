import Image from 'next/image';

const Newsletter = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe to our MEVA Newsletter</h2>
              <form className="flex mt-8">
                <input type="email" placeholder="Your e-mail address" className="flex-grow p-3 border border-r-0 border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"/>
                <button type="submit" className="bg-red-600 text-white font-bold py-3 px-8 hover:bg-red-700 transition-colors">SUBSCRIBE</button>
              </form>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
               <Image 
                src="https://via.placeholder.com/350x250/EFEFEF/333333?text=Tablet+Screen" 
                alt="Tablet showing newsletter" 
                width={350} 
                height={250} 
              />
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Newsletter;