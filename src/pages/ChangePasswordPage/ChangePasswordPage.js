import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import background from '../../assets/images/background.png'
import HeaderAfterSignIn from '../../components/HeaderAfterSignIn'
import { changePasswordAction } from '../../redux/actions/UserAction'
import * as Yup from 'yup';

export default function ChangePasswordPage() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    validationSchema: Yup.object({
        newPassword: Yup.string()
        .min(8, 'Password must contain at least 8 characters!')
        .max(50, 'Password must contain at most 50 characters!!')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/, "Password must be a mix of uppercase/lowercase letters, numbers and special characters"),
        confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Password must match')
    }),
    onSubmit: (values) => {
        dispatch(changePasswordAction(values))
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
      <HeaderAfterSignIn />
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div
          className="rounded-3xl p-6"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-4">
              Change password
            </h1>
            <div className="mb-6 flex justify-between items-center">
              <label
                htmlFor="oldPassword"
                className="text-base md:text-xl blockfont-medium text-white mr-4">
                <span className="whitespace-nowrap">Old password:</span>
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
                onBlur={formik.handleBlur}
                type="password" id="oldPassword"
                className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required />
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center">
              <label
                htmlFor="newPassword"
                className="text-base md:text-xl block font-medium text-white mr-4">
                <span className="whitespace-nowrap">New password:</span>
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                onBlur={formik.handleBlur}
                type="password" id="newPassword"
                className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required />
              </div>
              {formik.touched.newPassword && formik.errors.newPassword ? (<div className="mt-2 text-red-400">{formik.errors.newPassword}</div>) : null}
            </div>
            <div className="mb-6">
              <div className='flex justify-between items-center'>
              <label
                htmlFor="confirmNewPassword"
                className="text-base md:text-xl block font-medium text-white mr-4">
                <span className="whitespace-nowrap">Confirm new password:</span>
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.confirmNewPassword}
                onBlur={formik.handleBlur}
                type="password" id="confirmNewPassword"
                className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required />
              </div>
              {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? (<div className="mt-2 text-red-400">{formik.errors.confirmNewPassword}</div>) : null}

            </div>
            <div className="mt-3 flex justify-center items-center">
              <button
                className="px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl"
                type="submit"
              >
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
