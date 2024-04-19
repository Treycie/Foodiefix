import React,{useState} from 'react'


const Createmenu = () => {
        const [menuTitle, setMenuTitle] = useState('');
        const [description, setDescription] = useState('');
        const [categories, setCategories] = useState([]);
        const [menuImage, setMenuImage] = useState('');
        const [recipes, setRecipes] = useState([]);
       const handleSubmit = (e) => {
          e.preventDefault();
          };
       const handleAddRecipe = () => {
          
        };
      
        const handleRemoveRecipe = (index) => {
        
        };
  
  
    return (
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Add New Menu</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="menuTitle">
              Menu Title:
            </label>
            <input
              type="text"
              id="menuTitle"
              value={menuTitle}
              onChange={(e) => setMenuTitle(e.target.value)}
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="categories">
              Categories:
            </label>
            <input
              type="text"
              id="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="menuImage">
              Menu Image:
            </label>
            <input
              type="file"
              id="menuImage"
              onChange={(e) => setMenuImage(e.target.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Recipes:</label>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
              onClick={handleAddRecipe}
            >
              Add Recipe
            </button>
            {recipes.map((recipe, index) => (
              <div key={index} className="flex items-center mb-2">
                <p className="mr-2">{recipe}</p>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded-full"
                  onClick={() => handleRemoveRecipe(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Save Menu
          </button>
        </form>
      </div>
  )
}

export default Createmenu;