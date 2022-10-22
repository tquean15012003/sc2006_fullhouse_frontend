import React, { Fragment } from 'react'
import dropdown from '../../assets/images/dropdown.svg'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SignInPage() {
  return (
    <div className="overflow-hidden " style={{
      background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
    }}>
      <header style={{ fontFamily: "'Gugi', cursive" }} className="fixed w-full top-0 z-50">
        <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-gray-700 shadow-sm">
                    <img src={dropdown} className="mr-3 h-6" alt="DropdownImage" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items style={{ background: "rgba(255, 255, 255, 0.04)" }} className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames('text-white', 'block px-4 py-2 text-sm')} >
                            <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg> Sign In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames('text-white', 'block px-4 py-2 text-sm')} >
                            <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg> Sign Up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames('text-white', 'block px-4 py-2 text-sm')} >
                            <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg> Guest
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <span className="text-white self-center text-xl xl:text-2xl font-bold whitespace-nowrap">Full House</span>
            </div>
            <div className="flex items-center lg:order-2">
              <a href="#" className="text-white focus:ring-4 font-medium rounded-lg text-md lg:text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">SIGN IN</a>
              <a href="#" className="focus:ring-4 font-medium rounded-lg text-md lg:text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800" style={{ color: "#FA0F0F" }}>SIGN UP</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div className='rounded-3xl p-6' style={{ background: "rgba(255, 255, 255, 0.04)" }}>
          <form>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-4">SIGN IN</h1>
            <div class="mb-6 flex justify-between items-center">
              <label for="username" class="text-base md:text-xl block mb-2 font-medium text-white mr-4">Username:</label>
              <input type="username" id="username" class="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="username" required />
            </div>
            <div class="mb-6 flex justify-between items-center">
              <label for="password" class="text-base md:text-xl block mb-2 font-medium text-white mr-4">Password:</label>
              <input type="password" id="password" class="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="***********" required />
            </div>
            <p className="cursor-pointer text-right text-base md:text-xl text-orange-400">Forget password?</p>
            <button type="text">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
