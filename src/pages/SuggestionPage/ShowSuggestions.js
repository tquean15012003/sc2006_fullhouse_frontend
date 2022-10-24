import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import background from '../../assets/images/background.png'
import suggestions from './suggestions'

export default function ShowSuggestions() {
  const { favouredAge } = useParams()
  const retirementAge = 65 //hard-coded for now; to use the calculateRetirement function later

  return (
    <div
      className='overflow-x-hidden overflow-y-hidden'
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundosition: 'right',
        // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
      }}
    >
      <div className='w-screen h-screen text-white flex justify-center items-center'>
        <div
          className='rounded-3xl p-6'
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
        >
          <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {`Your Prefered retirement Age : ${favouredAge}`}
          </p>
          <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            Some suggestions to lower your retirement age are as follows :
          </p>

          <div className='mb-6'>
            {suggestions.map((suggestion) => {
              //suggestion data is hard-coded for now
              return (
                <div className='flex justify-between items-center'>
                  <p className='text-base md:text-xl block font-medium text-white mr-4'>
                    {suggestion}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
