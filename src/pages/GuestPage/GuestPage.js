import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import background from '../../assets/images/background.png'
import { useFormik } from 'formik'
import Select from "react-select";
import { carCatList } from '../../utils/DemoObject'
import HeaderBeforeSignIn from '../../components/HeaderBeforeSignIn'
import { getGuestRetirementAgeAction } from '../../redux/actions/GuestAction';


export default function GuestPage() {

    const dispatch = useDispatch()

    const { retirementAge } = useSelector(state => state.GuestRetirementInfoReducer)

    const [ show, setShow] = useState(false)

    const formik = useFormik({
        initialValues: {
            age: "",
            ageOfGrad: "",
            noChild: "",
            currentSaving: "",
            salary: "",
            carCat: "",
            housePrice: "",
            investments: ""
        },
        onSubmit: (values) => {
            dispatch(getGuestRetirementAgeAction(values, setShow))
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
            <HeaderBeforeSignIn />
            <div style={{
                // fontFamily: "'Fredoka One', cursive"
            }} className="w-screen h-screen text-white flex justify-center items-center">
                <div className='rounded-3xl p-6 flex' style={{ background: "rgba(255, 255, 255, 0.04)" }}>
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className="text-lg md:text-2xl font-bold text-left mb-6">
                            Calculate retirement age
                        </h1>
                        <div className="flex-column lg:flex justify-between items-center">
                            <div className="lg:mr-6">
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
                                            placeholder='20'
                                            required
                                            onChange={formik.handleChange}
                                            value={formik.values.age}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                        />
                                    </div>
                                    {formik.touched.age && formik.errors.age ? (<div className="mt-2 text-red-400">{formik.errors.age}</div>) : null}
                                </div>
                                <div className='mb-6'>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor='ageOfGrad'
                                            className='text-base md:text-xl font-medium text-white mr-4'
                                        >
                                            <span className="whitespace-nowrap">Age of graduation:</span>
                                        </label>
                                        <input
                                            type='number'
                                            id='ageOfGrad'
                                            className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                            placeholder='24'
                                            required
                                            onChange={formik.handleChange}
                                            value={formik.values.ageOfGrad}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                        />
                                    </div>
                                    {formik.touched.ageOfGrad && formik.errors.ageOfGrad ? (<div className="mt-2 text-red-400">{formik.errors.ageOfGrad}</div>) : null}
                                </div>
                                <div className='mb-6'>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor='noChild'
                                            className='text-base md:text-xl font-medium text-white mr-4'
                                        >
                                            <span className="whitespace-nowrap">No. of children:</span>
                                        </label>
                                        <input
                                            type='number'
                                            id='noChild'
                                            className='text-base md:text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                            placeholder='0'
                                            required
                                            onChange={formik.handleChange}
                                            value={formik.values.noChild}
                                            onBlur={formik.handleBlur}
                                            min={0}
                                        />
                                    </div>
                                    {formik.touched.noChild && formik.errors.noChild ? (<div className="mt-2 text-red-400">{formik.errors.noChild}</div>) : null}
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
                                            min={0}
                                        />
                                    </div>
                                    {formik.touched.currentSaving && formik.errors.currentSaving ? (<div className="mt-2 text-red-400">{formik.errors.currentSaving}</div>) : null}
                                </div>

                            </div>
                            <div>

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
                                <div className='mb-6'>
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor='catCat'
                                            className='text-base md:text-xl block font-medium text-white mr-4'
                                        >
                                            <span className="whitespace-nowrap">Car category:</span>
                                        </label>
                                        <Select
                                            id="carCat"
                                            className="text-base md:text-xl text-black flex-auto rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                                            options={carCatList}
                                            getOptionLabel={(option) =>
                                                option.value
                                            }
                                            getOptionValue={(option) => option.id}
                                            onChange={(e) => {
                                                formik.setFieldValue("carCat", e.value)
                                            }}
                                        />
                                    </div>
                                    {formik.touched.catCat && formik.errors.catCat ? (<div className="mt-2 text-red-400">{formik.errors.catCat}</div>) : null}
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
                                            min={0}
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
                                            placeholder='5'
                                            required
                                            onChange={formik.handleChange}
                                            value={formik.values.investments}
                                            onBlur={formik.handleBlur}
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    {formik.touched.investments && formik.errors.investments ? (<div className="mt-2 text-red-400">{formik.errors.investments}</div>) : null}
                                </div>
                            </div>
                        </div>
                        {show ? <div className='mb-6 flex justify-center items-center'>
                            <p className="text-base md:text-lg">Your expected retirement age: <span className="text-xl md:text-3xl" style={{ color: "#5ED135" }}>{retirementAge}</span></p>
                        </div> : null}
                        <div className='mt-3 flex justify-center items-center'>
                            <button
                                className='px-6 py-2 text-xl hover:bg-purple-500 bg-purple-800 duration-500 hover:scale-110 hover:text-black rounded-2xl'
                                type='submit'
                            >
                                Calculate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}