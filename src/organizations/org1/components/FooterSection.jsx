import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white px-14 pt-14 pb-5 text-xs sm:text-sm">
                <div className="max-w-7xl mx-auto  gap-8 flex justify-between">
                    {/* Left Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl sm:text-4xl font-bold leading-tight">
                            Inspiring Youth, <br /> Shaping the Future.
                        </h2>
                        <button className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-full text-xs hover:bg-orange-600">
                            Donate Now
                        </button>
                        <div className="flex items-center space-x-2 mt-4">
                            <FaPhone size={12} />
                            <p>+91 XXXXXXXXXX</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope size={12} />
                            <p>contact@allyouthrights.org</p>
                        </div>
                        <div className="flex items-center mt-4 custom-footer-input">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className=""
                            />
                            <button className="bg-white text-black px-4 py-2 rounded-r-md text-xs font-semibold hover:bg-gray-200">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="footer-links-cover flex justify-between md:w-md">
                        <div>
                            <h3 className="mb-4 font-semibold text-lg">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/about-us" className="hover:underline">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/donate" className="hover:underline">
                                        Donate
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers" className="hover:underline">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="hover:underline font-light">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/features" className="hover:underline font-light">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className="hover:underline font-light">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="hover:underline font-light">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/support" className="hover:underline font-light">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-lg">Help</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/help-center" className="hover:underline font-light">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/returns-refunds" className="hover:underline font-light">
                                        Returns & Refunds
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="hover:underline font-light">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-use" className="hover:underline font-light">
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social and copyright */}
                <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4 text-xs">
                    <div className="space-x-4 mb-2 sm:mb-0">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">
                            LinkedIn ↗
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:underline">
                            Twitter ↗
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
                            Instagram ↗
                        </a>
                    </div>
                    <p className="text-gray-400 mt-2 sm:mt-0">
                        © 2025 All Jain Rights Organization. All Rights Reserved.
                    </p>
                </div>

            </footer>
            <div className="h-8 w-full bg-orange-500"></div>
        </>
    );
};

export default Footer;
