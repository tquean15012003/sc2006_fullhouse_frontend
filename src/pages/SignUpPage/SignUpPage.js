import React, { Fragment } from 'react'
import dropdown from '../../assets/images/dropdown.svg'
import { Menu, Transition } from '@headlessui/react'
import HeaderBeforeSignIn from '../../components/HeaderBeforeSignIn'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SignUpPage() {
  return (
    <div
      className='overflow-hidden '
      style={{
        background:
          'linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)',
      }}
    >
      <HeaderBeforeSignIn/>
      <div className='w-screen h-screen text-white flex justify-center items-center'>
        <div
          className='rounded-3xl p-6'
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
        >
          <form>
            <h1 className='text-lg md:text-2xl font-bold text-center mb-4'>
              SIGN UP
            </h1>

            <div className='mb-6 flex justify-between items-center'>
              <label
                htmlFor='username'
                className='text-base md:text-xl block mb-2 font-medium text-white mr-4'
              >
                Username:
              </label>
              <input
                type='username'
                id='username'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Username'
                required
              />
            </div>

            <div className='mb-6 flex justify-between items-center'>
              <label
                for='password'
                className='text-base md:text-xl block mb-2 font-medium text-white mr-4'
              >
                Password:
              </label>
              <input
                type='password'
                id='password'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='***********'
                required
              />
            </div>

            <div className='mb-6 flex justify-between items-center'>
              <label
                for='confirmPassword'
                className='text-base md:text-xl block mb-2 font-medium text-white mr-4'
              >
                Confirm Password:
              </label>
              <input
                type='password'
                id='confirmPassword'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='***********'
                required
              />
            </div>

            <div className='mb-6 flex justify-between items-center'>
              <label
                for='email'
                className='text-base md:text-xl block mb-2 font-medium text-white mr-4'
              >
                Email:
              </label>
              <input
                type='email'
                id='email'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Email'
                required
              />
            </div>

            <div className='mb-6 flex justify-between items-center'>
              <label
                for='phoneNumber'
                className='text-base md:text-xl block mb-2 font-medium text-white mr-4'
              >
                Phone Number:
              </label>
              <input
                type='text'
                id='phoneNumber'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Phone Number'
                required
              />
            </div>

            <div className='mt-3 flex justify-center items-center'>
              <button
                className='px-6 py-2 bg-gray-500 hover:bg-gray-200 hover:text-black rounded-2xl'
                type='text'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
