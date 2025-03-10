import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { createSubCategorySchema } from '../../../validation/adminValidation';
import { useCreateAndUpdateSubCategory } from '../../../hooks/admin/useAdminHooks';
import { useQueryCategory, useQuerySubCategory } from '../../../hooks/useAdminQuery';

const SubCategory = () => {
    const [toggleModal, setToggleModal] = useState({ path: null, state: false });
    const [oldData, setOldData] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { mutate, isPending } = useCreateAndUpdateSubCategory();
    const [storeCategoryId, setStoreCategoryId] = useState(null);
    const { data: category } = useQueryCategory();
    const { data: subCategory } = useQuerySubCategory(pageNumber);
    console.log(subCategory)

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            categoryId: storeCategoryId ?? oldData?.categoryId ?? "",
            name: toggleModal?.path === "create" ? "" : oldData?.name ?? ""
        },
        validationSchema: createSubCategorySchema,
        enableReinitialize: true,
        onSubmit: (value) => {


            mutate({ path: toggleModal.path, id: oldData?._id, ...value })
            resetForm();
            setStoreCategoryId(null)
            setOldData(null)
            setToggleModal({ path: null, state: false })
        },
    });


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Sub Category Table</h2>
            <div className='flex justify-end'>
                <button onClick={() => setToggleModal((prev) => ({ ...prev, path: "create", state: !prev.state }))} className="mb-4 bg-red-700 hover:bg-red-600 cursor-pointer duration-300 text-white px-4 py-2 font-bold rounded">+ Add SubCategory</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 text-left">S.NO.</th>
                            <th className="py-2 px-4 text-left">Sub Category Name</th>
                            <th className="py-2 px-4 text-left">Parent Name</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subCategory?.data?.map((item, index) => (

                            <tr key={index} className="border-b">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{item?.name}</td>
                                <td className="py-2 px-4">{item?.category.name}</td>
                                <td className="py-2 px-4">
                                    <button onClick={() => {
                                        setToggleModal((prev) => ({ ...prev, path: "update", state: !prev.state }))
                                        setOldData(item)

                                    }} className="bg-blue-600 cursor-pointer hover:bg-blue-500 font-bold text-white px-3 py-1 rounded mr-2">Edit</button>
                                    <button onClick={() => mutate({ id: item?._id })} className="bg-red-700 text-white hover:bg-red-600 cursor-pointer font-bold px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {toggleModal?.state && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">{oldData?._id ? 'Update' : 'Add'} SubCategory</h3>
                        <form onSubmit={handleSubmit}>
                            <select
                                name="categoryId"
                                value={oldData?.categoryId ?? values?.categoryId}
                                onChange={(e) => {
                                    const selectedCategoryId = e.target.value;

                                    setStoreCategoryId(selectedCategoryId);
                                    handleChange(e);

                                    const selectedCategory = category?.find(item => item._id === selectedCategoryId);
                                    if (selectedCategory) {
                                        setOldData(prev => ({
                                            ...prev,
                                            categoryId: selectedCategoryId,
                                            category: { name: selectedCategory.name }
                                        }));
                                    }
                                }}
                                onBlur={handleBlur}
                                className="w-full p-2 border rounded mb-2"
                            >
                                {<option value={oldData?.categoryId ?? ""}>{oldData?.category?.name ?? "Select  Category"}</option>}
                                {category?.map((item, index) => (
                                    <option key={index} value={item?._id}>{item?.name}</option>
                                ))}
                            </select>
                            {touched.categoryId && errors.categoryId ? (
                                <div className="text-red-500 text-sm mb-2">{errors.categoryId}</div>
                            ) : null}

                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="SubCategory Name"
                                className="w-full p-2 border rounded mb-2"
                            />
                            {touched.name && errors.name ? (
                                <div className="text-red-500 text-sm mb-2">{errors.name}</div>
                            ) : null}

                            <div className="flex justify-end">
                                <button type="button" onClick={() => (setToggleModal((prev) => ({ ...prev, path: null, state: !prev.state })), setStoreCategoryId(null), setOldData(null))} className="mr-2 bg-gray-500 hover:bg-gray-400 cursor-pointer font-bold text-white px-4 py-2 rounded">Cancel</button>
                                <button type="submit" disabled={isPending} className="bg-blue-600 hover:bg-blue-500 cursor-pointer font-bold text-white px-4 py-2 rounded">{oldData?._id ? isPending ? 'updating...' : 'Update' : isPending ? "Adding" : "Add"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className='flex justify-center items-center pt-4'>
                <button
                    disabled={pageNumber === 1 ? true : false}
                    onClick={() => setPageNumber((prev) => prev - 1)}
                    className='p-3 bg-red-700 hover:bg-red-600 duration-300 text-white rounded-md font-bold cursor-pointer'>Prev
                </button>

                <h3 className='m-4 font-bold'>{pageNumber}</h3>

                <button
                    disabled={pageNumber * 10 < subCategory?.count ? false : true}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                    className='p-3 bg-red-700 hover:bg-red-600 duration-300 text-white rounded-md font-bold cursor-pointer'>Next
                </button>
            </div>
        </div >
    );
};

export default SubCategory;
