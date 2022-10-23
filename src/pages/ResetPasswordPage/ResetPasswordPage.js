import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import HeaderBeforeSignIn from "../../components/HeaderBeforeSignIn";
import * as Yup from 'yup';
import { resetPasswordAction, sendVerificationCodeAction } from "../../redux/actions/UserAction";
import background from '../../assets/images/background.png'

export default function ResetPasswordPage() {

  const [sent, setSent] = useState(false);

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      verificationCode: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password must contain at least 8 characters!')
        .max(50, 'Password must contain at most 50 characters!!')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/, "Password must be a mix of uppercase/lowercase letters, numbers and special characters"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      email: Yup.string()
        .email('Invalid email!'),
    }),
    onSubmit: (values) => {
      dispatch(resetPasswordAction(values))
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
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div
          className="rounded-3xl p-6"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-4">
              RESET PASSWORD
            </h1>
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="username"
                  className="text-base md:text-xl block font-medium text-white mr-4"
                >
                  <span className="whitespace-nowrap">Email:</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="email@email.com"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <p
                  className="cursor-pointer ml-10 px-10 py-1 bg-gray-500 hover:bg-gray-200 hover:text-black duration-500 hover:scale-110 rounded-2xl"
                  onClick={(e) => {
                    dispatch(sendVerificationCodeAction({ "email": formik.values.email }, setSent))
                  }}
                >
                  Send OTP
                </p>
              </div>
              {formik.touched.email && formik.errors.email ? (<div className="mt-2 text-red-400">{formik.errors.email}</div>) : null}
            </div>
            <div className="mb-6 flex justify-between items-center">
              {sent ? <p className=" text-teal-500">OTP Sent to email!</p> : null}
            </div>
            <div className="mb-6 flex justify-between items-center">
              <label
                htmlFor="verificationCode"
                className="text-base md:text-xl block font-medium text-white mr-4"
              >
                <span className="whitespace-nowrap">OTP:</span>
              </label>
              <input
                type="text"
                id="verificationCode"
                className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="123456"
                required
                onChange={formik.handleChange}
                value={formik.values.verificationCode}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-base md:text-xl block font-medium text-white mr-4"
                >
                  <span className="whitespace-nowrap">New password:</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="***********"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (<div className="mt-2 text-red-400">{formik.errors.password}</div>) : null}
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="passwordConfirmation"
                  className="text-base md:text-xl block font-medium text-white mr-4"
                >
                  <span className="whitespace-nowrap">Confirm password:</span>
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="***********"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirmation}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<div className="mt-2 text-red-400">{formik.errors.passwordConfirmation}</div>) : null}
            </div>
            <div className="mt-3 flex justify-center items-center">
              <button
                className="px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
