import React from 'react';
import StoriesSlider from './StoriesSlider';

const Home = () => {
  return (
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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="w-full bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
            <div className="overflow-hidden">
              <img
                className="w-full h-auto max-h-72 object-cover transition-transform duration-300 hover:scale-105"
                src="https://www.shutterstock.com/image-photo/tv-live-news-program-two-600nw-2150166725.jpg"
                alt="News program"
              />
            </div>
            <div className="p-6">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        ))}
      </div>
      <StoriesSlider />
    </div>
  );
};

export default Home;
