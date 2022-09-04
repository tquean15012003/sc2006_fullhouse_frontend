import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col text-black">
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
          Username<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" id="username" type="text" placeholder="Username" />

      </div>
      <div className="mb-2">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
          Password<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" id="password" type="password" placeholder="******************" />
      </div>
      <div className="mb-2">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="passwordConfirmation">
          Password confirmation<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="passwordConfirmation" id="passwordConfirmation" type="password" placeholder="******************" />
      </div>
      <div className="mb-2">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
          Name<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="name" id="name" type="text" placeholder="Name" />
      </div>
      <div className="mb-2">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
          Email<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="email" id="email" type="text" placeholder="Email" />
      </div>
      <div className="mb-2">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone number<span className="text-red-900">&#42;</span>
        </label>
        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="phoneNumber" id="phoneNumber" type="text" placeholder="Phone number" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded mr-3" type="button">
          <Link to="/" className="text-white inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Register
          </Link>
        </button>
        <button className="bg-black text-white font-bold py-2 px-6 rounded" type="button">
          <Link to="/" className="text-white inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Back to login
          </Link>
        </button>
      </div>
      <div className="flex justify-center items-center text-2xl font-bold">
        <Link to="/guestmode" href="">Continue without register</Link>
      </div>
    </form>
  )
}
