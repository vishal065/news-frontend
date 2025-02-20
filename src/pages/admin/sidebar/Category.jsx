import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useCreateCategory } from '../../../hooks/admin/useCategory';
import { createCategoryState } from '../../../validation/adminState';
import { createCategorySchema } from '../../../validation/adminValidation';
import { useQueryCategory } from '../../../hooks/useAdminQuery';


const Category = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { mutate, isPending } = useCreateCategory();
    const { data } = useQueryCategory();
    console.log(data)

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: createCategoryState,
        validationSchema: createCategorySchema,
        onSubmit: (value) => {
            mutate(value)
            resetForm();
            toggleModal();
        },
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        resetForm();
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Category List</h2>
            <div className='flex justify-end'>
                <button
                    className="mb-4 bg-red-600 font-bold text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={toggleModal}
                >
                    Add Category
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 text-left">S.No.</th>
                            <th className="py-2 px-4 text-left">Category Name</th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{item?.name}</td>
                                <td className="py-2 px-4 text-center">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-3">Add New Category</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full border p-2 mb-2"
                                placeholder="Enter category name"
                            />
                            {errors.name && touched.name && (
                                <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                            )}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    disabled={isPending}
                                >
                                    {isPending ? 'Adding...' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
