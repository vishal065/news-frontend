import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useLatestQueryNews, useNewsBySlug, useRelatedNews } from '../../../hooks/usePublicQuery';

const HomeDetails = () => {
    const { slug } = useParams();
    const [isNavigated, setIsNavigated] = useState(null)
    const { data } = useNewsBySlug(isNavigated);
    const { state } = useLocation();
    const { data: relatedNews } = useRelatedNews(data?.category.name ?? state?.category.name);
    const { data: suggestedNews } = useLatestQueryNews();
    const navigate = useNavigate();

    console.log("suggestedNews", suggestedNews)

    useEffect(() => {
        if (state !== null) {
            setIsNavigated(null);
        } else {
            setIsNavigated(slug);
        }
    }, [state])


    return (
        <div>
            {(state || data) &&
                <div div className="max-w-auto mx-auto px-8 py-8 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* News Details  */}
                        <div className="md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full">
                                <img
                                    src={state?.Image?.ImageURL ?? data?.Image?.ImageURL}
                                    alt={state?.alt ?? data?.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="text-3xl text-center font-bold text-gray-900 mb-4">
                                    {state?.title ?? data?.title}
                                </h1>
                                <div className="p-6">
                                    <p className="text-gray-700 text-lg tracking-wide word-spacing-wide"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                state?.description ?? data?.description)
                                        }}
                                    />

                                </div>
                                <div>
                                    <iframe width="100%" height="300px" src={state?.videoURL ?? data?.videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>

                                <div className='flex justify-between px-6 pt-6'>
                                    <span className="text-sm text-gray-500">{`Published by - ${state?.publisher?.name ?? data?.publisher?.name}`}</span>
                                    <span className="text-sm text-gray-500">
                                        {new Date(state?.updatedAt ?? data?.updatedAt).toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" })}
                                    </span>

                                </div>
                            </div>
                        </div>

                        {/* Right Side: Related News */}

                        <div className="bg-white shadow-lg rounded-lg p-6 hidden sm:block">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related News</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                                {relatedNews?.length > 0 && relatedNews?.slice(0, 5).map((item, index) => (
                                    <div onClick={() => navigate(`/news/${item?.slug}`, { state: item })} key={index} className="bg-gray-50 p-4 rounded-lg cursor-pointer shadow-md flex items-center">
                                        <img
                                            src={item?.Image?.ImageURL}
                                            alt={item?.alt}
                                            className="w-16 h-16 object-cover mr-4 rounded"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-blue-600">
                                                {item?.title?.slice(0, 40)}
                                            </p>
                                            <p className="text-gray-700 text-base"
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(
                                                        item?.description?.split(" ").slice(0, 30).join(" ") +
                                                        (item?.description?.split(" ").length > 30 ? "..." : "")
                                                    )
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom: Suggested News */}
                    <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Read this also</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {suggestedNews?.pages[0]?.length > 0 && suggestedNews?.pages[0]?.slice(0, 4).map((item, index) => (
                                <div onClick={() => (navigate(`/news/${item?.slug}`, { state: item }), window.scrollTo({ top: 0, behavior: "smooth" }))} key={index} className="bg-gray-50 p-4 cursor-pointer rounded-lg shadow-md flex flex-col" >
                                    <img
                                        src={item?.Image?.ImageURL}
                                        alt={item?.alt}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-blue-600">{item?.title}</h3>
                                    <p className="text-gray-700 text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                item?.description?.split(" ").slice(0, 30).join(" ") +
                                                (item?.description?.split(" ").length > 30 ? "..." : "")
                                            )
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>}

        </div >
    );
};

export default HomeDetails;
