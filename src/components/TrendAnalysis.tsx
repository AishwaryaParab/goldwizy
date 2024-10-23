import React, { useState } from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const TrendAnalysis = () => {
  const [timeframe, setTimeframe] = useState('1M');

  // Mock data - in reality, this would come from an API
  const trendData = {
    '1D': { change: '+1.2%', price: '2000.50' },
    '1W': { change: '-0.8%', price: '1995.30' },
    '1M': { change: '+3.5%', price: '2050.75' },
    '1Y': { change: '+15.2%', price: '2300.00' },
    '5Y': { change: '+45.8%', price: '2800.25' },
  };

  return (
    <section id="trends" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-center">Gold Price Trends</h2>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.keys(trendData).map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-4 py-2 rounded-lg transition ${
                  timeframe === period
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Current Price</span>
                  <span className="text-2xl font-bold">${trendData[timeframe].price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Change</span>
                  <span className={`font-semibold ${
                    trendData[timeframe].change.startsWith('+') 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {trendData[timeframe].change}
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Key Statistics</h3>
                <div className="space-y-2">
                  <StatRow label="High" value={`$${(parseFloat(trendData[timeframe].price) + 50).toFixed(2)}`} />
                  <StatRow label="Low" value={`$${(parseFloat(trendData[timeframe].price) - 50).toFixed(2)}`} />
                  <StatRow label="Volume" value="1.2M oz" />
                  <StatRow label="Market Cap" value="$11.2T" />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Price Chart</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                {/* Chart component would go here */}
                <p className="text-gray-500">Interactive chart visualization</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Market Insights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InsightCard
                title="Supply and Demand"
                description="Global gold demand increased by 3% in the last quarter, driven by central bank purchases."
              />
              <InsightCard
                title="Market Sentiment"
                description="Bullish trend expected to continue due to geopolitical tensions and inflation concerns."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const InsightCard = ({ title, description }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-medium mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default TrendAnalysis;