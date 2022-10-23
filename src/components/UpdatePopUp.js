import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalaryListAction } from "../redux/actions/SalaryActions";
import Select from "react-select";

export default function UpdatePopUp() {
  const [showModal, setShowModal] = React.useState(false);

  const [selectValue, setValue] = React.useState(100);

  const handleSelect = (e) => {
    setValue(e.gross_monthly_median);
  };

  const dispatch = useDispatch();

  const { salaryList } = useSelector((state) => state.SalaryReducer);

  useEffect(() => {
    dispatch(getSalaryListAction());
  }, [dispatch]);

  return (
    <>
      <button
        style={{ backgroundColor: "#5100FD" }}
        className="mt-4 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                              Degree Type(If applicable):
                            </label>
                            <Select
                              className="text-black flex-auto"
                              options={salaryList}
                              getOptionLabel={(option) =>
                                option.degree + "-" + option.school
                              }
                              getOptionValue={(option) => option._id}
                              onChange={handleSelect}
                            />
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
                              placeholder={selectValue}
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
