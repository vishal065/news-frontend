import React from "react";
import { useNavigate } from "react-router-dom";
import { useQueryNews } from "../../../hooks/useAdminQuery";
import { useCreateAndUpdateNews } from "../../../hooks/admin/useAdminHooks";
import toast from "react-hot-toast";

const NewsTable = () => {
    const navigate = useNavigate();
    const { mutate, isPending } = useCreateAndUpdateNews();
    const { data: news } = useQueryNews();
    console.log(news)

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };


    return (
        <div className="overflow-x-auto p-2">
            <h2 className="text-xl font-bold mb-6">News Table List</h2>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-100 border-b uppercase">
                        <th className="px-4 py-2 text-left">S.No.</th>
                        <th className="px-4 py-2 text-left">Image</th>
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Slug</th>
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Sub Category</th>
                        <th className="px-4 py-2 text-left">anchor</th>
                        <th className="px-4 py-2 text-left">Publisher</th>
                        <th className="px-4 py-2 text-left">Total Views</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news?.length > 0 && news?.map((item, index) => (
                        <tr key={item._id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-left">{index + 1}</td>
                            <td className="px-4 py-2 text-left">
                                <img src={item?.Image?.ImageURL} alt="image" className="w-16 h-16 object-cover rounded text-left" />
                            </td>
                            <td className="px-4 py-2 text-left">{item?.title}</td>
                            <td className="px-4 py-2 text-left">{item?.slug}</td>
                            <td className="px-4 py-2 text-left">{item?.category}</td>
                            <td className="px-4 py-2 text-left">{item?.subcategory}</td>
                            <td className="px-4 py-2 text-left">{item?.anchor}</td>
                            <td className="px-4 py-2 text-left">{item?.publisher}</td>
                            <td className="px-4 py-2 text-center">{item?.views}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => mutate({ id: item?._id }, {
                                        onSuccess: ((data) => (
                                            console.log(data),

                                            data.statusCode === 200 ? toast.success("News deleted successfully") : toast.error("News Deleted failed")

                                        ))
                                    }

                                    )}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default NewsTable;
