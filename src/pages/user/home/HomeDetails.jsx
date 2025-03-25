import DOMPurify from 'dompurify';
import { useNavigate, useParams } from 'react-router-dom';
import { useAlsoReadThis, useNewsBySlug, useRelatedNews } from '../../../hooks/usePublicQuery';
import Loader from '../../../components/Loader';

const HomeDetails = () => {
    const { slug } = useParams();
    const { data, isLoading: detailsNewsLoading } = useNewsBySlug(slug);
    const { data: relatedNews, isLoading: relatedNewsLoading } = useRelatedNews(data?.category.name ?? null);
    const { data: suggestedNews, isLoading: suggestedNewsLoading } = useAlsoReadThis(null);
    const navigate = useNavigate();


    return (
        <div>
            {data &&
                <div div className="max-w-auto mx-auto px-2 md:px-8 py-8 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* News Details  */}
                        {detailsNewsLoading ? <Loader className="md:col-span-2 w-full h-screen" /> : <>
                            <div className="md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="w-full">
                                    <img
                                        src={data?.Image?.ImageURL}
                                        alt={data?.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-2 md:p-6">
                                    <h1 className="text-3xl text-center font-bold text-gray-900 mb-4">
                                        {data?.title}
                                    </h1>
                                    <div className="p-6">
                                        <p className="text-gray-700 text-lg tracking-wide word-spacing-wide"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    data?.description)
                                            }}
                                        />

                                    </div>
                                    <div>
                                        <iframe width="100%" height="300px" src={data?.videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>

                                    <div className='flex justify-between px-6 pt-6'>
                                        <span className="text-sm text-gray-500">{`Published by - ${data?.publisher?.name}`}</span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(data?.updatedAt).toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" })}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </>
                        }

                        {/* Right Side: Related News */}
                        <div className="bg-white shadow-lg rounded-lg lg:p-6 md:p-0 hidden md:block sm:hidden">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related News</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                                {relatedNewsLoading ? <Loader className="w-full h-screen" /> : <>
                                    {relatedNews?.length > 0 && relatedNews?.slice(0, 5).map((item, index) => (
                                        <div onClick={() => navigate(`/news/${item?.slug}`)} key={index} className="bg-gray-50 p-4 rounded-lg cursor-pointer shadow-md flex items-center lg:flex-row md:flex-col md:items-start">
                                            <img
                                                src={item?.Image?.ImageURL}
                                                alt={item?.alt}
                                                className="w-16 h-16 object-cover mr-4 rounded"
                                            />
                                            <div>
                                                <p className="text-lg font-semibold lg:pt-0 lg:pb-2 md:pt-4 md:pb-4 text-blue-600">
                                                    {item?.title?.slice(0, 40)}
                                                </p>
                                                <p className="text-gray-700 text-base"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            item?.description?.split(" ").slice(0, 20).join(" ") +
                                                            (item?.description?.split(" ").length > 20 ? "..." : "")
                                                        )
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </>}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Suggested News */}
                    <div className="mt-8 bg-white shadow-lg rounded-lg lg:p-6 md:p-0">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Read this also</h2>
                        {suggestedNewsLoading ? <Loader className="w-full h-80" /> : <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {suggestedNews?.length > 0 && suggestedNews?.slice(0, 4).map((item, index) => (
                                    <div onClick={() => (navigate(`/news/${item?.slug}`), window.scrollTo({ top: 0, behavior: "smooth" }))} key={index} className="bg-gray-50 lg:p-4 md:p-0 cursor-pointer rounded-lg shadow-md flex flex-col" >
                                        <img
                                            src={item?.Image?.ImageURL}
                                            alt={item?.alt}
                                            className="w-full h-40 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-lg font-semibold text-blue-600">{item?.title}</h3>
                                        <p className="text-gray-700 text-base"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    item?.description?.split(" ").slice(0, 20).join(" ") +
                                                    (item?.description?.split(" ").length > 20 ? "..." : "")
                                                )
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>}
                    </div>
                </div>}
        </div >
    );
};

export default HomeDetails;
