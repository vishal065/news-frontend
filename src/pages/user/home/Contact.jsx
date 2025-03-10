import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Name must be at least 3 characters")
                .required("Full name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            message: Yup.string()
                .min(10, "Message must be at least 10 characters")
                .required("Message is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            alert("Message Sent!");
            resetForm();
        },
    });

    return (
        <div className="w-full overflow-hidden px-4 sm:px-10 py-12 flex justify-center mt-20">
            <div className="max-w-screen w-full">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[70%]">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
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
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    rows="5"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                ></textarea>
                                {formik.touched.message && formik.errors.message ? (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                                ) : null}
                            </div>
                            <div className="mb-6 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 cursor-pointer text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full lg:w-[30%]">
                        <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                        <p className="mb-2">123 News Channel St., Suite 400</p>
                        <p className="mb-2">City, State, ZIP Code</p>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                        <p className="mb-2">Email: contact@newschannel.com</p>
                        <p className="mb-4">Follow us on social media:</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800 transition-all">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
