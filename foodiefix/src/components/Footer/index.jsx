import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollButton(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="text-black py-10 bg_gradient">
      <div className="container mx-auto px-20 lg:px-20 py-10 flex flex-col md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            Foodie<span className="text-green-500 text-xl">fix</span>
          </p>
        </div>

        <div className="">
          <div className="text-start mb- md:mb-0">
            <a href="#" className="block md:inline-block py-1 hover:text-gray-500 mr-10">
              Home
            </a>
            <a href="#" className="block md:inline-block py-1 hover:text-gray-500 mr-10">
              About
            </a>
            <a href="#" className="block md:inline-block py-1 hover:text-gray-500 mr-10">
              Services
            </a>
            <a href="#" className="block md:inline-block py-1 hover:text-gray-500 mr-10">
              Contact
            </a>
            <a href="#" className="block md:inline-block py-1 hover:text-gray-500 mr-10">
              Recipes
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-2 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-black hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-1.5 rounded-sm text-black hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-black hover:text-gray-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <span className="text-gray-400 leading-10">Foodiefix &copy; 2024</span>
      </div>

      {showScrollButton && (
        <button
          className="bg-green-500 rounded-full p-3 fixed bottom-5 right-5 text-white hover:bg-green-600 transition duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;