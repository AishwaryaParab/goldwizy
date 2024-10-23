import React from 'react';
import { TrendingUp, Calculator, Scale, History, Brain, DollarSign, LineChart } from 'lucide-react';
import Navbar from './components/Navbar';
import GoldCalculator from './components/GoldCalculator';
import TrendAnalysis from './components/TrendAnalysis';
import AIInsights from './components/AIInsights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80")',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-amber-400 mb-6">GoldWizy</h1>
          <p className="text-xl text-white mb-8">Your Intelligent Gold Investment Companion</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Start Investing
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Gold Analytics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calculator className="w-8 h-8 text-amber-500" />}
              title="Gold Calculator"
              description="Calculate gold investments with real-time prices, including premiums, taxes, and purity factors."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-amber-500" />}
              title="Price Trends"
              description="Analyze historical trends and patterns across different timeframes."
            />
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-amber-500" />}
              title="AI Predictions"
              description="Get AI-powered insights and price predictions based on market analysis."
            />
            <FeatureCard 
              icon={<LineChart className="w-8 h-8 text-amber-500" />}
              title="Market Analysis"
              description="Deep dive into market factors affecting gold prices."
            />
            <FeatureCard 
              icon={<History className="w-8 h-8 text-amber-500" />}
              title="Historical Data"
              description="Access comprehensive historical price data and analysis."
            />
            <FeatureCard 
              icon={<DollarSign className="w-8 h-8 text-amber-500" />}
              title="Investment Tools"
              description="Portfolio tracking and investment planning tools."
            />
          </div>
        </div>
      </section>

      <GoldCalculator />
      <TrendAnalysis />
      <AIInsights />
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;