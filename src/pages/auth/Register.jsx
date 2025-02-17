import React, { useState } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { IoMdBarcode } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminRegister } from "../../hooks/useAuth"
import { useFormik } from 'formik';
import { adminRegisterState } from '../../validation/authState';
import { adminRegisterSchema } from '../../validation/authValidation';
import Loader from '../../constant/Loader';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const { mutate, isPending } = useAdminRegister();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: adminRegisterState,
        validationSchema: adminRegisterSchema,
        onSubmit: (value) => {
            mutate(value, {
                onSuccess: (data) => {
                    if (data && data.status === 200) {
                        navigate("/verify-account", { state: { email: data?.data.data.email } });
                    }
                }
            });
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
                        Sign up
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <div className="rounded-md shadow-md">

                        <div className="relative">
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiUser size={20} />
                            </span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={values?.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="fullName"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Full name"
                            />
                            {/* This div reserves space for the error message */}
                            <div className="h-0 mb-8">
                                {errors?.name && touched?.name && (
                                    <span className="text-sm text-red-700">{errors.name}</span>
                                )}
                            </div>
                        </div>



                        <div className='relative'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiMail size={20} />
                            </span>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="email"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />
                            <div className="h-0 mb-8">
                                {errors?.email && touched?.email && <span className='text-sm text-red-700'>{errors.email}</span>}
                            </div>
                        </div>
                        <div className='relative'>
                            <label htmlFor="code" className="sr-only">Code</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <IoMdBarcode size={20} />
                            </span>
                            <input
                                id="code"
                                name="code"
                                type="text"
                                value={values?.code}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="code"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter code"
                            />
                            <div className="h-0 mb-8">
                                {errors?.code && touched?.code && <span className='text-sm text-red-700'>{errors.code}</span>}
                            </div>
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiLock size={20} />
                            </span>
                            <input
                                id="password"
                                name="password"
                                value={values?.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={showPassword?.password ? "text" : "password"}
                                autoComplete="current-password"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                            <div className="h-0 mb-8">
                                {errors?.password && touched?.password && <span className='text-sm text-red-700'>{errors?.password}</span>}
                            </div>
                            <span
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword((prev) =>
                                    ({ ...prev, password: !prev.password })
                                )}
                            >
                                {showPassword?.password ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </span>
                        </div>

                        <div className='relative'>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <span className="absolute inset-y-0 left-3 flex justify-center items-center text-gray-500">
                                <FiLock size={20} />
                            </span>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                value={values?.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={showPassword?.confirmPassword ? "text" : "password"}
                                autoComplete="current-password"
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Confirm Password"
                            />
                            <div className="h-0 mb-12">
                                {errors?.confirmPassword && touched?.confirmPassword && <span className='text-sm text-red-700'>{errors.confirmPassword}</span>}
                            </div>
                            <span
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }))}
                            >
                                {showPassword?.confirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </span>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`group relative flex w-full justify-center cursor-pointer rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isPending ? <Loader /> : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"}`}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className='flex justify-end'>
                        <Link to="/" className="text-blue-700 hover:underline font-semibold" >
                            Back to home
                        </Link>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm text-gray-600">
                    Don't have an account ?
                    <Link to={"/login"} className="px-2 hover:underline font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div >
        </div >
    );
};

export default Register;
