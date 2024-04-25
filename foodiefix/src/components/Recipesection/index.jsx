import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image8 from '../../assets/images/image8.jpg';
import image10 from '../../assets/images/image10.jpg';
import image11 from '../../assets/images/image11.jpg';
import image14 from '../../assets/images/image14.jpg';
import image25 from '../../assets/images/image25.jpg';

const Recipesection = () => {
  const recipes = [
    {
      title: 'Oriental Sea Soup',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image1,
    },
    {
      title: 'Sea Food Soup',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image2,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image3,
    },
    {
      title: 'Toast with cream and strawberries',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image5,
    },
    {
      title: 'Mixed chef’s salad',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image6,
    },
    {
      title: 'Rice Balls and Peanut Butter Soup',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image10,
    },
    {
      title: 'Oven Grilled Tilapia with Fried Plantain',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image14,
    },
    {
      title: 'Mashed Plantain',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image11,
    },
    {
      title: 'Ghanaian Jollof Rice',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image25,
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 inline-block">Featured Recipes</h2>
        <div className="text-right inline-block ml-4">
          <p className="text-gray-600 mb-4 inline-block">Do you want to see more?</p>
          <span className="text-green-500 font-medium ">
            <MdMenuBook size={20} className="inline-block align-middle" />
          </span>
          <a href="#" className="text-green-500 font-medium ml-2 inline-block hover:underline">
            Show all menus
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div className="shadow-md rounded-lg" key={index}>
              <div className="container">
                <img src={recipe.img} alt="" className="mb-4 rounded-lg h-56 w-full object-cover" />
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-700">{recipe.description}</p>
                <a href="#" className="text-primary font-medium mt-4">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipesection;