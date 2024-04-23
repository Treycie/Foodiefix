import React, { useState } from 'react';

const Createmeal = () => {
  const [mealTitle, setMealTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mealImage, setMealImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">Add a New Meal</h2>
      <form onSubmit={handleSubmit}className="flex flex-col items-center">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="mealTitle">
            Meal Title:
          </label>
          <input
            type="text"
            id="mealTitle"
            value={mealTitle}
            onChange={(e) => setMealTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="mealImage">
            Meal Image:
          </label>
          <input
            type="file"
            id="mealImage"
            onChange={(e) => setMealImage(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mx-auto block">
          Save Meal
        </button>
      </form>
    </div>
  );
};

export default Createmeal;