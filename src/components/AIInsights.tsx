import React from 'react';
import { Brain, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';

const AIInsights = () => {
  return (
    <section id="insights" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-center">AI-Powered Insights</h2>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Price Prediction</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <PredictionCard
                period="24 Hours"
                prediction="+1.2%"
                confidence="85%"
                trend="up"
              />
              <PredictionCard
                period="7 Days"
                prediction="+3.5%"
                confidence="75%"
                trend="up"
              />
              <PredictionCard
                period="30 Days"
                prediction="-0.8%"
                confidence="65%"
                trend="down"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Risk Analysis
              </h3>
              <div className="space-y-4">
                <RiskFactor
                  factor="Market Volatility"
                  level="Medium"
                  color="text-yellow-500"
                />
                <RiskFactor
                  factor="Geopolitical Risk"
                  level="High"
                  color="text-red-500"
                />
                <RiskFactor
                  factor="Currency Impact"
                  level="Low"
                  color="text-green-500"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-500" />
                Investment Recommendations
              </h3>
              <div className="space-y-4">
                <Recommendation
                  title="Portfolio Allocation"
                  description="Consider maintaining 10-15% gold allocation in your portfolio"
                />
                <Recommendation
                  title="Entry Point"
                  description="Current price levels suggest a favorable entry point"
                />
                <Recommendation
                  title="Investment Vehicle"
                  description="Physical gold recommended over paper gold for long-term holding"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Market Sentiment Analysis</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <SentimentCard
                source="News Media"
                sentiment="Bullish"
                score="75%"
              />
              <SentimentCard
                source="Social Media"
                sentiment="Neutral"
                score="52%"
              />
              <SentimentCard
                source="Expert Analysis"
                sentiment="Bullish"
                score="82%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PredictionCard = ({ period, prediction, confidence, trend }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="text-gray-600 mb-2">{period}</div>
    <div className={`text-xl font-bold ${
      trend === 'up' ? 'text-green-600' : 'text-red-600'
    }`}>
      {prediction}
    </div>
    <div className="text-sm text-gray-500">
      Confidence: {confidence}
    </div>
  </div>
);

const RiskFactor = ({ factor, level, color }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-700">{factor}</span>
    <span className={`font-medium ${color}`}>{level}</span>
  </div>
);

const Recommendation = ({ title, description }) => (
  <div>
    <h4 className="font-medium text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const SentimentCard = ({ source, sentiment, score }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="text-sm text-gray-600 mb-1">{source}</div>
    <div className="font-medium text-gray-800">{sentiment}</div>
    <div className="text-sm text-gray-500">Confidence: {score}</div>
  </div>
);

export default AIInsights;