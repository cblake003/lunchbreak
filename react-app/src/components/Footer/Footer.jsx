import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-sm text-center sm:text-left block mb-2 sm:mb-0">© 2024 <a href="https://lunchbreak.com" className="text-white hover:text-gray-300">LunchBreak™</a>. All Rights Reserved.</span>
                    <ul className="flex justify-center sm:justify-start flex-wrap">
                        <li>
                            <Link to="/" className="hover:text-gray-300 px-2 py-1">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-gray-300 px-2 py-1">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-gray-300 px-2 py-1">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-gray-300 px-2 py-1">Licensing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
      );
      
};