import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo2.webp";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Logo and Description */}
                <div className="space-y-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-18 w-auto rounded-md"
                    />
                    <p className="text-sm font-semibold">
                        Stay updated with the latest news from around the world. Bringing
                        you accurate and reliable information 24/7.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold"  >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/crime" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Crime Updates
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Breaking News
                            </Link>
                        </li>

                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/law%20&%20justice" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold"  >
                                Law & Justice
                            </Link>
                        </li>

                        <li>
                            <Link to="/astrology" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Astrology
                            </Link>
                        </li>
                        <li>
                            <Link to="/spiritual" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Spiritual
                            </Link>
                        </li>
                        <li>
                            <Link to="/entertainment" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition duration-200 font-semibold">
                                Entertainment
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link
                            to="https://www.facebook.com/paras.guruji"
                            className="hover:text-blue-500 transition duration-200"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={28} />
                        </Link>
                        <Link
                            to="https://x.com/paras_parivaar"
                            className="hover:text-gray-400 transition duration-200"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={28} />
                        </Link>
                        <Link
                            to="https://www.instagram.com/parasparivaar/"
                            className="hover:text-red-400 transition duration-200"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={28} />
                        </Link>
                        <Link
                            to="https://www.youtube.com/channel/UC9ZyUO13YKzVQMCTG1gEYlg"
                            className="hover:text-red-400 transition duration-200"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube size={28} />
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
