import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const WHATSAPP_NUMBER = '919150100477';

const products = [
  'Groundnut Oil',
  'Gingelly Oil',
  'Coconut Oil',
  'Bilona Ghee',
  'Natural Honey',
  'Millet Rice',
];

const Footer = () => {
  return (
    <footer className="bg-[#1a1209] text-[#c9b99a] pt-14 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf size={20} className="text-yellow-500" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Gyes<span className="text-yellow-400">traders</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#9e8c78]">
              Premium organic products delivered with care and integrity to your doorstep across Hosur. Pure, authentic, always fresh.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-yellow-500 mb-2 flex items-center gap-1">
                📞 Direct Booking
              </p>
              <p className="text-sm text-[#c9b99a] font-medium">
                9150 100 477 | 9150 100 499 | 8778 91 91 33
              </p>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9e8c78] mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((name) => (
                <li key={name}>
                  <Link
                    to="/products"
                    className="text-sm text-[#c9b99a] hover:text-yellow-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9e8c78] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-[#c9b99a] hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-[#c9b99a] hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-sm text-[#c9b99a] hover:text-yellow-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2e2010] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6b5c47]">
            © 2026 Gyestraders. All rights reserved. | Proud to serve Hosur with authentic organic products.
          </p>
          <div className="flex gap-6 text-sm text-[#9e8c78]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">Facebook</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
