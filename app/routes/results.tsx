import { useLocation, useNavigate } from 'react-router';
import { MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RouteCard from '../components/RouteCard';
import MapView from '../components/MapView';
import { generateRouteData } from '../utils/mockData';

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

  const routes = generateRouteData(from, to);

  return (
    <>
      <Header showNewSearchButton={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-8">
        {/* Route Info Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#00072d' }}>
                Route Results
              </h2>
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
            <h3 className="text-xl font-medium mb-6" style={{ color: '#00072d' }}>
              Available Routes
            </h3>
            {routes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>

          {/* Map View */}
          <MapView routes={routes} from={from} to={to} />
        </div>
      </main>

      <Footer />
    </>
  );
}