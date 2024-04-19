import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Hero from '../../components/Hero/index.jsx';
import Recipesection from '../../components/Recipesection/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import Aboutus from '../../components/Aboutus/index.jsx';
import Testimonial from '../../components/Testimonial/index.jsx';

import Createmeals from '../../pages/Createmeals/index.jsx';

const index = () => {
  return (
    <div>
   <Navbar />
   <Hero />
   <Recipesection />
   <Aboutus />
   <Testimonial />
   
   <Createmeals />
   
   <Footer />

    </div>
  )
}

export default index