import React from 'react'

const Allmeals = () => {
  return (
    <body className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Our menu</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis!</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Pancakes" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Calum Lewis</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Pancakes with syrup & fruits</p>
              <p className="text-lg font-bold">$20.00</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Hawaiian Pizza" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Hawaiian Pizza</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Cheese & pineapple</p>
              <p className="text-lg font-bold">$40.00</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Cheese Burger" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Cheese Burger</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Beef, cheese, lettuce</p>
              <p className="text-lg font-bold">$20.00</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Fried Eggs" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Fried Eggs</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Sunny side up eggs</p>
              <p className="text-lg font-bold">$5.00</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Hawaiian Juice" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Hawaiian Juice</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Tropical fruits</p>
              <p className="text-lg font-bold">$15.00</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <img src="https://placehold.co/300x200" alt="Chocolate Dessert" className="rounded-t-lg w-full" />
            <div className="p-4">
              <h2 className="font-semibold">Chocolate Dessert</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Rich chocolate cake</p>
              <p className="text-lg font-bold">$25.00</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Allmeals;