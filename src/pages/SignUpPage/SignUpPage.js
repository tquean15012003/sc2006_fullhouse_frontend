import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import HeaderBeforeSignIn from '../../components/HeaderBeforeSignIn'
import * as Yup from 'yup';
import { signUpAction } from '../../redux/actions/UserAction';

export default function SignUpPage() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, 'Username must contain at least 8 characters!')
        .max(50, 'Username must contain at most 8 characters!'),
      password: Yup.string()
        .min(8, 'Password must contain at least 8 characters!')
        .max(50, 'Password must contain at most 50 characters!!')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/, "Password must be a mix of uppercase/lowercase letters, numbers and special characters"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      email: Yup.string()
        .email('Invalid email!'),
      phoneNumber: Yup.string()
        .min(8, 'Phone number must have exactly 8 numbers!')
        .max(8, 'Phone number must have exactly 8 numbers!')
        .matches(/(6|8|9)\d{7}/, "Phone number must be a Singapore phone number"),
    }),
    onSubmit: (values) => {
      dispatch(signUpAction(values))
    }
  })

  return (
    <div
      className='overflow-hidden '
      style={{
        background:
          'linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)',
      }}
    >
      <HeaderBeforeSignIn />
      <div className='w-screen h-screen text-white flex justify-center items-center'>
        <div
          className='rounded-3xl p-6'
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
        >
          <form onSubmit={formik.handleSubmit}>
            <h1 className='text-lg md:text-2xl font-bold text-center mb-4'>
              SIGN UP
            </h1>

            <div className='mb-6'>
              <div className="flex justify-between items-center">
                <label
                  htmlFor='username'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  Username:
                </label>
                <input
                  type='username'
                  id='username'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Username'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (<div className="mt-2 text-red-400">{formik.errors.username}</div>) : null}
            </div>

            <div className='mb-6'>
              <div className='flex justify-between items-center'>
                <label
                  htmlFor='password'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  Password:
                </label>
                <input
                  type='password'
                  id='password'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='***********'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (<div className="mt-2 text-red-400">{formik.errors.password}</div>) : null}
            </div>

            <div className='mb-6'>
              <div className='flex justify-between items-center'>
                <label
                  htmlFor='passwordConfirmation'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  Confirm Password:
                </label>
                <input
                  type='password'
                  id='passwordConfirmation'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='***********'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirmation}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<div className="mt-2 text-red-400">{formik.errors.passwordConfirmation}</div>) : null}
            </div>

            <div className='mb-6'>
              <div className="flex justify-between items-center">
                <label
                  htmlFor='email'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  Email:
                </label>
                <input
                  type='email'
                  id='email'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Email'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (<div className="mt-2 text-red-400">{formik.errors.email}</div>) : null}
            </div>

            <div className='mb-6'>
              <div className="flex justify-between items-center">
                <label
                  htmlFor='phoneNumber'
                  className='text-base md:text-xl block font-medium text-white mr-4'
                >
                  Phone Number:
                </label>
                <input
                  type='text'
                  id='phoneNumber'
                  className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Phone Number'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div className="mt-2 text-red-400">{formik.errors.phoneNumber}</div>) : null}
            </div>

            <div className='mt-3 flex justify-center items-center'>
              <button
                className='px-6 py-2 bg-gray-500 hover:bg-gray-200 hover:text-black rounded-2xl'
                type='submit'
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
