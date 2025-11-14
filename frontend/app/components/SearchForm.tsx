import { useState } from 'react';
import { MapPin, Route } from 'lucide-react';

interface SearchFormProps {
  onSearch: (from: string, to: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleSubmit = () => {
    if (fromLocation && toLocation) {
      onSearch(fromLocation, toLocation);
    }
  };

  return (
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
          onClick={handleSubmit}
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
  );
}