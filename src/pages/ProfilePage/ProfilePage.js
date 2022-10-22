import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import UpdatePopUp from "../../components/UpdatePopUp";
import HeaderAfterSignIn from "../../components/HeaderAfterSignIn";
import background from '../../assets/images/background.png'

export default function ProfilePage() {
  return (

    <div className="overflow-x-hidden overflow-y-hidden" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundosition: "right",
      fontFamily: "'Gugi', cursive",
      // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
    }}>
      <HeaderAfterSignIn />
      <div className="mt-20 md:mt-0 md:w-screen md:h-screen text-white flex justify-center items-center">
        <div className="grid grid-rows-5 grid-flow-row lg:grid-flow-col gap-4">
          <div
            className="row-span-5 lg:row-span-4 col-span-8 rounded-3xl p-4 flex justify-between"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <div>
              <h2 className="font-bold text-2xl">User Profile</h2>
              <div className="p-3 text-md lg:text-xl">
                <p className="mt-2">Name - Adrian Ang</p>
                <p className="mt-2">D.o.B - 07/12/1997</p>
                <p className="mt-2">Degree - Computer Science (NTU)</p>
                <p className="mt-2">Estimated Salary ($SGD) - 4500</p>
                <p className="mt-2">Car Price ($SGD) - 500k</p>
                <p className="mt-2">House Price ($SGD) - 650k</p>
                {/* <button
                  style={{ background: "#5100FD" }}
                  className="p-2 rounded mt-4 lg:mt-8"
                  type="text"
                >
                  Update User Profile
                </button> */}
                <UpdatePopUp />
              </div>
            </div>
            <div className="hidden sm:flex justify-between items-center">
              <img
                className="rounded-full sm:h-40 md:h-80"
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
          <div className="hidden lg:flex row-span-1 col-span-12 rounded-3xl p-4 justify-center items-center">
            <div className="w-full h-full">
              <h2 className="text-center">Retirement Track</h2>
              <div
                className="w-full rounded-full h-2.5"
                style={{ background: "#D9D9D9" }}
              >
                <div
                  className="h-2.5 rounded-full"
                  style={{ width: "55%", background: "#02FF3A" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="row-span-5 lg:row-span-2 col-span-8 lg:col-span-4 rounded-3xl p-4 flex justify-center items-center"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <div>
              <h2 className="font-bold text-xl">Investment</h2>
              <div className="p-3 text-md lg:text-xl">
                <div className="mt-3 flex justify-between items-center">
                  <p className="mr-2 lg:mr-4">S&P 500</p>
                  <span
                    className="px-5 py-1 rounded-2xl text-lg"
                    style={{ background: "#fff", color: "#15C83C" }}
                  >
                    5%
                  </span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="mr-2 lg:mr-4">Crypto</p>
                  <span
                    className="px-5 py-1 rounded-2xl text-lg"
                    style={{ background: "#fff", color: "#15C83C" }}
                  >
                    5%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row-span-5 lg:row-span-2 col-span-8 lg:col-span-4 rounded-3xl p-4 flex justify-center items-center"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <div>
              <h2 className="font-bold text-xl">Estimated Retirement Age </h2>
              <p className="text-center text-4xl" style={{ color: "#5ED135" }}>
                57
              </p>
            </div>
          </div>
          <div className="flex lg:hidden row-span-1 col-span-8 rounded-3xl p-4 justify-center items-center">
            <div className="w-full h-full">
              <h2 className="text-center">Retirement Track</h2>
              <div
                className="w-full rounded-full h-2.5"
                style={{ background: "#D9D9D9" }}
              >
                <div
                  className="h-2.5 rounded-full"
                  style={{ width: "55%", background: "#02FF3A" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
