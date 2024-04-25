import React from 'react';
import sideimage from '../../assets/images/sideimage.jpg';

const UserRegistration = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 h-full md:h-auto">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">FoodieFix</h2>
          <h3 className="text-xl mb-8">Welcome</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2">Firstname</label>
              <input type="email" id="email" placeholder="Firstname" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2">Lastname</label>
              <input type="email" id="email" placeholder="Lastname" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" placeholder="john.doe123@xyz.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-zinc-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" placeholder="********" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-zinc-700 text-sm font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="********" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
              <a href="#" className="text-sm text-green-500 hover:text-green-800">Forgot Password?</a>
            </div>
            <div className="mb-6">
              <input type="checkbox" id="remember" className="mr-2 leading-tight" />
              <label htmlFor="remember" className="text-sm text-zinc-700">Remember me</label>
            </div>
            <div className="mb-4">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
            </div>
            <p className="text-sm">Don't have an account? <a href="#" className="text-green-500 hover:text-green-800">Sign in</a></p>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-cover" style={{ backgroundImage: `url(${sideimage})`, minHeight: '320px' }}></div>
      </div>
    </div>
  );
}

export default UserRegistration;