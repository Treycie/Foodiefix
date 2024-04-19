import React from 'react';
import image4 from '../../assets/images/image4.jpg';

const Hero = () => {
  return (
    <section className="hero bg-cover bg-center py-32" style={{ backgroundImage: `url(${image4})` }}>
      <div className="container mx-auto text-left">
        <h1 className="text-2xl font-light text-teal-600 mb-4 ml-10">Welcome</h1>
        <p className="text-6xl font-bold text-black mb-8 ml-10">Easy recipes <br /> for any occasion</p>
        <p className="text-lg text-neutral-950 mb-8 ml-10">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh <br /> magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim.<br /> Duis fermentum faucibus est.</p>
        <button className="bg-green-400 text-primary font-medium py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 ml-10">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;