export interface TransportMode {
  type: 'metro' | 'bus' | 'walk' | 'auto';
  description: string;
  duration: string;
  fare: number;
  distance: string;
}

export interface RouteData {
  id: number;
  name: string;
  distance: string;
  distanceValue: number; // for sorting
  time: string;
  timeValue: number; // for sorting (in minutes)
  cost: string;
  costValue: number; // for sorting
  type: string;
  color: string;
  transportModes: TransportMode[];
  nearestMetro: string;
  nearestBusStand: string;
  routeDescription: string[];
  miscInfo: string[];
}

export type SortOption = 'time' | 'cost' | 'distance';
export type FilterOption = 'all' | 'metro' | 'bus' | 'walk' | 'auto';

export const generateRouteData = (from: string, to: string): RouteData[] => {
  return [
    {
      id: 1,
      name: 'Metro + Walk Route',
      distance: '18.2 km',
      distanceValue: 18.2,
      time: '28 mins',
      timeValue: 28,
      cost: '₹45',
      costValue: 45,
      type: 'metro-primary',
      color: '#1e96fc',
      nearestMetro: 'Connaught Place Metro',
      nearestBusStand: 'CP Bus Terminal',
      transportModes: [
        {
          type: 'walk',
          description: 'Walk to Connaught Place Metro',
          duration: '3 mins',
          fare: 0,
          distance: '250m'
        },
        {
          type: 'metro',
          description: 'Blue Line to Dwarka Sector 21',
          duration: '22 mins',
          fare: 40,
          distance: '17.5 km'
        },
        {
          type: 'walk',
          description: 'Walk to destination',
          duration: '3 mins',
          fare: 0,
          distance: '450m'
        }
      ],
      routeDescription: [
        '1. Walk 250m to Connaught Place Metro Station (3 mins)',
        '2. Take Blue Line towards Dwarka Sector 21 (22 mins)',
        '3. Exit at Dwarka Sector 21 Metro Station',
        '4. Walk 450m to your destination (3 mins)'
      ],
      miscInfo: [
        'Peak hours: 8-10 AM, 6-8 PM',
        'Metro frequency: 2-3 minutes',
        'Air-conditioned metro coaches',
        'Accessible for differently-abled'
      ]
    },
    {
      id: 2,
      name: 'Bus + Walk Route',
      distance: '22.1 km',
      distanceValue: 22.1,
      time: '42 mins',
      timeValue: 42,
      cost: '₹25',
      costValue: 25,
      type: 'bus-primary',
      color: '#10B981',
      nearestMetro: 'Rajiv Chowk Metro',
      nearestBusStand: 'Connaught Circus Bus Stop',
      transportModes: [
        {
          type: 'walk',
          description: 'Walk to bus stop',
          duration: '5 mins',
          fare: 0,
          distance: '400m'
        },
        {
          type: 'bus',
          description: 'Route 543 to Dwarka Terminal',
          duration: '35 mins',
          fare: 25,
          distance: '21.3 km'
        },
        {
          type: 'walk',
          description: 'Walk to destination',
          duration: '2 mins',
          fare: 0,
          distance: '400m'
        }
      ],
      routeDescription: [
        '1. Walk 400m to Connaught Circus Bus Stop (5 mins)',
        '2. Board DTC Bus Route 543 towards Dwarka (35 mins)',
        '3. Alight at Dwarka Terminal',
        '4. Walk 400m to your destination (2 mins)'
      ],
      miscInfo: [
        'Bus frequency: 10-15 minutes',
        'Non AC bus service',
        'Senior citizen discounts available',
        'Avoid during rush hours for comfort'
      ]
    },
    {
      id: 3,
      name: 'Auto + Metro Route',
      distance: '19.8 km',
      distanceValue: 19.8,
      time: '35 mins',
      timeValue: 35,
      cost: '₹85',
      costValue: 85,
      type: 'mixed',
      color: '#F59E0B',
      nearestMetro: 'Rajouri Garden Metro',
      nearestBusStand: 'Rajouri Garden Bus Stand',
      transportModes: [
        {
          type: 'auto',
          description: 'Auto to Rajouri Garden Metro',
          duration: '8 mins',
          fare: 45,
          distance: '3.2 km'
        },
        {
          type: 'metro',
          description: 'Blue Line to Dwarka Sector 21',
          duration: '25 mins',
          fare: 35,
          distance: '16.1 km'
        },
        {
          type: 'walk',
          description: 'Walk to destination',
          duration: '2 mins',
          fare: 0,
          distance: '500m'
        }
      ],
      routeDescription: [
        '1. Take auto-rickshaw to Rajouri Garden Metro (8 mins)',
        '2. Enter Rajouri Garden Metro Station',
        '3. Take Blue Line towards Dwarka Sector 21 (25 mins)',
        '4. Walk 500m to your destination (2 mins)'
      ],
      miscInfo: [
        'Auto fare may vary during peak hours',
        'Negotiate auto fare before starting',
        'Metro + Auto combo for comfort',
        'Good option during metro rush hours'
      ]
    },
    {
      id: 4,
      name: 'Direct Bus Route',
      distance: '25.4 km',
      distanceValue: 25.4,
      time: '55 mins',
      timeValue: 55,
      cost: '₹30',
      costValue: 30,
      type: 'bus-direct',
      color: '#6B7280',
      nearestMetro: 'Connaught Place Metro',
      nearestBusStand: 'Shivaji Stadium Bus Terminal',
      transportModes: [
        {
          type: 'walk',
          description: 'Walk to bus terminal',
          duration: '8 mins',
          fare: 0,
          distance: '650m'
        },
        {
          type: 'bus',
          description: 'Express Route 620 to Dwarka',
          duration: '45 mins',
          fare: 30,
          distance: '24.2 km'
        },
        {
          type: 'walk',
          description: 'Walk to destination',
          duration: '2 mins',
          fare: 0,
          distance: '550m'
        }
      ],
      routeDescription: [
        '1. Walk 650m to Shivaji Stadium Bus Terminal (8 mins)',
        '2. Board Express Bus Route 620 to Dwarka (45 mins)',
        '3. Alight at Dwarka Sector 21 Bus Stop',
        '4. Walk 550m to your destination (2 mins)'
      ],
      miscInfo: [
        'Express bus with limited stops',
        'AC bus service available',
        'Less crowded than regular buses',
        'Good for long distance travel'
      ]
    },
    {
      id: 5,
      name: 'Walk + Multiple Transit',
      distance: '21.5 km',
      distanceValue: 21.5,
      time: '48 mins',
      timeValue: 48,
      cost: '₹55',
      costValue: 55,
      type: 'mixed-complex',
      color: '#8B5CF6',
      nearestMetro: 'Karol Bagh Metro',
      nearestBusStand: 'Karol Bagh Bus Stand',
      transportModes: [
        {
          type: 'walk',
          description: 'Walk to Karol Bagh Metro',
          duration: '6 mins',
          fare: 0,
          distance: '500m'
        },
        {
          type: 'metro',
          description: 'Blue Line to Dwarka Mor',
          duration: '18 mins',
          fare: 30,
          distance: '15.2 km'
        },
        {
          type: 'bus',
          description: 'Feeder bus to Sector 21',
          duration: '12 mins',
          fare: 15,
          distance: '4.8 km'
        },
        {
          type: 'walk',
          description: 'Walk to destination',
          duration: '12 mins',
          fare: 0,
          distance: '1 km'
        }
      ],
      routeDescription: [
        '1. Walk 500m to Karol Bagh Metro Station (6 mins)',
        '2. Take Blue Line to Dwarka Mor Metro (18 mins)',
        '3. Board feeder bus Route 764 to Sector 21 (12 mins)',
        '4. Walk 1 km to your destination (12 mins)'
      ],
      miscInfo: [
        'Multiple mode changes required',
        'Good exercise with walking',
        'Feeder bus frequency: 8-10 minutes',
        'Scenic walk in the final stretch'
      ]
    }
  ];
};

export const sortRoutes = (routes: RouteData[], sortBy: SortOption): RouteData[] => {
  return [...routes].sort((a, b) => {
    switch (sortBy) {
      case 'time':
        return a.timeValue - b.timeValue;
      case 'cost':
        return a.costValue - b.costValue;
      case 'distance':
        return a.distanceValue - b.distanceValue;
      default:
        return 0;
    }
  });
};

export const filterRoutes = (routes: RouteData[], filterBy: FilterOption): RouteData[] => {
  if (filterBy === 'all') return routes;
  
  return routes.filter(route => 
    route.transportModes.some(mode => mode.type === filterBy)
  );
};