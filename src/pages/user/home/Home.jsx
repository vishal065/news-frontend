import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useLatestQueryNews } from '../../../hooks/usePublicQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';

const Home = () => {
  const { id, id2 } = useParams();
  const state = useSelector((state) => state.home)
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage, isLoading } = useLatestQueryNews(state, { category: id, subcategory: id2, publisher: null, anchor: null });
  const navigate = useNavigate();



  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  if (status === "pending") return <div><Loader className="w-full h-screen" /></div>;
  if (status === "error") return <div>Loading Data Error</div>;


  return (
    <div>
      <div className="container mx-auto p-4 mt-28">

        {/* Full-width card */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {isLoading ? <Loader className="w-full h-96" /> : <>
            {data?.pages[0]?.length > 0 && data?.pages[0]?.slice(0, 1).map((item, index) => (
              <div key={index} onClick={() => navigate(`/news/${item?.slug}`)} className="w-full bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto max-h-96 object-cover transition-transform duration-300 hover:scale-105"
                    src={item?.Image?.ImageURL}
                    alt={item?.alt}
                  />
                </div>
                <div className="p-6">
                  <div className="font-bold text-2xl mb-2">{item?.title}</div>
                  <p className="text-gray-700 text-base"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item?.description?.split(" ").slice(0, 90).join(" ") +
                        (item?.description?.split(" ").length > 90 ? "..." : "")
                      )
                    }}
                  />
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
                  {item?.tags[0]?.split(",")?.map((tag, index) => (
                    <span key={index} className="bg-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">{`#${(tag).slice(0, 10)}`}</span>
                  ))}
                </div>
              </div>
            ))}
          </>
          }
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
          {isLoading ? <Loader className=" min-w-[87vw] h-[30vh]" /> : <>
            {data?.pages?.length >= 0 &&
              data?.pages?.[data?.pages?.length - 1 ?? data?.pages.length === 1 ?? 0]?.slice(1)?.map((item, index) => (
                <div onClick={() => navigate(`/news/${item?.slug}`, { state: item })} key={index} className="w-full bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer" >
                  <div className="overflow-hidden" >
                    <img
                      className="w-full h-auto max-h-72 object-cover transition-transform duration-300 hover:scale-105"
                      src={item?.Image?.ImageURL}
                      alt="News program"
                    />
                  </div>
                  <div className="p-6">

                    <div className="pt-4 pb-4 flex flex-wrap gap-2">
                      {item?.tags[0]?.split(",")?.map((tag, index) => (
                        <span key={index} className="bg-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-gray-700">{`${(tag).slice(0, 10)}`}</span>
                      ))}
                    </div>

                    <div className="font-bold text-xl mb-2">{item?.title}</div>
                    <p className="text-gray-700 text-base"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          item?.description?.split(" ").slice(0, 50).join(" ") +
                          (item?.description?.split(" ").length > 50 ? "..." : "")
                        )
                      }}
                    />

                    <div className='flex justify-between items-center pt-6'>
                      <span className='text-gray-400 text-xs'>{item?.publisher?.name}</span>
                      <span className="text-gray-400 text-xs">
                        {item?.updatedAt
                          ? new Date(item.updatedAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                          : "N/A"}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
          </>

          }
        </div>
      </div >
      {isFetchingNextPage && <div className=" text-center text-2xl text-gray-500 font-bold p-4">Loading...</div>}

    </div >
  );
};

export default Home;
