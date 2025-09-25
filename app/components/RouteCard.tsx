import { Navigation, Clock, IndianRupee } from 'lucide-react';

interface RouteData {
  id: number;
  name: string;
  distance: string;
  time: string;
  cost: string;
  type: string;
  color: string;
}

interface RouteCardProps {
  route: RouteData;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-medium mb-1" style={{ color: '#00072d' }}>
            {route.name}
          </h4>
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
          <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>
            {route.distance}
          </div>
          <div className="text-xs text-gray-600">Distance</div>
        </div>
        
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
            <IndianRupee className="h-5 w-5" style={{ color: '#1e96fc' }} />
          </div>
          <div className="text-lg font-medium" style={{ color: '#1e96fc' }}>
            {route.cost}
          </div>
          <div className="text-xs text-gray-600">Est. Cost</div>
        </div>
      </div>
    </div>
  );
}