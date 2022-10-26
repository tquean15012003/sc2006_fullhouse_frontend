import React, { useEffect } from "react";
import avatar from "../../assets/images/avatar.jpg";
// import UpdatePopUp from "../../components/UpdatePopUp";
import HeaderAfterSignIn from "../../components/HeaderAfterSignIn";
import background from '../../assets/images/background.png'
import { useDispatch, useSelector } from "react-redux";
import { getRetirementAgeAction, getRetirementInfoAction } from "../../redux/actions/RetirementInfoActions";

export default function ProfilePage() {

  const dispatch = useDispatch()

  const { navigate } = useSelector(state => state.NavigationReducer)

  const { retirementInfo, retirementAge } = useSelector(state => state.RetirementInfoReducer)

  useEffect(() => {
    dispatch(getRetirementInfoAction())
    dispatch(getRetirementAgeAction())
  }, [dispatch])

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
      <div style={{
      }} className="mt-20 md:mt-0 md:w-screen md:h-screen text-white flex justify-center items-center">
        <div className="grid grid-rows-5 grid-flow-row lg:grid-flow-col gap-4">
          <div
            className="row-span-5 lg:row-span-4 col-span-8 rounded-3xl p-4 flex justify-between"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <div>
              <h2 className="font-bold text-2xl">User Profile</h2>
              <div className="p-3 text-md lg:text-lg">
                <p className="mt-1">Name - {retirementInfo?.name}</p>
                <p className="mt-1">Age - {retirementInfo?.age}</p>
                <p className="mt-1">Age of graduation - {retirementInfo?.ageOfGrad}</p>
                <p className="mt-1">Degree - {retirementInfo?.degree}</p>
                {parseInt(retirementInfo?.salary) !== 0 ? <p className="mt-1">Estimated Salary ($SGD) - {retirementInfo?.salary}</p> : ""}
                {parseInt(retirementInfo?.currentSaving) !== 0 ? <p className="mt-1">Current saving - {retirementInfo?.currentSaving}</p> : ""}
                {parseInt(retirementInfo?.noChild) !== 0 ? <p className="mt-1">No. children - {retirementInfo?.noChild}</p> : ""}
                <p className="mt-1">House price - {retirementInfo?.housePrice}</p>
                <p className="mt-1">Car category - {retirementInfo?.carCat}</p>
                <button
                  onClick={() => {
                    navigate("/updateprofile", { replace: false })
                  }}
                  style={{ background: "#5100FD" }}
                  className="p-2 rounded mt-4 lg:mt-8 duration-500 hover:scale-125"
                  type="text"
                >
                  Update User Profile
                </button>
                {/* <UpdatePopUp /> */}
              </div>
            </div>
            <div className="hidden sm:flex justify-between items-center">
              <img
                className="rounded-full sm:h-40 md:h-60"
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
                  style={{ width: `${parseInt(retirementInfo?.age) / retirementAge * 100}%`, background: "#02FF3A" }}
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
              <div className="p-3 text-md lg:text-lg">
                <p className={`text-center text-bold text-xl lg:text-4xl text-${parseInt(retirementInfo?.investments) < 7 ? "red" : parseInt(retirementInfo?.investments) < 15 ? "orange" : "green"}-400`}>{retirementInfo?.investments}%</p>
              </div>
            </div>
          </div>
          <div
            className="row-span-5 lg:row-span-2 col-span-8 lg:col-span-4 rounded-3xl p-4 flex justify-center items-center"
            style={{ background: "rgba(255, 255, 255, 0.04)" }}
          >
            <div>
              <h2 className="font-bold text-lg">Estimated Retirement Age </h2>
              <p className="text-center text-4xl" style={{ color: "#5ED135" }}>
                {retirementAge}
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
                  style={{ width: `${parseInt(retirementInfo?.age) / retirementAge * 100}%`, background: "#02FF3A" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
