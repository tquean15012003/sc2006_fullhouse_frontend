import React, { Fragment } from 'react'
import dropdown from '../../assets/images/dropdown.svg'
import { Menu, Transition } from '@headlessui/react'
import avatar from '../../assets/images/avatar.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfilePage() {
  return (
    <div className="overflow-hidden " style={{
      background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
      fontFamily: "'Gugi', cursive"
    }}>
      <header className="fixed w-full top-0 z-50">
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
                            </svg> Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames('text-white', 'block px-4 py-2 text-sm')} >
                            <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg> Calculator
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames('text-white', 'block px-4 py-2 text-sm')} >
                            <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg> Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <span className="text-white self-center text-xl xl:text-2xl font-bold whitespace-nowrap">Full House</span>
            </div>

          </div>
        </nav>
      </header>
      <div className="mt-20 md:mt-0 md:w-screen md:h-screen text-white flex justify-center items-center">
        <div className="grid grid-rows-5 grid-flow-row lg:grid-flow-col gap-4" >
          <div className="row-span-5 lg:row-span-4 col-span-8 rounded-3xl p-4 flex justify-between" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
            <div>
              <h2 className="font-bold text-2xl">User Profile</h2>
              <div className="p-3 text-md lg:text-xl">
                <p className="mt-2">Name - Koh Jackwin</p>
                <p className="mt-2">D.o.B - 19/07/1991</p>
                <p className="mt-2">Degree - Computer Science (NTU)</p>
                <p className="mt-2">Estimated Salary ($SGD) - 4500</p>
                <p className="mt-2">Car Price ($SGD)- 500k</p>
                <p className="mt-2">House Type - 5 Room</p>
                <button style={{ background: "#5100FD" }} className="p-2 rounded mt-4 lg:mt-8" type="text">Update User Profile</button>
              </div>
            </div>
            <div className="hidden sm:flex justify-between items-center">
              <img className="rounded-full sm:h-40 md:h-80" src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="hidden lg:flex row-span-1 col-span-12 rounded-3xl p-4 justify-center items-center">
            <div className="w-full h-full">
              <h2 className="text-center">Retirement Track</h2>
              <div class="w-full rounded-full h-2.5" style={{ background: "#D9D9D9" }}>
                <div class="h-2.5 rounded-full" style={{ width: "55%", background: "#02FF3A" }}></div>
              </div>
            </div>
          </div>
          <div className="row-span-5 lg:row-span-2 col-span-8 lg:col-span-4 rounded-3xl p-4 flex justify-center items-center" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
            <div>
              <h2 className="font-bold text-xl">Invesment</h2>
              <div className="p-3 text-md lg:text-xl">
                <div className="mt-3 flex justify-between items-center">
                  <p className="mr-2 lg:mr-4">S&P 500</p>
                  <span className="px-5 py-1 rounded-2xl text-lg" style={{ background: "#fff", color: "#15C83C" }}>5%</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="mr-2 lg:mr-4">Crypto</p>
                  <span className="px-5 py-1 rounded-2xl text-lg" style={{ background: "#fff", color: "#15C83C" }}>5%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-5 lg:row-span-2 col-span-8 lg:col-span-4 rounded-3xl p-4 flex justify-center items-center" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
            <div>
              <h2 className="font-bold text-xl">Estimated Retirement Age </h2>
              <p className="text-center text-4xl" style={{ color: "#5ED135" }}>57</p>
            </div>
          </div>
          <div className="flex lg:hidden row-span-1 col-span-8 rounded-3xl p-4 justify-center items-center">
            <div className="w-full h-full">
              <h2 className="text-center">Retirement Track</h2>
              <div class="w-full rounded-full h-2.5" style={{ background: "#D9D9D9" }}>
                <div class="h-2.5 rounded-full" style={{ width: "55%", background: "#02FF3A" }}></div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}
