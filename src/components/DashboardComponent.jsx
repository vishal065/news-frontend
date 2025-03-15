import {
    FileText,
    Users,
    Radio,
    Eye,
    TrendingUp
} from 'lucide-react';
import MetricsCard from './MetricsCard';
import { useDashboardCards, usePopularNews } from '../hooks/useAdminQuery';


const DashboardComponent = () => {
    const { data, isLoading } = useDashboardCards()
    const { data: PopularNews, isLoading: PopularNewsLoading } = usePopularNews()


    return (
        <div className="px-6 py-5 ">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your news platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <MetricsCard
                    title="Total Articles"
                    value={data?.totalNews}
                    // trend={{ value: 12.5, isPositive: true }}
                    icon={FileText}
                    color="bg-blue-500"
                />
                <MetricsCard
                    title="Total Publishers"
                    value={data?.totalPublishers}
                    // trend={{ value: 8.2, isPositive: true }}
                    icon={Users}
                    color="bg-purple-500"
                />
                <MetricsCard
                    title="News Anchors"
                    value={data?.totalAnchors}
                    icon={Radio}
                    color="bg-orange-500"
                />
                <MetricsCard
                    title="Total Views"
                    value={data?.totalViews}
                    // trend={{ value: 15.8, isPositive: true }}
                    icon={Eye}
                    color="bg-green-500"
                />
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">Views Trend</h2>
                        <select className="border rounded-lg px-3 py-1.5 text-sm">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                        </select>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockData.viewTrends}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-6">Engagement Overview</h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-blue-500" />
                                <span>Comments</span>
                            </div>
                            <span className="font-semibold">{mockData.metrics.engagement.comments}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Share2 className="w-5 h-5 text-green-500" />
                                <span>Shares</span>
                            </div>
                            <span className="font-semibold">{mockData.metrics.engagement.shares}</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Heart className="w-5 h-5 text-red-500" />
                                <span>Likes</span>
                            </div>
                            <span className="font-semibold">{mockData.metrics.engagement.likes}</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-white rounded-xl shadow-sm -mt-4">
                <div className="px-6 pt-2 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Most Popular Articles</h2>
                        {/* <select className="border rounded-lg px-3 py-1.5 text-sm">
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select> */}
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Article Title</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Category</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Publisher</th>
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Views</th>
                                {/* <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Trend</th> */}
                                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Published</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {PopularNews?.map((article) => (
                                <tr key={article._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-blue-500" />
                                            <span className="font-medium text-gray-900">{article?.title?.slice(0, 25)}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                            {article?.category?.name}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">{article?.publisher.name}</td>
                                    <td className="py-4 px-6 font-medium">{article?.views}</td>
                                    {/* <td className="py-4 px-6">
                                        <div className={`flex items-center gap-1 ${article.trend >= 0 ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {article.trend >= 0 ? (
                                                <ArrowUp className="w-4 h-4" />
                                            ) : (
                                                <ArrowDown className="w-4 h-4" />
                                            )}
                                            <span className="font-medium">{Math.abs(article.trend)}%</span>
                                        </div>
                                    </td> */}
                                    <td className="py-4 px-6 text-gray-600">{article?.updatedAt ? new Date(article.updatedAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    }) : "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;