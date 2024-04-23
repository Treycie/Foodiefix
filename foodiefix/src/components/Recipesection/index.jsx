import React from 'react';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image8 from '../../assets/images/image8.jpg';

const Recipesection = () => {
  const recipes = [
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image1,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image2,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image3,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image5,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image6,
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: "../../assets/images/image8.jpg",
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: {image8},
    },
    {
      title: 'Spaghetti with Tomato Sauce',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: {image8},
    }
  ]
  return (
    <section className="py-12 bg-gray-100">
   
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe,index)=>(
        <div className="shadow-md rounded-lg">
        <div className="container">
          <img src={recipe.img} alt="Spaghetti with Tomato Sauce" className="mb-4 rounded-lg h-56 w-full object-cover" />
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
 














