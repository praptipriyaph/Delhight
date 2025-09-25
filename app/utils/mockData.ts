export interface RouteData {
  id: number;
  name: string;
  distance: string;
  time: string;
  cost: string;
  type: string;
  color: string;
}

export const generateRouteData = (from: string, to: string): RouteData[] => {
  return [
    {
      id: 1,
      name: 'Fastest Route',
      distance: '25.4 km',
      time: '32 mins',
      cost: '₹125',
      type: 'highway',
      color: '#1e96fc'
    },
    {
      id: 2,
      name: 'Scenic Route',
      distance: '28.7 km',
      time: '45 mins',
      cost: '₹142',
      type: 'scenic',
      color: '#6B7280'
    },
    {
      id: 3,
      name: 'Economy Route',
      distance: '31.2 km',
      time: '38 mins',
      cost: '₹98',
      type: 'local',
      color: '#9CA3AF'
    }
  ];
};