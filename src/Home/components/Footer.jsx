import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="relative bg-cover bg-center footer-bg text-black py-10 px-6 main-footer-bg">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Crafting Your Identity,<br />Elevating Your Story.</h2>
                    <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300">BOOK NOW</button>
                </div>

                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h4 className="font-semibold mb-2">About us</h4>
                        <ul className="space-y-1">
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Home</h4>
                        <ul className="space-y-1">
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Help Center</h4>
                        <ul className="space-y-1">
                            <li><Link to="/returns">Returns & Refunds</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-4">
                <div className="flex space-x-4">
                    <Link to="/linkedin" className="hover:underline">LinkedIn</Link>
                    <Link to="/twitter" className="hover:underline">Twitter</Link>
                    <Link to="/instagram" className="hover:underline">Instagram</Link>
                </div>
                <p className="mt-4 md:mt-0">© 2025 Visionframe. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
