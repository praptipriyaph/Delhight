import { Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#00072d' }} className="text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Navigation className="h-6 w-6" style={{ color: '#1e96fc' }} />
              <h3 className="text-xl font-semibold text-white">Delhight</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your intelligent Delhi route planning companion. Find the best paths with real-time data and smart optimization.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Route Planning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cost Calculator</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Traffic Updates</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Map Integration</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Report Issues</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span>support@delhight.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Delhight. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}