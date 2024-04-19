import React,{useState} from 'react'


const Createmeals = () => {
    const [mealTitle, setMealTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [mealImage, setMealImage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
    };
  return (
    <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-4">Add a New Meal</h2>
    <form onSubmit={handleSubmit}>
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
        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
          Category:
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
          Ingredients:
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="instructions">
          Instructions:
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="cookingTime">
          Cooking Time:
        </label>
        <input
          type="text"
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
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
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
        Save Meal
      </button>
    </form>
  </div>
);
  
}

export default Createmeals;