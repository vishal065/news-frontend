import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useNewsBySlug } from '../../../hooks/usePublicQuery';

const HomeDetails = () => {
    const { slug } = useParams();
    const [isNavigated, setIsNavigated] = useState(null)
    const { data } = useNewsBySlug(isNavigated);
    const { state } = useLocation();
    console.log("news by slug", data)


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
                <div div className="max-w-7xl mx-auto px-4 py-8 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full">
                                <img
                                    src={state?.Image?.ImageURL ?? data?.Image?.ImageURL}

                                    alt={state?.alt ?? data?.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    {state?.title ?? data?.title}
                                </h1>
                                <div className="p-6">
                                    <p className="text-gray-700 text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                state?.description ?? data?.description)
                                        }}
                                    />

                                </div>
                                <iframe width="100%" height="300px" src={state?.videoURL ?? data?.videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                <div>
                                    <span className="text-sm text-gray-500">{state?.publisher?.name ?? data?.publisher?.name}</span>
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
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <Link to="/related-article-1" className="text-lg font-semibold text-blue-600 hover:underline">
                                        Related News Article 1
                                    </Link>
                                    <p className="text-sm text-gray-500">Description of the related article.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <Link to="/related-article-2" className="text-lg font-semibold text-blue-600 hover:underline">
                                        Related News Article 2
                                    </Link>
                                    <p className="text-sm text-gray-500">Description of the related article.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <Link to="/related-article-3" className="text-lg font-semibold text-blue-600 hover:underline">
                                        Related News Article 3
                                    </Link>
                                    <p className="text-sm text-gray-500">Description of the related article.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <Link to="/related-article-4" className="text-lg font-semibold text-blue-600 hover:underline">
                                        Related News Article 4
                                    </Link>
                                    <p className="text-sm text-gray-500">Description of the related article.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Suggested News */}
                    <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Read this also</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                                <img
                                    src="https://cdn.create.vista.com/api/media/small/223454176/stock-photo-partial-view-businesspeople-digital-devices-working-workplace-papers"
                                    alt="Suggested News 1"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link to="/suggested-article-1" className="text-lg font-semibold text-blue-600 hover:underline">
                                    Suggested News Article 1
                                </Link>
                                <p className="text-sm text-gray-500">Brief description of the suggested article.</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                                <img
                                    src="https://photographyforrealestate.net/wp-content/uploads/photographyforrealestate-how-much-sell-photo-rights-for-04.jpg"
                                    alt="Suggested News 2"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link to="/suggested-article-2" className="text-lg font-semibold text-blue-600 hover:underline">
                                    Suggested News Article 2
                                </Link>
                                <p className="text-sm text-gray-500">Brief description of the suggested article.</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                                <img
                                    src="https://cdn.create.vista.com/api/media/small/223454176/stock-photo-partial-view-businesspeople-digital-devices-working-workplace-papers"
                                    alt="Suggested News 3"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link to="/suggested-article-3" className="text-lg font-semibold text-blue-600 hover:underline">
                                    Suggested News Article 3
                                </Link>
                                <p className="text-sm text-gray-500">Brief description of the suggested article.</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                                <img
                                    src="https://cdn.create.vista.com/api/media/small/223454176/stock-photo-partial-view-businesspeople-digital-devices-working-workplace-papers"
                                    alt="Suggested News 4"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link to="/suggested-article-4" className="text-lg font-semibold text-blue-600 hover:underline">
                                    Suggested News Article 4
                                </Link>
                                <p className="text-sm text-gray-500">Brief description of the suggested article.</p>
                            </div>
                        </div>
                    </div>
                </div>}

        </div >
    );
};

export default HomeDetails;
