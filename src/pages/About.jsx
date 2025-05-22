import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img from '../assessts/hero.webp';
import Imm2 from '../assessts/shop-banner.webp';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className=" text-white py-20 px-6 text-center" style={{backgroundImage:`url(${Imm2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">About Us</h1>
          <p className="text-lg" data-aos="fade-up">
            Discover the story behind our brand, our mission, and the values that drive us.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600">
              We are a passionate team of innovators committed to bringing quality and convenience to online shopping.
              From product discovery to doorstep delivery, we strive to provide a seamless experience.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={Img} alt="Team working" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-black">10K+</h3>
            <p className="mt-2 text-gray-700">Happy Customers</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-3xl font-bold text-black">5 Years</h3>
            <p className="mt-2 text-gray-700">Experience in eCommerce</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-black">500+</h3>
            <p className="mt-2 text-gray-700">Products Delivered Monthly</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To redefine online shopping by making it more accessible, personalized, and enjoyable for everyone.
            We believe in delivering not just products, but trust, value, and care.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to shop with confidence?</h2>
        <p className="mb-4">Join thousands of satisfied customers today.</p>
        <a
          href="/shop"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Visit Our Store
        </a>
      </section>
    </div>
  );
};

export default About;
