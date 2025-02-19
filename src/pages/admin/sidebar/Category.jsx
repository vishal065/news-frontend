import React, { useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Crime' },
        { id: 2, name: 'Law' },
        { id: 3, name: 'Justice' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
            setNewCategory('');
            toggleModal();
        }
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
                        {categories.map((category) => (
                            <tr key={category.id} className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="py-2 px-4">{category.id}</td>
                                <td className="py-2 px-4">{category.name}</td>
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
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="w-full border p-2 mb-3"
                            placeholder="Enter category name"
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={handleAddCategory}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
