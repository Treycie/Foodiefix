import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-slate-800 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center font-bold text-2xl text-white">
          <img src alt="Logo" className="w-8 h-8 mr-2" />
          Foodiefix
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

