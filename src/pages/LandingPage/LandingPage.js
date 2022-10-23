import React from 'react'
import { useSelector } from 'react-redux'
import HeaderBeforeSignIn from '../../components/HeaderBeforeSignIn'
import background from '../../assets/images/background.png'

export default function LandingPage() {

  const { navigate } = useSelector(state => state.NavigationReducer)

  return (
    <div className="overflow-x-hidden overflow-y-hidden" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundosition: "right"
      // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
    }}>
      <HeaderBeforeSignIn/>
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div className='rounded-3xl p-6' style={{background: "rgba(255, 255, 255, 0.04)"}}>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" >Join us today</p>
          <div onClick={() => { navigate("/signup", { replace: false }) }} className='mt-2 lg:mt-3 cursor-pointer flex justify-center items-center p-3 rounded-3xl hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black' >
            <p className="font-bold text-base lg:text-xl" type="text">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  )
}
