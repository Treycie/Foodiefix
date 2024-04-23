import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Hero from '../../components/Hero/index.jsx';
import Recipesection from '../../components/Recipesection/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import Aboutus from '../../components/Aboutus/index.jsx';
import Testimonial from '../../components/Testimonial/index.jsx';
import Menusection from '../../components/Menusection/index.jsx'



const index = () => {
  return (
    <div>
   <Navbar />
   <Hero />
   <Recipesection />
   <Menusection />
   <Aboutus />
   <Testimonial />
   <Footer />

    </div>
  )
}

export default index