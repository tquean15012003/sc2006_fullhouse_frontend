import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import HeaderBeforeSignIn from '../../components/HeaderBeforeSignIn'
import { verifyAction } from '../../redux/actions/UserAction';
import background from '../../assets/images/background.png'

export default function ConfirmSignUp() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      OTP: ""

    },
    onSubmit: (values) => {
      dispatch(verifyAction(values))
    }
  })

  return (
    <div className="overflow-x-hidden overflow-y-hidden" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundosition: "right"
      // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
    }}>
      <HeaderBeforeSignIn />
      <div className='w-screen h-screen text-white flex justify-center items-center'>
        <div className='rounded-3xl p-6' style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
          <form onSubmit={formik.handleSubmit}>
            <h1 className='text-lg md:text-2xl font-bold text-center mb-4'>
              Please Enter the OTP sent to the email
            </h1>
            <div className='mb-6 flex justify-between items-center'>
              <label
                htmlFor='OTP'
                className='text-base md:text-xl block font-medium text-white mr-4'
              >
                OTP:
              </label>
              <input
                type='text'
                id='OTP'
                className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='OTP'
                required
                onChange={formik.handleChange}
                value={formik.values.OTP}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className='mt-3 flex justify-center items-center'>
              <button
                className='px-6 py-2 bg-gray-500 hover:bg-gray-200 hover:text-black rounded-2xl'
                type='submit'
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
