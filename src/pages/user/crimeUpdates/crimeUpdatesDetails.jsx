import React from 'react';
import { Link } from 'react-router-dom';

const CrimeUpdatesDetails = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
            {/* Main Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Side: Image and Content */}
                <div className="md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full">
                        <img
                            src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
                            alt="News"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Breaking News: Major Event Happening Now
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            This is a description of the news article. It provides insights and details about the major event unfolding, explaining the important aspects and implications for the general public. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat numquam ad voluptatum itaque provident doloremque quas in, nostrum ut nulla perferendis nihil quos enim illo, dolorem, quis sunt maiores tempore vero! Maxime tenetur, eum perferendis adipisci accusamus omnis nulla iusto itaque. Beatae, eaque? Quasi, voluptatibus atque cumque impedit ratione distinctio laborum vitae a, odit nesciunt dolorem at blanditiis delectus sequi expedita! Deserunt nostrum itaque voluptatem distinctio, in repellat laudantium debitis. At saepe, ipsam vel impedit enim autem modi error corporis in dolores. Ipsum iure necessitatibus minima excepturi exercitationem odio quod dignissimos ea? Corrupti dignissimos eligendi maxime totam nisi, non perferendis?
                        </p>

                        {/* Additional Information */}
                        <p className="text-sm text-gray-500">
                            Updated: January 31, 2025 | By: John Doe
                        </p>
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
        </div>
    );
};

export default CrimeUpdatesDetails;
