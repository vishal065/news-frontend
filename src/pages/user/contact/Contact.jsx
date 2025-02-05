import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
    };

    return (
        <div className="w-full overflow-hidden px-4 sm:px-6 py-12 flex justify-center mt-20">
            <div className="max-w-screen-lg w-full">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h1>

                {/* Responsive Layout */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left side: Contact Form (100% on mobile, 60% on large screens) */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[60%]">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-6 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side: Address and contact info (100% on mobile, 40% on large screens) */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[40%]">
                        <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                        <p className="mb-2">123 News Channel St., Suite 400</p>
                        <p className="mb-2">City, State, ZIP Code</p>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                        <p className="mb-2">Email: contact@newschannel.com</p>
                        <p className="mb-4">Follow us on social media:</p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
