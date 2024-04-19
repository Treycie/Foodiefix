import React from 'react'

const Allrecipes = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Meal</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Lunches</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Soups</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Breakfast</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">Snacks</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allrecipes;