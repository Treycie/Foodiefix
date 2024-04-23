import React from 'react';
import image12 from '../../assets/images/image12.jpg';

const Aboutus = () => {
  return (
    <section className="py-12 bg-gray-100 bg-cover" style={{ backgroundImage: `url(${image12})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">About Us</h2>
          <h3 className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Our Story
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-white">
            Welcome to our menu recipe website!<br /> We are passionate about bringing you a delightful culinary experience right at your fingertips.<br /> Our team of dedicated chefs and food enthusiasts curates a wide array of mouthwatering recipes that cater to various tastes and preferences.
          </p>
          <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded-full">
            Read More
          </button>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mt-3 text-center sm:mt-5">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;