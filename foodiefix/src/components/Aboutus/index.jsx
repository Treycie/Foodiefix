import React from 'react'
import image10 from '../../assets/images/image10.jpg'
const Aboutus = () => {
  return (
    <section className="py-12 bg-gray-100 "style={{ backgroundImage: `url(${image10})` }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Discover Our Story
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Icon */}
              </div>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Passionate Team</h3>
              <p className="mt-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum reiciendis distinctio laborum.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutus;