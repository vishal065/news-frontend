import React from 'react';
import { Link } from 'react-router-dom';
import { useVerifyOTP } from "../../hooks/useAuth"
import { useFormik } from 'formik';
import { verifyOTPState } from '../../validation/authState';
import { verifyOTPSchema } from '../../validation/authValidation';
import { IoMdBarcode } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';

const VerifyOtp = () => {
    const { mutate, isPending } = useVerifyOTP();
    

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: verifyOTPState,
        validationSchema: verifyOTPSchema,
        onSubmit: (value) => {
            mutate(value);
        }
    })



    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Verify OTP
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <div className="rounded-md shadow-md">

                        <div className='relative mb-4'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiMail size={20} />
                            </span>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                disabled
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="email"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />

                        </div>

                        <div className="relative">
                            <label htmlFor="code" className="sr-only">OTP</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <IoMdBarcode size={20} />
                            </span>
                            <input
                                id="code"
                                name="code"
                                type="number"
                                value={values?.code}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="code"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter otp"
                            />
                            <div className="h-0 mb-10">
                                {errors?.code && touched?.code && (
                                    <span className="text-sm text-red-700">{errors.code}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`group relative flex w-full justify-center cursor-pointer rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isPending ? "bg-red-600 hover:bg-red-700 focus:ring-indigo-500" : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"}`}
                        >
                            Verify
                        </button>
                    </div>
                    <div className='flex justify-end'>
                        <Link to="/" className="text-blue-700 hover:underline font-semibold" >
                            Back to home
                        </Link>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default VerifyOtp;
