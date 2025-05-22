import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Imm2 from '../assessts/shop-banner.webp';
const brands = [
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Sony_logo.svg' },
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/LG_logo_%282015%29.svg' },
  { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg' },
  { name: 'Under Armour', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Under_armour_logo.svg' },
];

const Brands = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
     {/* Hero Section */}
                  <section className=" text-white py-20 px-6 text-center" style={{backgroundImage:`url(${Imm2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Brands</h1>
                      <p className="text-lg" data-aos="fade-up">
                        Discover the story behind our brand, our mission, and the values that drive us.
                      </p>
                    </div>
                  </section>
    <div className="py-12 px-4 md:px-20 bg-gray-50">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Trusted Brands</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We partner with the world’s most reputable and loved brands to bring you the best quality and innovation. Explore our top collaborators below.
        </p>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition duration-300 hover:scale-105"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-3 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Brand Commitment Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why We Choose the Best</h2>
        <p className="text-gray-600 text-lg">
          At our store, quality and reliability matter. That’s why we handpick brands that
          resonate with innovation, customer satisfaction, and global recognition.
          Whether it’s technology, fashion, lifestyle, or sports, our partnered brands
          deliver performance and style that exceed expectations.
        </p>
      </div>

      {/* Call To Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Want to become a brand partner?</h3>
        <p className="text-gray-500 mb-4">We’d love to hear from you!</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Contact Us
        </button>
      </div>
    </div>
    </>
  );
};

export default Brands;
