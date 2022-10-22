import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalaryListAction } from "../redux/actions/SalaryActions";

export default function UpdatePopUp() {

  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useDispatch()

  const {salaryList} = useSelector(state=>state.SalaryReducer)

  console.log(salaryList)

  useEffect(() => {
    dispatch(getSalaryListAction())
  }, [dispatch])

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Profile
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-900 opacity-80 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div
                    className=""
                    style={{
                      background:
                        "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
                    }}
                  >
                    <div className=" text-white flex justify-center items-center">
                      <div
                        className="rounded-3xl p-6"
                        style={{ background: "rgba(255, 255, 255, 0.04)" }}
                      >
                        <form>
                          <h1 className="text-lg md:text-2xl font-bold text-center mb-4">
                            Input Parameters
                          </h1>

                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="education"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Highest Education Type:
                            </label>
                            <div class="relative">
                              <select
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-10 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                              >
                                <option>PSLE</option>
                                <option>N Level</option>
                                <option>O Level</option>
                                <option>Nitec</option>
                                <option>Higher Nitec</option>
                                <option>A Level</option>
                                <option>Diploma</option>
                                <option>Degree</option>
                                <option>Masters</option>
                                <option>PhD</option>
                              </select>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                  class="fill-current h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="password"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Graduation Age:
                            </label>
                            <input
                              type="number"
                              id="gradage"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="24"
                              required
                            />
                          </div>
                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="salary"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Current Salary:
                            </label>
                            <input
                              type="number"
                              id="salary"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="1000"
                              required
                            />
                          </div>
                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="salaryinc"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Average Salary Increment:
                            </label>
                            <input
                              type="number"
                              id="salaryinc"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="22"
                              required
                            />
                          </div>
                          {/* <div className="mb-6 flex justify-between items-center">
                            <input
                              type="checkbox"
                              name="fiance"
                              value="fiance"
                            />
                            <label
                              for="fiance"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Sharing Finances with Fiance
                            </label>
                          </div> */}
                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="age"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Current Age:
                            </label>
                            <input
                              type="number"
                              id="age"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="22"
                              required
                            />
                          </div>
                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="password"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              Total Car Price:
                            </label>
                            <input
                              type="number"
                              id="age"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="0"
                              required
                            />
                          </div>

                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="password"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              No of Children:
                            </label>
                            <input
                              type="number"
                              id="children"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="1"
                              required
                            />
                          </div>

                          <div className="mb-6 flex justify-between items-center">
                            <label
                              for="password"
                              className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                            >
                              House Price:
                            </label>
                            <input
                              type="number"
                              id="age"
                              className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="100000"
                              required
                            />
                          </div>

                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
