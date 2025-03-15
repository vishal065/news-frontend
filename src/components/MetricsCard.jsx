const MetricsCard = ({ title, value, trend, icon: Icon, color }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                {trend && (
                    <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                    </span>
                )}
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
    );
};

export default MetricsCard;