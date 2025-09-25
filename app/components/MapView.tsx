import { Navigation } from 'lucide-react';

interface RouteData {
  id: number;
  name: string;
  distance: string;
  time: string;
  cost: string;
  type: string;
  color: string;
}

interface MapViewProps {
  routes: RouteData[];
  from: string;
  to: string;
}

export default function MapView({ routes, from, to }: MapViewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xl font-medium mb-4" style={{ color: '#00072d' }}>
        Map View
      </h3>
      
      {/* Map Image Container */}
      <div className="rounded-xl h-96 flex items-center justify-center relative overflow-hidden border border-gray-200">
        {/* Sample Map Image - Replace with actual map image */}
        <img 
          src="https://via.placeholder.com/600x400/f9f9f9/1e96fc?text=Interactive+Map+View"
          alt="Route Map"
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Overlay with route visualization */}
        <div className="absolute inset-0 bg-black/5 rounded-xl">
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

          {/* Center overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-700 bg-white/80 p-4 rounded-lg">
              <Navigation className="h-8 w-8 mx-auto mb-2" style={{ color: '#1e96fc' }} />
              <p className="text-sm font-medium">Route Map</p>
              <p className="text-xs opacity-75">From {from} to {to}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Legend */}
      <div className="mt-6 space-y-2">
        <h4 className="text-sm font-medium" style={{ color: '#00072d' }}>
          Route Legend:
        </h4>
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
  );
}