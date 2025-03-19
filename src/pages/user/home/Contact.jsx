import { useFormik } from "formik";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contactState } from "../../../validation/contactState";
import { contactSchema } from "../../../validation/contactValidation";
import { useCreateContact } from "../../../hooks/user/useContactHooks";

const Contact = () => {
    const { mutate, isPending } = useCreateContact();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: contactState,
        validationSchema: contactSchema,
        onSubmit: (value) => {
            mutate({ value })
            resetForm();
        },
    })


    return (
        <div className="w-full overflow-hidden px-4 sm:px-10 py-12 flex justify-center mt-20">
            <div className="max-w-screen w-full">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[70%]">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                />
                                {touched.fullName && errors.fullName ? (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                />
                                {touched.email && errors.email ? (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (inputValue.length <= 10) handleChange(e);

                                    }}
                                    onBlur={handleBlur}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                />
                                {touched.phone && errors.phone ? (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="5"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                ></textarea>
                                {touched.message && errors.message ? (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                ) : null}
                            </div>
                            <div className="mb-6 flex justify-center">
                                <button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-3 bg-red-600 cursor-pointer text-white font-semibold rounded-md hover:bg-red-700 transition-all"
                                >
                                    {isPending ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[30%]">
                        <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                        <p className="mb-2">BK-1/54, SHALIMAR BAGH,</p>
                        <p className="mb-2">North West Delhi,</p>
                        <p className="mb-2">DL, 110088</p>
                        <div className="flex flex-col">
                            <Link to="mailto:contact@newschannel.com" className="mb-2"><span className="font-bold">Email:</span> contact@newschannel.com</Link>
                            <Link to="tel:011-42688888" className="mb-2"><span className="font-bold">Phone:</span>  011-42688888</Link>
                        </div>
                        <p className="mb-4">Follow us on social media:</p>
                        <div className="flex space-x-6">
                            <Link to="https://www.facebook.com/paras.guruji" target="_blank" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaFacebook />
                            </Link>
                            <Link to="https://x.com/paras_parivaar" target="_blank" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaTwitter />
                            </Link>
                            <Link to="https://www.instagram.com/parasparivaar" target="_blank" className="text-red-600 text-3xl hover:text-red-800 transition-all">
                                <FaInstagram />
                            </Link>
                            <Link to="https://www.youtube.com/channel/UC9ZyUO13YKzVQMCTG1gEYlg" target="_blank" className="text-red-600 text-3xl hover:text-red-800 transition-all">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
