import React, { useState } from 'react';
import { FiHome, FiBook, FiMenu,FiList, FiSettings, FiPlus, FiTrash } from 'react-icons/fi';

const UserProfile = () => {
  const [newMenu, setNewMenu] = useState('');
  const [menus, setMenus] = useState([]);
  const [newMeal, setNewMeal] = useState('');
  const [meals, setMeals] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleAddMenu = () => {
    setMenus([...menus, newMenu]);
    setNewMenu('');
  };

  const handleDeleteMenu = (index) => {
    const updatedMenus = [...menus];
    updatedMenus.splice(index, 1);
    setMenus(updatedMenus);
  };

  const handleAddMeal = () => {
    setMeals([...meals, newMeal]);
    setNewMeal('');
  };

  const handleDeleteMeal = (index) => {
    const updatedMeals = [...meals];
    updatedMeals.splice(index, 1);
    setMeals(updatedMeals);
  };

  const handleAddRecipe = () => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipe('');
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="flex h-screen bg-blue-50 text-white">
      <div className="w-64 space-y-6 py-7 px-2 bg-zinc-800">
        <div className="flex items-center space-x-2 px-4">
          <img src="https://placehold.co/40x40" alt="Profile" className="rounded-full" />
          <span className="text-lg font-semibold">Valerie</span>
        </div>
        <p className="text-zinc-400 px-4">My Portfolio</p>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 bg-purple-500">
            <FiMenu className="mr-2" /> My Menus
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiMenu className="mr-2" /> My Recipes
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiMenu className="mr-2" /> My Meals
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiPlus className="mr-2" /> Create Menu
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiPlus className="mr-2" /> Create Recipe
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiPlus className="mr-2" /> Create Meal
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700">
            <FiSettings className="mr-2" /> Settings
          </a>
        </nav>
      </div>
      <div className="flex-grow p-6">
        <div className="flex justify-center items-center h-full">
          <div className="text-purple-500 text-6xl"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;