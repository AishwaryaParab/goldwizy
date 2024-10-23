import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const GoldCalculator = () => {
  const [weight, setWeight] = useState('1');
  const [purity, setPurity] = useState('24');
  const [currency, setCurrency] = useState('USD');
  const [includeTaxes, setIncludeTaxes] = useState(false);
  const [premiumRate, setPremiumRate] = useState('3');

  // Mock current gold price - in reality, this would come from an API
  const baseGoldPrice = 2000; // USD per oz

  const calculatePrice = () => {
    let price = (parseFloat(weight) * baseGoldPrice * (parseFloat(purity) / 24));
    
    if (includeTaxes) {
      price *= 1.1; // 10% tax
    }
    
    price *= (1 + parseFloat(premiumRate) / 100);
    
    return price.toFixed(2);
  };

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-center">Gold Investment Calculator</h2>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (oz)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purity (Karat)
                </label>
                <select
                  value={purity}
                  onChange={(e) => setPurity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="24">24K (99.9%)</option>
                  <option value="22">22K (91.6%)</option>
                  <option value="18">18K (75.0%)</option>
                  <option value="14">14K (58.3%)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Premium Rate (%)
                </label>
                <input
                  type="number"
                  value={premiumRate}
                  onChange={(e) => setPremiumRate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="taxes"
                  checked={includeTaxes}
                  onChange={(e) => setIncludeTaxes(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="taxes" className="text-sm text-gray-700">
                  Include Taxes (10%)
                </label>
              </div>

              <div className="bg-white p-4 rounded-lg shadow mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Gold Price:</span>
                  <span className="font-semibold">${baseGoldPrice}/oz</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="font-medium">Total Price:</span>
                  <span className="font-bold text-amber-600">${calculatePrice()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-gray-600">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>
              Prices are indicative and updated every 60 seconds. Premium rates may vary by dealer.
              Actual prices may differ based on location and market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldCalculator;