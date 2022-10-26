import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import background from '../../assets/images/background.png'
import HeaderAfterSignIn from '../../components/HeaderAfterSignIn'
import { getRetirementAgeAction, getRetirementInfoAction } from '../../redux/actions/RetirementInfoActions'

export default function SuggestionPage() {


  const { retirementAge, retirementInfo } = useSelector(state => state.RetirementInfoReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRetirementAgeAction())
    dispatch(getRetirementInfoAction())
  }, [dispatch])

  return (
    <div
      className='overflow-x-hidden overflow-y-hidden'
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundosition: 'right',
        fontFamily: "'Gugi', cursive",
        // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
      }}
    >
      <HeaderAfterSignIn />
      <div className='w-screen h-screen text-white flex justify-center items-center'>

        <div
          className='rounded-3xl p-6'
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
        >
          <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4'>Sugesstion</h1>
          <div className='mb-3'>
            <p className='font-bold text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4'>
              Your Current Retirement Age : <span className="text-2xl lg:text-4xl">{retirementAge}</span>
            </p>
            <p className='font-bold text-lg md:text-xl mb-4'>
              Some suggestions to lower your retirement age are as follows :
            </p>
            <div className="ml-3 flex flex-col">
              {parseInt(retirementInfo.investments) < 100 ?
                <div className='mb-5 flex justify-between items-center'>
                  <p className="">You now invest {parseInt(retirementInfo?.investments) < 50 ? <span>only</span> : ""} <span className={`text-xl lg:text-3xl text-${parseInt(retirementInfo?.investments) < 7 ? "red" : parseInt(retirementInfo?.investments) < 15 ? "orange" : "green"}-400`}>{retirementInfo.investments}</span> % of your salary.</p>
                  <button
                    className='px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded'
                    type='text'
                  >
                    Update Investment
                  </button>
                </div> : ""
              }
              {retirementInfo.housePrice > 500000 ?
                <div className='mb-5 flex justify-between items-center'>
                  <p>You now spend <span className="text-xl lg:text-3xl text-red-400">{retirementInfo?.housePrice}</span> on your house</p>
                  <button
                    className='px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded'
                    type='text'
                  >
                    Update Cost
                  </button>
                </div> : ""
              }
              {retirementInfo.salary < 2000 ?
                <div className='mb-5 flex justify-between items-center'>
                  <p>Your salary is now <span className="text-xl lg:text-3xl text-red-400">{retirementInfo?.salary}</span>. Try to increase your pay</p>
                  <button
                    className='px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded'
                    type='text'
                  >
                    Update Salary
                  </button>
                </div> : ""
              }
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
