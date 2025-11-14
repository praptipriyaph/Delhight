import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RouteCard from '../components/RouteCard';
import MapView from '../components/MapView';
import SortFilter, { type SortOption, type FilterOption } from '../components/SortFilter';
import { generateRouteData, sortRoutes, filterRoutes } from '../utils/mockData';

interface LocationState {
  from: string;
  to: string;
}

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to } = (location.state as LocationState) || {};

  const [currentSort, setCurrentSort] = useState<SortOption>('time'); // Default sort by time
  const [currentFilter, setCurrentFilter] = useState<FilterOption>('all');

  // ✅ FIXED: Side effects like navigation must be in a useEffect hook.
  useEffect(() => {
    // If the required location state is missing, redirect to the home page.
    if (!from || !to) {
      navigate('/');
    }
  }, [from, to, navigate]); // Effect runs if these values change.

  // If we don't have the data, render nothing while we redirect.
  // This prevents the rest of the component from running with undefined data.
  if (!from || !to) {
    return null;
  }

  // Get all routes and apply sorting and filtering
  const allRoutes = generateRouteData(from, to);
  const filteredRoutes = filterRoutes(allRoutes, currentFilter);
  const sortedAndFilteredRoutes = sortRoutes(filteredRoutes, currentSort);

  const handleSortChange = (newSort: SortOption) => {
    setCurrentSort(newSort);
  };

  const handleFilterChange = (newFilter: FilterOption) => {
    setCurrentFilter(newFilter);
  };

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

        {/* Sort and Filter Controls */}
        <SortFilter
          currentSort={currentSort}
          currentFilter={currentFilter}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          routeCount={sortedAndFilteredRoutes.length}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Routes List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium" style={{ color: '#00072d' }}>
                Available Routes
              </h3>
              <div className="text-sm text-gray-500">
                Sorted by {currentSort === 'time' ? 'fastest' : currentSort === 'cost' ? 'cheapest' : 'shortest'} first
              </div>
            </div>
            
            {sortedAndFilteredRoutes.length > 0 ? (
              sortedAndFilteredRoutes.map((route, index) => (
                <div key={route.id} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div 
                        className="px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: '#10B981' }}
                      >
                        Recommended
                      </div>
                    </div>
                  )}
                  <RouteCard route={route} />
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">No routes found</h3>
                  <p className="text-sm">Try adjusting your filters to see more routes.</p>
                </div>
              </div>
            )}
          </div>

          {/* Map View */}
          <MapView routes={sortedAndFilteredRoutes} from={from} to={to} />
        </div>
      </main>

      <Footer />
    </>
  );
}