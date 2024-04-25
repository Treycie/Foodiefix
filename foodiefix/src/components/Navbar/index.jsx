import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-slate-800 py-4 ${isScrolled ? 'fixed top-0 left-0 w-full' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center font-bold text-2xl text-white">
          Foodie<span className="text-green-500 text-xl">fix</span>
        </a>
        <div className="space-x-6">
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Recipe</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Recipes</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Category</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">About us</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Menu</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;