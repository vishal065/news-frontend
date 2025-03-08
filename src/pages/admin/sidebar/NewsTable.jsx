import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryNews, useQueryNewsByID } from "../../../hooks/useAdminQuery";
import { useCreateAndUpdateNews } from "../../../hooks/admin/useAdminHooks";

const NewsTable = () => {
    const [ID, setID] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { data: news } = useQueryNews(pageNumber);
    const { data: SingleNews } = useQueryNewsByID(ID)
    const { mutate, isPending } = useCreateAndUpdateNews();
    const navigate = useNavigate();
    console.log(news?.data)

    const handleEdit = (id) => {
        setID(id)
    };

    useEffect(() => {
        if (SingleNews) {
            navigate(`/news/update/${ID}`, { state: SingleNews });
        }
    }, [SingleNews, ID])


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
                        <th className="px-4 py-2 text-left">Active</th>

                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news?.data?.map((item, index) => (
                        <tr key={item._id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-left">{index + 1}</td>
                            <td className="px-4 py-2 text-left">
                                <img src={item?.Image?.ImageURL} alt="image" className="w-16 h-16 object-cover rounded text-left" />
                            </td>
                            <td className="px-4 py-2 text-left">{item?.title?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-left">{item?.slug?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-left">{item?.category?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-left">{item?.subcategory?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-left">{item?.anchor?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-left">{item?.publisher?.slice(0, 10)}</td>
                            <td className="px-4 py-2 text-center">{item?.views}</td>
                            <td className="px-4 py-2 text-center"><p className={`w-[15px] h-[15px] rounded-2xl  ${item?.status ? "bg-green-400" : "bg-red-500"}`}></p></td>

                            <td className="px-4 py-2">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => handleEdit(item._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => mutate({ id: item?._id, path: "/news/delete" }
                                    )}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-center items-center pt-4'>
                <button
                    disabled={pageNumber === 1 ? true : false}
                    onClick={() => setPageNumber((prev) => prev - 1)}
                    className='p-3 bg-red-700 hover:bg-red-600 duration-300 text-white rounded-md font-bold cursor-pointer'>Prev
                </button>

                <h3 className='m-4 font-bold'>{pageNumber}</h3>
                <button
                    disabled={pageNumber * 6 < news?.count ? false : true}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                    className='p-3 bg-red-700 hover:bg-red-600 duration-300 text-white rounded-md font-bold cursor-pointer'>Next
                </button>
            </div>
        </div >
    );
};

export default NewsTable;
