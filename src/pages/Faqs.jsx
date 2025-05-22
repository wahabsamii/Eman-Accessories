import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Imm2 from '../assessts/shop-banner.webp';
const faqsData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. Products must be returned in original condition with packaging."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3–7 business days depending on your location."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally. Shipping charges and delivery times may vary by destination."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order ships, you'll receive a tracking number via email."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via our contact page or email us at support@yourecommerce.com."
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
        {/* Hero Section */}
              <section className=" text-white py-20 px-6 text-center" style={{backgroundImage:`url(${Imm2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">FAQ's</h1>
                  <p className="text-lg" data-aos="fade-up">
                    Discover the story behind our brand, our mission, and the values that drive us.
                  </p>
                </div>
              </section>
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">Find answers to our most common customer questions below.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600 border-t bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Faqs;
