import React, { useState } from 'react';
import { useFormik } from 'formik';
import { createPublisherSchema } from '../../../validation/adminValidation';
import { useCreateAndUpdatePublisher } from '../../../hooks/admin/useAdminHooks';
import { useQueryPublisher } from '../../../hooks/useAdminQuery';

const Publisher = () => {

    const [toggleModal, setToggleModal] = useState({ path: null, state: false });
    const [prevData, setPrevData] = useState(null);
    const { mutate, isPending } = useCreateAndUpdatePublisher();
    const { data } = useQueryPublisher();
    console.log(data)


    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: { name: toggleModal?.path === "create" ? "" : prevData?.name },
        validationSchema: createPublisherSchema,
        enableReinitialize: true,
        onSubmit: (value) => {
            mutate({ ...value, path: toggleModal?.path, id: prevData?._id });
            resetForm();
            setToggleModal({ path: null, state: false });
        },
    });

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Publisher List</h2>
            <div className='flex justify-end'>
                <button
                    className="mb-4 bg-red-600 font-bold text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => setToggleModal((prev) => ({ ...prev, path: "create", state: !prev.state }))}
                >
                    + Add Publisher
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 text-left">S.No.</th>
                            <th className="py-2 px-4 text-left">Publisher Name</th>
                            <th className="py-2 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data?.data.map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4 text-center">
                                    <button onClick={() => {
                                        setToggleModal((prev) => ({ ...prev, path: "update", state: !prev?.state }))
                                        setPrevData(item)
                                    }} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                                    <button onClick={() => mutate({ id: item?._id })} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {toggleModal?.state && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-5 rounded shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-3">Add New Publisher</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full border p-2 mb-2"
                                placeholder="Enter Publisher name"
                            />
                            {touched.name && errors.name ? (
                                <span className="text-red-500 text-sm mb-2">{errors.name}</span>
                            ) : null}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
                                    onClick={() => setToggleModal((prev) => ({ ...prev, path: null, state: !prev.state }))}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    {isPending ? "Adding..." : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Publisher;
