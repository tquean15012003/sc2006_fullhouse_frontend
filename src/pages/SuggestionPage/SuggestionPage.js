import React from 'react'
import { useSelector } from 'react-redux'
import HeaderAfterSignIn from '../../components/HeaderAfterSignIn'
import background from '../../assets/images/background.png'

export default function SuggestionPage() {
  const { navigate } = useSelector((state) => state.NavigationReducer)

  return (
    <div
      className='overflow-x-hidden overflow-y-hidden'
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundosition: 'right',
        fontFamily: "'Gugi', cursive"
        // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
      }}
    >
      <HeaderAfterSignIn />
      <div className='w-screen h-screen text-white flex justify-center items-center'>
        <div
          className='rounded-3xl p-6'
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
        >
          <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            Test for suggestions
          </p>
          <div
            onClick={() => {
              navigate('/signup', { replace: false })
            }}
            className='mt-2 lg:mt-3 cursor-pointer flex justify-center items-center p-3 rounded-3xl'
            style={{ background: '#2E116C' }}
          >
            <p className='font-bold text-base lg:text-xl' type='text'>
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
