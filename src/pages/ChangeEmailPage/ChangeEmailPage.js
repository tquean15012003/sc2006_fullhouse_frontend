import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import background from '../../assets/images/background.png'
import HeaderAfterSignIn from '../../components/HeaderAfterSignIn'
import { ChangeEmailAction } from '../../redux/actions/UserAction'

export default function ChangeEmailPage() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      newEmail: "",
    },
    onSubmit: (values) => {
        dispatch(ChangeEmailAction(values))
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
              Change email
            </h1>
            <div className="mb-6 flex justify-between items-center">
              <label
                htmlFor="newEmail"
                className="text-base md:text-xl blockfont-medium text-white mr-4">
                <span className="whitespace-nowrap">New Email:</span>
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.newEmail}
                onBlur={formik.handleBlur}
                type="email" id="newEmail"
                className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required />
            </div>
            
            <div className="mt-3 flex justify-center items-center">
              <button
                className="px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl"
                type="submit"
              >
                Change email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
