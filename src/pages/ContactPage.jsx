import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imm2 from '../assessts/shop-banner.webp';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log("Form Data Submitted:", formData);
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (

        <>
        {/* Hero Section */}
                      <section className=" text-white py-20 px-6 text-center" style={{backgroundImage:`url(${Imm2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                        <div className="max-w-4xl mx-auto">
                          <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Contact Us</h1>
                          <p className="text-lg" data-aos="fade-up">
                            Discover the story behind our brand, our mission, and the values that drive us.
                          </p>
                        </div>
                      </section>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 pt-[80px]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ContactPage;