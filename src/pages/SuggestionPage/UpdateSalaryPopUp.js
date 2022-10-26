import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSalaryAction } from "../../redux/actions/RetirementInfoActions";

export default function UpdateSalaryPopUp() {
  const [showModal, setShowModal] = React.useState(false);

  const { retirementInfo } = useSelector(state => state.RetirementInfoReducer)

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      salary: retirementInfo.salary
    },
    onSubmit: (values) => {
      dispatch(updateSalaryAction(values, setShowModal))
    }
  })

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='px-6 py-2 hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded'
        type='button'
      >
        Update Salary
      </button>
      {showModal ? (
        <>
          <div className="w-screen bg-black/60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-neutral-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl md:text-3xl font-semibold">Update Salary</h3>
                  <button
                    className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" pt-6 px-3 md:px-6 flex-auto">
                  <div className="rounded-3xl px-3 md:px-6">
                    <form>
                      <div className="mb-6 flex justify-between items-center">
                        <label
                          htmlFor="salary"
                          className="text-base md:text-xl block mb-2 font-medium text-white mr-4"
                        >
                          <span className="whitespace-nowrap">Salary:</span>
                        </label>
                        <input
                          type="number"
                          id="salary"
                          className="text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                          placeholder="5000"
                          required
                          min={0}
                          value={formik.values.salary}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200">
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
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch(updateSalaryAction(formik.values.salary, setShowModal))
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
