import React, { Fragment } from 'react'
import dropdown from '../assets/images/dropdown.svg'
import { Menu, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderBeforeSignIn() {
    
    const { navigate } = useSelector(state => state.NavigationReducer)

    return (
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
                                                <p onClick={() => { navigate("/signin", { replace: false }) }} className={classNames('cursor-pointer text-white', 'block px-4 py-2 text-sm')} >
                                                    <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                                                    </svg> Sign In
                                                </p>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p onClick={() => { navigate("/signup", { replace: false }) }} className={classNames('cursor-pointer text-white', 'block px-4 py-2 text-sm')} >
                                                    <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                                                    </svg> Sign Up
                                                </p>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p className={classNames('cursor-pointer text-white', 'block px-4 py-2 text-sm')} >
                                                    <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                                                    </svg> Guest
                                                </p>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p onClick={() => { navigate("/feedback", { replace: false }) }} className={classNames('cursor-pointer text-white', 'block px-4 py-2 text-sm')} >
                                                    <svg className='inline' width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="10" height="3" rx="1.5" fill="#D9D9D9" />
                                                    </svg> Feedback
                                                </p>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <span onClick={() => { navigate("/", { replace: false }) }} className="text-white self-center text-xl xl:text-2xl font-bold whitespace-nowrap">Full House</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <p onClick={() => { navigate("/signin", { replace: false }) }} className="cursor-pointer text-white focus:ring-4 font-medium rounded-lg text-md lg:text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">SIGN IN</p>
                        <p onClick={() => { navigate("/signup", { replace: false }) }} className="cursor-pointer focus:ring-4 font-medium rounded-lg text-md lg:text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800" style={{ color: "#FA0F0F" }}>SIGN UP</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
