import React, { useState } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAdminRegister } from "../../hooks/useAuth"

const Register = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const { mutate, isPending } = useAdminRegister();
    


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
                <form className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <div className="rounded-md shadow-md">
                        <div className='relative'>
                            <label htmlFor="fullName" className="sr-only">Full Name</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiUser size={20} />
                            </span>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="fullName"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 my-6 sm:text-sm"
                                placeholder="Full name"
                            />
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
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 my-6 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiLock size={20} />
                            </span>
                            <input
                                id="password"
                                name="password"
                                type={showPassword?.password ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 my-6 sm:text-sm"
                                placeholder="Password"
                            />
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
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiLock size={20} />
                            </span>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type={showPassword?.confirmPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 my-6 sm:text-sm"
                                placeholder="Confirm Password"
                            />
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
                            className="group relative flex w-full justify-center cursor-pointer rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
