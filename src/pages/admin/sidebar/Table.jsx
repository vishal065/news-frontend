
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Table = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhiK7In157qIWeghzdP8-SEs0UIi-hYo7gA&s",
            title: "React Basics",
            description: "Introduction to React concepts",
            createdAt: new Date().toLocaleString(),
        },
        {
            id: 2,
            image: "https://blogassets.airtel.in/wp-content/uploads/2024/03/ARTICLE-1-4.jpg",
            title: "Tailwind CSS",
            description: "Styling with Tailwind CSS",
            createdAt: new Date().toLocaleString(),
        },
        {
            id: 2,
            image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/10/how-to-turn-off-phone.jpg",
            title: "Tailwind CSS",
            description: "Styling with Tailwind CSS",
            createdAt: new Date().toLocaleString(),
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: "", description: "", image: "" });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const handleSubmit = () => {
        if (formData.title.trim() && formData.description.trim()) {
            setData([
                ...data,
                {
                    id: data.length + 1,
                    image: formData.image || "https://via.placeholder.com/50",
                    title: formData.title,
                    description: formData.description,
                    createdAt: new Date().toLocaleString(),
                },
            ]);
            setFormData({ title: "", description: "", image: "" });
            closeModal();
        }
    };

    return (
        <div className="container mx-auto p-6">
            {/* Add Details Button */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-700">Data Table</h2>
                <button
                    className="px-4 py-2 bg-red-700 font-semibold text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
                    onClick={openModal}
                >
                    + Add Details
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-red-100 text-left text-gray-700 uppercase text-sm">
                            <th className="py-3 px-6 border-b">S.No.</th>
                            <th className="py-3 px-6 border-b">Image</th>
                            <th className="py-3 px-6 border-b">Title</th>
                            <th className="py-3 px-6 border-b">Description</th>
                            <th className="py-3 px-6 border-b">Created Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-b transition duration-300 ease-in-out hover:bg-gray-200"
                            >
                                <td className="py-3 px-6">{index + 1}</td>
                                <td className="py-3 px-6">
                                    <img src={item.image} alt="Item" className="w-14 h-auto rounded-md" />
                                </td>
                                <td className="py-3 px-6 font-semibold">{item.title}</td>
                                <td className="py-3 px-6" dangerouslySetInnerHTML={{ __html: item.description }}></td>
                                <td className="py-3 px-6 text-gray-500">{item.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Details Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Add New Detail</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <ReactQuill
                                theme="snow"
                                value={formData.description}
                                onChange={handleDescriptionChange}
                                className="bg-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter image URL (optional)"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 mr-2"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={handleSubmit}
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

export default Table;
