import { ArrowUpDown, Filter, Clock, IndianRupee, Navigation, Train, Bus, User } from 'lucide-react';

export type SortOption = 'time' | 'cost' | 'distance';
export type FilterOption = 'all' | 'metro' | 'bus' | 'walk' | 'auto';

interface SortFilterProps {
  currentSort: SortOption;
  currentFilter: FilterOption;
  onSortChange: (sort: SortOption) => void;
  onFilterChange: (filter: FilterOption) => void;
  routeCount: number;
}

export default function SortFilter({ 
  currentSort, 
  currentFilter, 
  onSortChange, 
  onFilterChange, 
  routeCount 
}: SortFilterProps) {
  const sortOptions = [
    { value: 'time' as SortOption, label: 'Time', icon: Clock },
    { value: 'cost' as SortOption, label: 'Cost', icon: IndianRupee },
    { value: 'distance' as SortOption, label: 'Distance', icon: Navigation },
  ];

  const filterOptions = [
    { value: 'all' as FilterOption, label: 'All Routes', icon: Navigation },
    { value: 'metro' as FilterOption, label: 'Metro', icon: Train },
    { value: 'bus' as FilterOption, label: 'Bus', icon: Bus },
    { value: 'walk' as FilterOption, label: 'Walk', icon: User },
    { value: 'auto' as FilterOption, label: 'Auto', icon: Navigation },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="h-5 w-5" style={{ color: '#1e96fc' }} />
            <span className="text-sm font-medium" style={{ color: '#00072d' }}>Sort by:</span>
          </div>
          <div className="flex space-x-2">
            {sortOptions.map((option) => {
              const Icon = option.icon;
              const isActive = currentSort === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => onSortChange(option.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                    isActive 
                      ? 'text-white border-transparent' 
                      : 'text-gray-600 border-gray-200 hover:border-blue-300'
                  }`}
                  style={{
                    backgroundColor: isActive ? '#1e96fc' : 'transparent'
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5" style={{ color: '#1e96fc' }} />
            <span className="text-sm font-medium" style={{ color: '#00072d' }}>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              const isActive = currentFilter === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => onFilterChange(option.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                    isActive 
                      ? 'text-white border-transparent' 
                      : 'text-gray-600 border-gray-200 hover:border-blue-300'
                  }`}
                  style={{
                    backgroundColor: isActive ? '#1e96fc' : 'transparent'
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500">
          Showing {routeCount} route{routeCount !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}