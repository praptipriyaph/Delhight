import { useLocation, useNavigate } from 'react-router';
import { MapPin, Navigation, Clock, DollarSign } from 'lucide-react';

interface RouteData {
  id: number;
  name: string;
  distance: string;
  time: string;
  cost: string;
  type: string;
  color: string;
}

interface LocationState {
  from: string;
  to: string;
}

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to } = (location.state as LocationState) || {};

  if (!from || !to) {
    navigate('/');
    return null;
  }

  // Mock route data
  const routes: RouteData[] = [
    {
      id: 1,
      name: 'Fastest Route',
      distance: '25.4 km',
      time: '32 mins',
      cost: '$12.50',
      type: 'highway',
      color: '#1e96fc'
    },
    {
      id: 2,
      name: 'Scenic Route',
      distance: '28.7 km',
      time: '45 mins',
      cost: '$14.20',
      type: 'scenic',
      color: '#6B7280'
    },
    {
      id: 3,
      name: 'Economy Route',
      distance: '31.2 km',
      time: '38 mins',
      cost: '$9.80',
      type: 'local',
      color: '#9CA3AF'
    }
  ];

  const handleNewSearch = () => {
    navigate('/');
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Navigation className="h-7 w-7" style={{ color: '#1e96fc' }} />
              <h1 className="text-2xl font-semibold" style={{ color: '#00072d' }}>
                Delhight
              </h1>
            </div>
            <button
              onClick={handleNewSearch}
              className="px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
              style={{ backgroundColor: '#1e96fc' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d7ae0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e96fc'}
            >
              New Search
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-8">
        {/* Route Info Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#00072d' }}>Route Results</h2>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" style={{ color: '#1e96fc' }} />
                  <span className="font-medium">From:</span>
                  <span>{from}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" style={{ color: '#1e96fc' }} />
                  <span className="font-medium">To:</span>
                  <span>{to}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Routes List */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6" style={{ color: '#00072d' }}>Available Routes</h3>
            {routes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium mb-1" style={{ color: '#00072d' }}>{route.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: route.color }}
                      ></div>
                      <span className="text-sm text-gray-500 capitalize">{route.type} route</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="flex items-center justify-center mb-2">
                      <Navigation className="h-5 w-5" style={{ color: '#1e96fc' }} />
                    </div>
                    <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>{route.distance}</div>
                    <div className="text-xs text-gray-600">Distance</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5" style={{ color: '#1e96fc' }} />
                    </div>
                    <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>{route.time}</div>
                    <div className="text-xs text-gray-600">Time</div>
                  </div>
                  
                  <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5" style={{ color: '#1e96fc' }} />
                    </div>
                    <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>{route.cost}</div>
                    <div className="text-xs text-gray-600">Est. Cost</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map View */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-medium mb-4" style={{ color: '#00072d' }}>Map View</h3>
            <div className="rounded-xl h-96 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
              {/* Mock Map Interface */}
              <div className="absolute inset-4 bg-white/60 rounded-xl border border-gray-200"></div>
              
              {/* Mock Route Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path
                  d="M50 350 Q200 100 350 50"
                  stroke="#1e96fc"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <path
                  d="M50 350 Q150 200 350 50"
                  stroke="#6B7280"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="3,3"
                />
                <path
                  d="M50 350 Q250 300 350 50"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="7,3"
                />
              </svg>

              {/* Start and End Points */}
              <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: '#1e96fc' }}></div>
              <div className="absolute top-6 right-6 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: '#1e96fc' }}></div>

              {/* Map Controls */}
              <div className="absolute top-4 left-4 space-y-2">
                <button className="bg-white w-8 h-8 rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 border border-gray-200">
                  +
                </button>
                <button className="bg-white w-8 h-8 rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 border border-gray-200">
                  −
                </button>
              </div>

              <div className="text-center text-gray-600">
                <Navigation className="h-12 w-12 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Interactive Map</p>
                <p className="text-xs opacity-75">Showing routes from {from} to {to}</p>
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-medium" style={{ color: '#00072d' }}>Route Legend:</h4>
              <div className="space-y-2">
                {routes.map((route) => (
                  <div key={route.id} className="flex items-center space-x-3 text-sm">
                    <div
                      className="w-4 h-1 rounded"
                      style={{ backgroundColor: route.color }}
                    ></div>
                    <span className="text-gray-600">{route.name}</span>
                  </div>
                ))}
              </div>
            </div>
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