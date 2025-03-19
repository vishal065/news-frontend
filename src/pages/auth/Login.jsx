import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useLogin } from '../../hooks/useAuth';
import { useFormik } from 'formik';
import { loginState } from '../../validation/authState';
import { loginSchema } from '../../validation/authValidation';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/features/authSlice';
import logo from "../../../public/logo2.webp"
import Cookies from "js-cookie";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate, isPending } = useLogin();
    const dispatch = useDispatch();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: loginState,
        validationSchema: loginSchema,
        onSubmit: (value) => {
            mutate(value, {
                onSuccess: ({ data }) => {
                    return dispatch(authLogin({ role: data?.data.role, email: data?.data.email, accessToken: Cookies.get("accessToken") ?? data?.data.accessToken, refreshToken: Cookies.get("refreshToken") ?? data?.data.refreshToken }))
                }
            });
        }
    });


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-20 w-auto rounded-md"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <div className="rounded-md shadow-md space-y-4">
                        <div className="relative">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiMail size={20} />
                            </span>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />
                            {errors.email && touched.email && <span className='text-sm text-red-700'>{errors.email}</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <FiLock size={20} />
                            </span>
                            <input
                                id="password"
                                name="password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-10 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                            {errors.password && touched.password && <span className='text-sm text-red-700'>{errors.password}</span>}
                            <span
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`group relative flex w-full justify-center cursor-pointer rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${isPending ? "bg-red-600 hover:bg-red-700 focus:ring-red-500" : "bg-red-700 hover:bg-red-600 focus:ring-red-500 font-bold uppercase duration-300"}`}
                        >
                            {isPending ? <span>Please wait...</span> : "LOGIN"}
                        </button>
                    </div>

                    <div className='flex justify-end'>
                        <Link to="/" className="text-blue-700 hover:underline font-semibold" >
                            Back to home
                        </Link>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm text-gray-600">
                    Don't have an account?
                    <Link to="/admin/register" className="px-2 font-bold hover:underline cursor-pointer text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
