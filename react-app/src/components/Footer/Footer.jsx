import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-gray-800 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center justify-center dark:text-gray-400">© 2024 <a href="https://lunchbreak.com" class="hover:underline">LunchBreak™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium justify-center text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/" class="hover:underline mx-2 md:mx-4">About</Link>
        </li>
        <li>
            <Link to="/" class="hover:underline mx-2 md:mx-4">Privacy Policy</Link>
        </li>
        <li>
            <Link to="/" class="hover:underline mx-2 md:mx-4">FAQs</Link>
        </li>
        <li>
            <Link to="/" class="hover:underline mx-2 md:mx-4">Licensing</Link>
        </li>
    </ul>
</footer>
  );
};