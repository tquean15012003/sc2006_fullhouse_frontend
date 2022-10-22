import React, { Fragment, useState } from "react";
import dropdown from "../../assets/images/dropdown.svg";
import { Menu, Transition } from "@headlessui/react";
import HeaderBeforeSignIn from "../../components/HeaderBeforeSignIn";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ResetPasswordPage() {

  const [sent, setSent] = useState(false);

  return (
    <div
      className="overflow-hidden "
      style={{
        background:
          "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
      }}
    >
      <HeaderBeforeSignIn/>
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div
          className="rounded-3xl p-6"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          <form>
            <h1 className="text-lg md:text-2xl font-bold text-center mb-4">
              RESET PASSWORD
            </h1>
            <div class="mb-6 flex justify-between items-center">
              <label
                for="username"
                class="text-base md:text-xl block mb-2 font-medium text-white mr-4"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                class="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="email@email.com"
              />
              <button
                className="mx-10 px-10 py-1 bg-gray-500 hover:bg-gray-200 hover:text-black rounded-2xl"
                type="text"
                onClick={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                Send OTP
              </button>
            </div>
          </form>
          <div>
            {sent ? <p className=" text-teal-500">OTP Sent to email!</p> : null}
            <br></br>
          </div>
          <form>
            <div class="mb-6 flex justify-between items-center">
              <label
                for="OTP"
                class="text-base md:text-xl block mb-2 font-medium text-white mr-4"
              >
                OTP:
              </label>
              <input
                type="OTP"
                id="OTP"
                class="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="123456"
                required
              />
            </div>
            <div class="mb-6 flex justify-between items-center">
              <label
                for="OTP"
                class="text-base md:text-xl block mb-2 font-medium text-white mr-4"
              >
                New Password:
              </label>
              <input
                type="password"
                id="password"
                class="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required
              />
            </div>
            <div className="mt-3 flex justify-center items-center">
              <button
                className="px-6 py-2 bg-gray-500 hover:bg-gray-200 hover:text-black rounded-2xl"
                type="text"
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
