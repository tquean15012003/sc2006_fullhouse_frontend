import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-black" >
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
          Username<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" id="username" type="text" placeholder="Username" />

      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
          Password<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" id="password" type="password" placeholder="******************" />

      </div>
      <div className="flex items-center justify-between mb-6">
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded mr-3" type="button">
          <Link to="/profile" className="text-white inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Sign in
          </Link>
        </button>
        <button className="bg-black text-white font-bold py-2 px-6 rounded" type="button">
          <Link to="/register" className="text-white inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Create account
          </Link>
        </button>
      </div>
      <div className="flex justify-center items-center text-2xl font-bold">
        <Link to="/guestmode" href="">Continue without login</Link>
      </div>
    </form>
  )
}
