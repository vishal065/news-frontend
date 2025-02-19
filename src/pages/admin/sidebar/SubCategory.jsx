import React, { useState } from 'react';

const SubCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subCategories, setSubCategories] = useState([
        { id: 1, name: 'Laptops', parent: 'Electronics' },
        { id: 2, name: 'Smartphones', parent: 'Electronics' },
        { id: 3, name: 'T-Shirts', parent: 'Clothing' },
        { id: 4, name: 'Sneakers', parent: 'Footwear' },
    ]);
    const [newSubCategory, setNewSubCategory] = useState({ name: '', parent: '' });
    const parentCategories = ['Electronics', 'Clothing', 'Footwear'];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        setNewSubCategory({ ...newSubCategory, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (newSubCategory.name && newSubCategory.parent) {
            setSubCategories([...subCategories, { id: subCategories.length + 1, ...newSubCategory }]);
            setNewSubCategory({ name: '', parent: '' });
            closeModal();
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-semibold mb-4">SubCategory Table</h2>
            <div className='flex justify-end'>
                <button onClick={openModal} className="mb-4 bg-red-600 hover:bg-red-700 cursor-pointer duration-300 text-white px-4 py-2 rounded">+ Add SubCategory</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 text-left">#</th>
                            <th className="py-2 px-4 text-left">SubCategory Name</th>
                            <th className="py-2 px-4 text-left">Parent Category</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subCategories.map((subCategory, index) => (
                            <tr key={subCategory.id} className="border-b">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{subCategory.name}</td>
                                <td className="py-2 px-4">{subCategory.parent}</td>
                                <td className="py-2 px-4">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Add SubCategory</h3>
                        <div>
                            <select
                                name="parent"
                                value={newSubCategory.parent}
                                onChange={handleChange}
                                className="w-full p-2 border rounded mb-4"
                            >
                                <option value="">Select Parent Category</option>
                                {parentCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                name="name"
                                value={newSubCategory.name}
                                onChange={handleChange}
                                placeholder="SubCategory Name"
                                className="w-full p-2 border rounded mb-2"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button onClick={closeModal} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubCategory;
