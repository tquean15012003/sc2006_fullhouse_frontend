import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderAfterSignIn from '../../components/HeaderAfterSignIn'
import background from '../../assets/images/background.png'
import { useFormik } from 'formik'
import Select from "react-select";
import { getSalaryListAction } from '../../redux/actions/SalaryActions'

export default function SubmitProfilePage() {

  const { salaryList } = useSelector(state => state.SalaryReducer)

  const dispatch = useDispatch()

  const handleSelect = (e) => {
    let salary = e.gross_monthly_median === "na" ? "3000" : e.gross_monthly_median
    formik.setFieldValue("degree", e.degree)
    formik.setFieldValue("salary", salary)
  };

  useEffect(() => {
    dispatch(getSalaryListAction());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      degree: "",
      salary: "",
      carPrice: "",
      housePrice: "",
      investments: "",
      currentSaving: ""
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="overflow-x-hidden overflow-y-hidden" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundosition: "right",
      fontFamily: "'Gugi', cursive"
      // background: "linear-gradient(238.87deg, #1E1E1E 11.19%, #141929 48.52%, #121A37 67.18%)",
    }}>
      <HeaderAfterSignIn />
      <div className="w-screen h-screen text-white flex justify-center items-center">
        <div className='rounded-3xl p-6 flex' style={{ background: "rgba(255, 255, 255, 0.04)" }}>
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-lg md:text-2xl font-bold text-left mb-6">
              SUBMIT PROFILE
            </h1>
            <div className="flex-column lg:flex justify-between items-center mb-6">
              <div className="lg:mr-6">
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='name'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Name:</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='Name'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (<div className="mt-2 text-red-400">{formik.errors.name}</div>) : null}
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='age'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Age:</span>
                    </label>
                    <input
                      type='number'
                      id='age'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='25'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.age}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.age && formik.errors.age ? (<div className="mt-2 text-red-400">{formik.errors.age}</div>) : null}
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='degree'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Degree (optional):</span>
                    </label>
                    <Select
                      id="degree"
                      className="text-base md:text-xl text-black flex-auto rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                      options={salaryList}
                      getOptionLabel={(option) =>
                        option.degree + " - " + option.university
                      }
                      getOptionValue={(option) => option._id}
                      onChange={handleSelect}
                    />
                    {/* <input
                      type='text'
                      id='degree'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='Computer Science'
                    /> */}
                  </div>
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='salary'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Salary:</span>
                    </label>
                    <input
                      type='number'
                      id='salary'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='0'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.salary}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.salary && formik.errors.salary ? (<div className="mt-2 text-red-400">{formik.errors.salary}</div>) : null}
                </div>
              </div>
              <div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='carPrice'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Car price:</span>
                    </label>
                    <input
                      type='number'
                      id='carPrice'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='400000'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.carPrice}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.carPrice && formik.errors.carPrice ? (<div className="mt-2 text-red-400">{formik.errors.carPrice}</div>) : null}
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='housePrice'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">House price:</span>
                    </label>
                    <input
                      type='number'
                      id='housePrice'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='600000'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.housePrice}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.housePrice && formik.errors.housePrice ? (<div className="mt-2 text-red-400">{formik.errors.housePrice}</div>) : null}
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='investments'
                      className='text-base md:text-xl block font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Investments (%):</span>
                    </label>
                    <input
                      type='number'
                      id='investments'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='5%'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.investments}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.investments && formik.errors.investments ? (<div className="mt-2 text-red-400">{formik.errors.investments}</div>) : null}
                </div>
                <div className='mb-6'>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor='currentSaving'
                      className='text-base md:text-xl font-medium text-white mr-4'
                    >
                      <span className="whitespace-nowrap">Current saving:</span>
                    </label>
                    <input
                      type='number'
                      id='currentSaving'
                      className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      placeholder='0'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.currentSaving}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.currentSaving && formik.errors.currentSaving ? (<div className="mt-2 text-red-400">{formik.errors.currentSaving}</div>) : null}
                </div>
              </div>
            </div>
            <div className='mt-3 flex justify-center items-center'>
              <button
                className='px-6 py-2 text-xl hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
