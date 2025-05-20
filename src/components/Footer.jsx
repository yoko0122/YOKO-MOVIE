import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaFilm,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and copyright */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaFilm className="text-xl" />
            <span className="font-bold italic text-lg">Movie Z</span>
          </div>
          <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
          <div className="flex items-center gap-2 mb-1">
            <FaEnvelope />
            <span>support@movieZ.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+976 (11) 123-4567</span>
          </div>
        </div>

        {/* Social links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow us</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline flex items-center gap-1">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <FaTwitter /> Twitter
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <FaYoutube /> Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
