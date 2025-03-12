import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useCreateAndUpdateCategory } from '../../../hooks/admin/useAdminHooks';
import { createCategorySchema } from '../../../validation/adminValidation';
import { useQueryCategory } from '../../../hooks/useAdminQuery';
import Loader from "../../../components/Loader";


const Category = () => {
    const [toggleModal, setToggleModal] = useState({ path: null, state: false });
    const [oldData, setOldData] = useState(null)
    const { mutate, isPending } = useCreateAndUpdateCategory();
    const { data, isLoading } = useQueryCategory();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: { name: toggleModal?.path === "create" ? "" : oldData?.name ?? "" },
        validationSchema: createCategorySchema,
        enableReinitialize: true,
        onSubmit: (value) => {
            mutate({ path: toggleModal.path, id: oldData?._id, ...value });
            resetForm();
            setToggleModal({ path: null, state: false })
        },
    });


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Category List</h2>
            <div className='flex justify-end'>
                <button
                    className="mb-4 bg-red-700 font-bold text-white cursor-pointer px-4 py-2 rounded hover:bg-red-600 duration-300"
                    onClick={() => setToggleModal((prev) => ({ ...prev, path: "create", state: !prev.state }))}
                >
                    Add Category
                </button>
            </div>
            <div className="overflow-x-auto ">
                {isLoading ? <Loader className="w-full h-[70vh]" /> : <>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="py-2 px-4 text-left">S.No.</th>
                                <th className="py-2 px-4 text-left">Category Name</th>
                                <th className="py-2 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data && data?.map((item, index) => (
                                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{item?.name}</td>
                                    <td className="py-2 px-4 text-center">
                                        <button onClick={() => {
                                            setToggleModal((prev) => ({ ...prev, path: "update", state: !prev.state }))
                                            setOldData(item)
                                        }} className="bg-blue-600 font-bold text-white px-3 cursor-pointer py-1 rounded mr-2 hover:bg-blue-500">Edit</button>
                                        <button onClick={() => mutate({ id: item?._id })} className="bg-red-700 text-white px-3 py-1 cursor-pointer font-bold rounded hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>}

            </div>

            {toggleModal?.state && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-3">{toggleModal?.path == "create" ? "Create" : "Update"} Category </h3>

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
                            {errors?.name && touched?.name && (
                                <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                            )}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-gray-400 cursor-pointer text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
                                    onClick={() => setToggleModal((prev) => ({ ...prev, path: null, state: !prev.state }))}

                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
                                    disabled={isPending}
                                >
                                    {!isPending ? toggleModal?.path === "create" ? 'Create' : 'Update' : "Please wait..."}
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
