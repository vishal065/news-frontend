import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Logo and Description */}
                <div className="space-y-4">
                    <img
                        src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
                        alt="NewsToday Logo"
                        className="h-12"
                    />
                    <p className="text-sm">
                        Stay updated with the latest news from around the world. Bringing
                        you accurate and reliable information 24/7.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about-us" className="hover:text-white transition duration-200"  >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/politics" className="hover:text-white transition duration-200">
                                Crime Updates
                            </Link>
                        </li>
                        <li>
                            <Link to="/sports" className="hover:text-white transition duration-200">
                                Breaking News
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="hover:text-white transition duration-200">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about-us" className="hover:text-white transition duration-200"  >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/politics" className="hover:text-white transition duration-200">
                                Crime Updates
                            </Link>
                        </li>
                        <li>
                            <Link to="/sports" className="hover:text-white transition duration-200">
                                Breaking News
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="hover:text-white transition duration-200">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link
                            to="https://www.facebook.com"
                            className="hover:text-white transition duration-200"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={24} />
                        </Link>
                        <Link
                            to="https://www.twitter.com"
                            className="hover:text-white transition duration-200"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </Link>
                        <Link
                            to="https://www.instagram.com"
                            className="hover:text-white transition duration-200"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={24} />
                        </Link>
                        <Link
                            to="https://www.youtube.com"
                            className="hover:text-white transition duration-200"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p>&copy; 2025 NewsToday. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
