import React from 'react'

const Createrecipe = () => {
  return (
    <div
    className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${image13})` }}
  >
    <div className="flex flex-col items-center">
      <div className="max-w-2xl my-4 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="menuTitle">
              Recipe Title:
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
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div> 
  )
}

export default Createrecipe;