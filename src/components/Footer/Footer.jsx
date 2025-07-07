import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left: About the Project */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-700">About Dessert Palace</h2>
          <p className="text-sm">
            Dessert Palace is your go-to platform for online cake delivery. We specialize in freshly baked cakes, cupcakes, and custom desserts delivered right to your door. Celebrate every moment with sweetness!
          </p>
          <div className="flex space-x-4 text-purple-600">
            <a href="#"><FaFacebookF className="hover:text-pink-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-pink-600 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-pink-600 transition" /></a>
          </div>
        </div>

        {/* Center: Company Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-700">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-purple-500">About Us</Link></li>
            <li><Link to="/delivery" className="hover:text-purple-500">Delivery</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-purple-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-700">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 9849516237</li>
            <li>✉️ contact@dessertpalace.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-300 mx-6" />

      <div className="text-center text-xs text-gray-500 py-4">
        © 2024 Dessert Palace — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
