import { Navigation } from 'lucide-react';

interface RouteData {
  id: number;
  name: string;
  distance: string;
  time: string;
  cost: string;
  type: string;
  color: string;
  transportModes?: any[];
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
        {/* Delhi Map Image */}
        <img 
          src="/images/delhi_map.ppm"
          alt="Delhi Route Map"
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            // Fallback if image doesn't load
            e.currentTarget.src = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f9f9f9'/%3e%3ctext x='50' y='50' font-size='14' text-anchor='middle' dy='.3em' fill='%231e96fc'%3eDelhi Map%3c/text%3e%3c/svg%3e";
          }}
        />
        
        {/* Overlay with route visualization */}
        <div className="absolute inset-0 bg-black/10 rounded-xl">
          {/* Mock Route Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {routes.slice(0, 3).map((route, index) => {
              const paths = [
                "M50 350 Q200 100 350 50",
                "M50 350 Q150 200 350 50", 
                "M50 350 Q250 300 350 50"
              ];
              return (
                <path
                  key={route.id}
                  d={paths[index] || paths[0]}
                  stroke={route.color}
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={index === 0 ? "5,5" : "3,3"}
                  className={index === 0 ? "animate-pulse" : ""}
                />
              );
            })}
          </svg>

          {/* Start and End Points */}
          <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: '#10B981' }}>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black/70 px-2 py-1 rounded">
              Start
            </div>
          </div>
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: '#EF4444' }}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-black/70 px-2 py-1 rounded">
              End
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 left-4 space-y-2">
            <button className="bg-white w-8 h-8 rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 border border-gray-200 font-medium">
              +
            </button>
            <button className="bg-white w-8 h-8 rounded shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 border border-gray-200 font-medium">
              −
            </button>
          </div>

          {/* Map Info Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="text-center text-gray-700 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200">
              <Navigation className="h-6 w-6 mx-auto mb-1" style={{ color: '#1e96fc' }} />
              <p className="text-sm font-medium">Delhi Routes</p>
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
          {routes.slice(0, 3).map((route) => (
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