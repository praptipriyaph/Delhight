import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Navigation, Clock, DollarSign, Route } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      navigate('/results', { 
        state: { from: fromLocation, to: toLocation } 
      });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Navigation className="h-7 w-7" style={{ color: '#1e96fc' }} />
            <h1 className="text-2xl font-semibold" style={{ color: '#00072d' }}>
              Delhight
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#00072d' }}>
            Find Your Perfect Route
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best routes with real-time cost, time, and distance calculations. 
            Choose what matters most to you.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* From Input */}
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center space-x-2" style={{ color: '#00072d' }}>
                  <MapPin className="h-4 w-4" style={{ color: '#1e96fc' }} />
                  <span>Where from?</span>
                </label>
                <input
                  type="text"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Enter starting location"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                  style={{ 
                    borderColor: fromLocation ? '#1e96fc' : '#e5e7eb',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e96fc'}
                  onBlur={(e) => e.currentTarget.style.borderColor = fromLocation ? '#1e96fc' : '#e5e7eb'}
                />
              </div>

              {/* To Input */}
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center space-x-2" style={{ color: '#00072d' }}>
                  <MapPin className="h-4 w-4" style={{ color: '#1e96fc' }} />
                  <span>Where to?</span>
                </label>
                <input
                  type="text"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                  style={{ 
                    borderColor: toLocation ? '#1e96fc' : '#e5e7eb',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e96fc'}
                  onBlur={(e) => e.currentTarget.style.borderColor = toLocation ? '#1e96fc' : '#e5e7eb'}
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={!fromLocation || !toLocation}
              className="w-full text-white font-medium py-4 rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: (!fromLocation || !toLocation) ? '#9CA3AF' : '#1e96fc'
              }}
              onMouseEnter={(e) => {
                if (fromLocation && toLocation) {
                  e.currentTarget.style.backgroundColor = '#0d7ae0';
                }
              }}
              onMouseLeave={(e) => {
                if (fromLocation && toLocation) {
                  e.currentTarget.style.backgroundColor = '#1e96fc';
                }
              }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Route className="h-5 w-5" />
                <span>Find Best Routes</span>
              </div>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <Clock className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Real-time Updates</h3>
            <p className="text-gray-600">Get live traffic and route information for accurate timing.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <DollarSign className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Cost Optimization</h3>
            <p className="text-gray-600">Compare fuel costs and find the most economical routes.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <Navigation className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Multiple Options</h3>
            <p className="text-gray-600">Choose from fastest, cheapest, or most scenic routes.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00072d' }} className="text-gray-300 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Navigation className="h-6 w-6" style={{ color: '#1e96fc' }} />
                <h3 className="text-xl font-semibold text-white">RouteWise</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your intelligent route planning companion. Find the best paths with real-time data and smart optimization.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Route Planning</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cost Calculator</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Traffic Updates</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Map Integration</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Report Issues</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span>support@routewise.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 RouteWise. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}