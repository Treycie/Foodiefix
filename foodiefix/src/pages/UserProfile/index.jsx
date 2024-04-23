import React, { useState } from 'react';
import { FiHome, FiBook, FiList, FiSettings, FiPlus, FiTrash } from 'react-icons/fi';

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
    <div className="flex h-screen">
    {/* Sidebar */}
    <aside className="bg-gray-900 text-white w-64 flex-shrink-0">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <span className="text-2xl font-bold">Dashboard</span>
      </div>
      <div className="flex items-center justify-center py-4">
        <img
          src="/path/to/profile-picture.jpg"
          alt="Profile"
          className="rounded-full w-20 h-20 border-2 border-white"
        />
      </div>
      <nav className="py-4">
        <ul>
          <li>
            <a href="/" className="flex items-center py-2 px-6 text-gray-500 hover:text-white">
              <FiHome className="mr-3" />
              Home
            </a>
          </li>
          <li>
            <a href="/recipes" className="flex items-center py-2 px-6 text-gray-500 hover:text-white">
              <FiBook className="mr-3" />
              Recipes
            </a>
          </li>
          <li>
            <a href="/menu" className="flex items-center py-2 px-6 text-gray-500 hover:text-white">
              <FiList className="mr-3" />
              Menu
            </a>
          </li>
          <li>
            <a href="/settings" className="flex items-center py-2 px-6 text-gray-500 hover:text-white">
              <FiSettings className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  
    {/* Main Content */}
    <main className="flex-1 bg-gray-100 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add Menu</h2>
        <div className="flex">
          <input
            type="text"
            value={newMenu}
            onChange={(e) => setNewMenu(e.target.value)}
            className="mr-2 px-4 py-2 border border-gray-400 rounded-md w-full"
          />
          <button
            onClick={handleAddMenu}
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <FiPlus className="mr-2" />
            Add
          </button>
        </div>
      </div>
  
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Menus</h2>
        <ul>
          {menus.map((menu, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">{menu}</span>
              <button
                onClick={() => handleDeleteMenu(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md flex items-center"
              >
                <FiTrash className="mr-1" />
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add Meal</h2>
        <div className="flex"> {/* Fixed typo here */}
          <input
            type="text"
            value={newMeal}
            onChange={(e) => setNewMeal(e.target.value)}
            className="mr-2 px-4 py-2 border border-gray-400 rounded-md w-full"
          />
          <button
            onClick={handleAddMeal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <FiPlus className="mr-2" />
            Add
          </button>
        </div>
      </div>
  
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Meals</h2>
        <ul>
          {meals.map((meal, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">{meal}</span>
              <button
                onClick={() => handleDeleteMeal(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md flex items-center"
              >
                <FiTrash className="mr-1" />
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add Recipe</h2>
        <div className="flex">
          <input
            type="text"
            value={newRecipe}
            onChange={(e) => setNewRecipe(e.target.value)}
            className="mr-2 px-4 py-2 border border-gray-400 rounded-md w-full"
          />
          <button
            onClick={handleAddRecipe}
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <FiPlus className="mr-2" />
            Add
          </button>
        </div>
      </div>
  
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Recipes</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">{recipe}</span>
              <button
                onClick={() => handleDeleteRecipe(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md flex items-center"
              >
                <FiTrash className="mr-1" />
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  </div>
  );
  };
  
  export default UserProfile;
  