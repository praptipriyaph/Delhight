import { Navigation, Clock, IndianRupee, Train, Bus, MapPin, User } from 'lucide-react';
import { useState } from 'react';

interface TransportMode {
  type: 'metro' | 'bus' | 'walk' | 'auto';
  description: string;
  duration: string;
  fare: number;
  distance: string;
}

interface RouteData {
  id: number;
  name: string;
  distance: string;
  distanceValue: number;
  time: string;
  timeValue: number;
  cost: string;
  costValue: number;
  type: string;
  color: string;
  transportModes: TransportMode[];
  nearestMetro: string;
  nearestBusStand: string;
  routeDescription: string[];
  miscInfo: string[];
}

interface RouteCardProps {
  route: RouteData;
}

const getTransportIcon = (type: string) => {
  switch (type) {
    case 'metro': return <Train className="h-4 w-4" />;
    case 'bus': return <Bus className="h-4 w-4" />;
    case 'walk': return <User className="h-4 w-4" />;
    case 'auto': return <Navigation className="h-4 w-4" />;
    default: return <Navigation className="h-4 w-4" />;
  }
};

const getTransportColor = (type: string) => {
  switch (type) {
    case 'metro': return '#1e96fc';
    case 'bus': return '#10B981';
    case 'walk': return '#6B7280';
    case 'auto': return '#F59E0B';
    default: return '#6B7280';
  }
};

export default function RouteCard({ route }: RouteCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-medium mb-1" style={{ color: '#00072d' }}>
            {route.name}
          </h4>
          <div className="flex items-center space-x-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: route.color }}
            ></div>
            <span className="text-sm text-gray-500 capitalize">{route.type} route</span>
          </div>
          
          {/* Transport Mode Icons */}
          <div className="flex items-center space-x-2 mb-3">
            {route.transportModes.map((mode, index) => (
              <div key={index} className="flex items-center space-x-1">
                <div 
                  className="p-1 rounded-full" 
                  style={{ backgroundColor: `${getTransportColor(mode.type)}20` }}
                >
                  <div style={{ color: getTransportColor(mode.type) }}>
                    {getTransportIcon(mode.type)}
                  </div>
                </div>
                {index < route.transportModes.length - 1 && (
                  <div className="w-2 h-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Nearest Stations */}
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex items-center space-x-1">
              <Train className="h-3 w-3" />
              <span>Metro: {route.nearestMetro}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bus className="h-3 w-3" />
              <span>Bus: {route.nearestBusStand}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-5 w-5" style={{ color: '#1e96fc' }} />
          </div>
          <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>
            {route.time}
          </div>
          <div className="text-xs text-gray-600">Time</div>
        </div>
        
        <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="flex items-center justify-center mb-2">
            <Navigation className="h-5 w-5" style={{ color: '#1e96fc' }} />
          </div>
          <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>
            {route.distance}
          </div>
          <div className="text-xs text-gray-600">Distance</div>
        </div>
        
        <div className="text-center p-3 rounded-xl" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="flex items-center justify-center mb-2">
            <IndianRupee className="h-5 w-5" style={{ color: '#1e96fc' }} />
          </div>
          <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>
            {route.cost}
          </div>
          <div className="text-xs text-gray-600">Est. Cost</div>
        </div>
      </div>

      {/* View Details Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors border"
        style={{ 
          borderColor: '#1e96fc',
          color: showDetails ? '#ffffff' : '#1e96fc',
          backgroundColor: showDetails ? '#1e96fc' : 'transparent'
        }}
      >
        {showDetails ? 'Hide Details' : 'View Route Details'}
      </button>

      {/* Detailed Route Information */}
      {showDetails && (
        <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
          {/* Transport Mode Breakdown */}
          <div>
            <h5 className="text-sm font-medium mb-3" style={{ color: '#00072d' }}>
              Transport Breakdown:
            </h5>
            <div className="space-y-2">
              {route.transportModes.map((mode, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#f9f9f9' }}>
                  <div className="flex items-center space-x-2">
                    <div style={{ color: getTransportColor(mode.type) }}>
                      {getTransportIcon(mode.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{mode.description}</div>
                      <div className="text-xs text-gray-500">{mode.distance} • {mode.duration}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {mode.fare > 0 ? `₹${mode.fare}` : 'Free'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Description */}
          <div>
            <h5 className="text-sm font-medium mb-3" style={{ color: '#00072d' }}>
              Step-by-step Directions:
            </h5>
            <div className="space-y-1">
              {route.routeDescription.map((step, index) => (
                <div key={index} className="text-sm text-gray-600 pl-2">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Miscellaneous Info */}
          <div>
            <h5 className="text-sm font-medium mb-3" style={{ color: '#00072d' }}>
              Additional Information:
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {route.miscInfo.map((info, index) => (
                <div key={index} className="text-xs text-gray-500 flex items-start space-x-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <span>{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}