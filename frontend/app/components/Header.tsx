import { Navigation } from 'lucide-react';
import { useNavigate } from 'react-router';

interface HeaderProps {
  showNewSearchButton?: boolean;
}

export default function Header({ showNewSearchButton = false }: HeaderProps) {
  const navigate = useNavigate();

  const handleNewSearch = () => {
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Navigation className="h-7 w-7" style={{ color: '#1e96fc' }} />
            <h1 className="text-2xl font-semibold" style={{ color: '#00072d' }}>
              Delhight
            </h1>
          </div>
          {showNewSearchButton && (
            <button
              onClick={handleNewSearch}
              className="px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
              style={{ backgroundColor: '#1e96fc' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d7ae0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e96fc'}
            >
              New Search
            </button>
          )}
        </div>
      </div>
    </header>
  );
}