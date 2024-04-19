import React from 'react'

const Header = () => {
    return (
        
            <section className="bg-gray-100">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-semibold text-gray-800">
                    Discover Delicious Recipes
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus mauris vel dolor fermentum, eget efficitur arcu placerat. Aenean euismod, eros vitae commodo fringilla, lectus massa suscipit justo, nec vestibulum elit dui quis purus.
                  </p>
                  <div className="flex justify-center mt-8">
                    <input
                      type="text"
                      placeholder="Search recipes..."
                      className="rounded-l-lg py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    />
                    <button className="px-4 rounded-r-lg bg-red-500 text-white font-bold p-2 uppercase border-red-600 border-t border-b border-r">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        };
export default Header;  