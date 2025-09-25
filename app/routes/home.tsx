import { useNavigate } from 'react-router';
import { Clock, IndianRupee, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (fromLocation: string, toLocation: string) => {
    navigate('/results', { 
      state: { from: fromLocation, to: toLocation } 
    });
  };

  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#00072d' }}>
            Find Your Perfect Route
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best routes with real-time cost, time, and distance calculations. 
            Choose what matters most to you.
          </p>
        </div>

        <SearchForm onSearch={handleSearch} />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <Clock className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Real-time Updates</h3>
            <p className="text-gray-600">Get live traffic and route information for accurate timing.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <IndianRupee className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Cost Optimization</h3>
            <p className="text-gray-600">Compare fuel costs and find the most economical routes.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f3ff' }}>
              <Navigation className="h-8 w-8" style={{ color: '#1e96fc' }} />
            </div>
            <h3 className="text-xl font-medium mb-2" style={{ color: '#00072d' }}>Multiple Options</h3>
            <p className="text-gray-600">Choose from fastest, cheapest, or most scenic routes.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}