import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import background from '../../assets/images/background.png'

export default function SuggestionPage() {
  const { navigate } = useSelector((state) => state.NavigationReducer)

  const retirementAge = 65 //hard-coded for now; to use the calculateRetirement function later
  const [favouredAge, setFavouredAge] = useState(retirementAge)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(favouredAge)
    navigate(`/showsuggestions/${favouredAge}`, { replace: false })
  }

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
          <form onSubmit={handleSubmit}>
            <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
              {`Your Current Retirement Age : ${retirementAge}`}
            </p>

            <div className='mb-6'>
              <div className='flex justify-between items-center'>
                <label
                  htmlFor='favouredAge'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  <span className='whitespace-nowrap'>
                    Enter your preferred retirement age:
                  </span>
                </label>
                <input
                  type='number'
                  id='favouredAge'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='age'
                  onChange={(e) => setFavouredAge(e.target.value)}
                  value={favouredAge}
                />
              </div>

              <div className='mt-3 flex justify-center items-center'>
                <button
                  className='px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl'
                  type='submit'
                >
                  Get Suggestions
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
