import React from 'react'
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image8 from '../../assets/images/image8.jpg';
const Menusection = () => {
  return (
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Whats New on Our Menu</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image3} alt="Spaghetti with Tomato Sauce" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Spaghetti with Tomato Sauce</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image1} alt="Seafood soup" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Seafood soup</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image2} alt="Oriental Soup" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Oriental Soup</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image5} alt="Toast with cream and strawberries" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Toast with cream and strawberries</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image6} alt="Mixed chefs salad" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Mixed chefs salad</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <div className="container">
            <img src={image8} alt="Thailand rice food" className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Thailand rice food</h3>
            <p className="text-gray-700">Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.</p>
            <a href="#" className="text-primary font-medium mt-4">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Menusection;