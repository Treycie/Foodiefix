import React from 'react'
import { MdMenuBook } from 'react-icons/md';
import image23 from '../../assets/images/image23.jpg';
import image15 from '../../assets/images/image15.jpg';
import image16 from '../../assets/images/image16.jpg';
import image17 from '../../assets/images/image17.jpg';
import image18 from '../../assets/images/image18.jpg';
import image19 from '../../assets/images/image18.jpg';
import image20 from '../../assets/images/image20.jpg';
import image21 from '../../assets/images/image21.jpg';
import image22 from '../../assets/images/image22.jpg';
import image24 from '../../assets/images/image24.jpg';



const Menusection = () => {
  const menus = [
    {
      title: 'Tan Tan Ramen',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image22 ,
    },
    {
      title: 'Chicken and Chips',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image15 ,
    },
    {
      title: 'Lasanga',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image16 ,
    },
    {
      title: 'Chicken Alfredo',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image17,
    },
    {
      title: 'Salad nicoise',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img: image18,
    },
    {
      title: 'Avocado Toast',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image23 ,
    },
    {
      title: 'Chicken Friedrice',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image20 ,
    },
    {
      title: 'Fluer Burger',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image21 ,
    },
    {
      title: 'Yam Pottage',
      description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
      img:image24 ,
    }
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-bold">What's New on the Menu</h2>
          <div className="text-right">
            <p className="text-gray-600 mb-4 inline-block">Do you want to see more?</p>
            <span className="text-green-500 font-medium ml-2">
              <MdMenuBook size={20} className="inline-block align-middle" />
            </span>
            <a href="#" className="text-green-500 font-medium ml-2 inline-block hover:underline">
              Show all menus
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display the menu items */}
          {menus.map((menu, index) => (
            <div className="shadow-md rounded-lg" key={index}>
              <div className="container">
                <img src={menu.img} alt="" className="mb-4 rounded-lg h-56 w-full object-cover" />
                <h3 className="text-xl font-semibold mb-2">{menu.title}</h3>
                <p className="text-gray-700">{menu.description}</p>
                <a href="#" className="text-primary font-medium mt-4">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menusection;