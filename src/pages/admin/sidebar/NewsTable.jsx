import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsTable = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([
        {
            id: 1,
            image: "https://i.pinimg.com/736x/94/5b/c5/945bc54bba2c6cea893e098007ce2886.jpg",
            title: "Sample Title 1",
            description: "This is a sample description.",
            categoryId: 101,
            publisherId: 201,
        },
        {
            id: 2,
            image: "https://www.agoda.com/wp-content/uploads/2023/02/Goa-overview-things-to-do-in-goa.jpg",
            title: "Sample Title 2",
            description: "Another sample description.",
            categoryId: 102,
            publisherId: 202,
        },
        {
            id: 3,
            image: "https://www.india.com/wp-content/uploads/2024/06/Calangute-Beach-1.jpg",
            title: "Sample Title 3",
            description: "Yet another sample description.",
            categoryId: 103,
            publisherId: 203,
        },
    ]);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };


    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-xl font-bold mb-6">News Table List</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-2 text-left">S.No.</th>
                        <th className="px-4 py-2 text-left">Image</th>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Description</th>
                        <th className="px-4 py-2 text-left">Category ID</th>
                        <th className="px-4 py-2 text-left">Publisher ID</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">
                                <img src={item.image} alt="image" className="w-16 h-16 object-cover rounded" />
                            </td>
                            <td className="px-4 py-2">{item.title}</td>
                            <td className="px-4 py-2 truncate max-w-xs">{item.description}</td>
                            <td className="px-4 py-2">{item.categoryId}</td>
                            <td className="px-4 py-2">{item.publisherId}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsTable;
