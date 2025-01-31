import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 mt-20">
            <div className="max-w-6xl mx-auto py-12 px-6">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg text-center text-gray-700 mb-12">
                    Your trusted source for unbiased and real-time news coverage.
                </p>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            To deliver accurate and timely news that informs, educates, and empowers our audience.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-gray-700">
                            To be the leading global news platform known for credibility, integrity, and innovation.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
                    <p className="text-lg text-center text-gray-700 mb-6">
                        Our team of experienced journalists and reporters are dedicated to bringing you the latest news.
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Team Members - Replace with actual data */}
                        {['John Doe', 'Jane Smith', 'Alex Johnson'].map((name, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                                <h3 className="text-xl font-semibold">{name}</h3>
                                <p className="text-gray-600">Senior Reporter</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg mb-4">We'd love to hear from you! Reach out to us for news tips and inquiries.</p>
                    <p className="text-lg font-semibold">Email: contact@newschannel.com</p>
                    <p className="text-lg font-semibold">Phone: +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
    );
};

export default About;
