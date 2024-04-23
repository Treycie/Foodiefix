import React from "react";
import headerImage from '../../assets/images/headerImage.jpg';

const Allrecipes = () => {
  const recipes = [
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    {
      id: 1,
      imageSrc: "https://placehold.co/600x400",
      altText: "Toast with cream and strawberries",
      date: "July 12, 2018",
      title: "Toast with cream and strawberries",
      description:
        "Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.",
      likes: 31,
    },
    
  ];

  return (
    <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerImage})`,
          height: "350px",
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-xl font-semibold mt-10 uppercase tracking-wide text-green-600">
            Recipes
          </div>
          <h1 className="text-4xl font-bold mt-20 mb-6">
            Discover our amazing dishes!
          </h1>
        </div>
      </div>
      <div className="bg-white p-4 shadow">
        <div className="flex items-center space-x-4">
          <span className="text-green-600 font-semibold">Filter by</span>
          <button className="flex items-center text-green-600 hover:text-green-800">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zM3 20a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
              ></path>
            </svg>
            Categories
          </button>
          <button className="flex items-center text-green-600 hover:text-green-800">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zM3 20a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
              ></path>
            </svg>
            Ingredients
          </button>
          <button className="flex items-center text-green-600 hover:text-green-800">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zM3 20a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
            Difficulty
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 shadow-md rounded-md"
            >
              <img
                src={recipe.imageSrc}
                alt={recipe.altText}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="text-sm text-gray-500">{recipe.date}</div>
                <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
                <p className="mt-2 text-gray-600">{recipe.description}</p>
                <div className="flex items-center mt-4">
                  <svg
                    className="w-4 h-4 text-green-600 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm5-8a1 1 0 11-2 0V8a1 1 0 012 0v2zM6 9a1 1 0 00-1 1v2a1 1 0 102 0V10a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v2a1 1 0 102 0V10a1 1 0 00-1-1zm-4-9a1 1 0 00-1 1v2a1 1 0 102 0V1a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-600">{recipe.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default Allrecipes;