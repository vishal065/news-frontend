import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useLatestQueryNews } from '../../../hooks/usePublicQuery';


const Home = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useLatestQueryNews();
  console.log("data", data);


  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Loading Data Error</div>;


  return (
    <div>
      <div className="container mx-auto p-4 mt-28">
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Full-width card */}
          <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <div className="overflow-hidden">
              <img
                className="w-full h-auto max-h-96 object-cover transition-transform duration-300 hover:scale-105"
                src="https://mimolive.com/wp-content/uploads/2022/08/thisisengineering-raeng-5KxOM7cKhmA-unsplash-1024x683.jpg"
                alt="News program"
              />
            </div>
            <div className="p-6">
              <div className="font-bold text-2xl mb-2">The Grand Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#sunset</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
          {data?.pages?.length > 0 &&
            data?.pages?.map((item) => (
              item?.map((subItem, index) => < div key={index} className="w-full bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer" >
                <div className="overflow-hidden" >
                  <img
                    className="w-full h-auto max-h-72 object-cover transition-transform duration-300 hover:scale-105"
                    src={subItem?.Image?.ImageURL}
                    alt="News program"
                  />
                </div>
                <div className="p-6">
                  <div className="font-bold text-xl mb-2">{subItem?.title}</div>
                  {/* Sanitize HTML before rendering */}
                  <p className="text-gray-700 text-base"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subItem?.description) }}
                  />
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                </div>
              </div>
              )



            ))}
        </div>
      </div >
      {isFetchingNextPage && <div>Loading more...</div>}

      {/* <StoriesSlider /> */}
    </div >
  );
};

export default Home;
