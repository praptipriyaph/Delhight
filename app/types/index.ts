/**
 * Defines a single leg of the journey, e.g., a specific metro line or bus route.
 */
export interface TransportMode {
  type: 'Metro' | 'Bus';
  line: string;
  color: string; // Hex color for the line (e.g., '#3498db')
}

/**
 * Defines the entire route object, from start to finish.
 */
export interface RouteData {
  id: number;
  isRecommended?: boolean;
  totalTime: string;
  departureTime: string;
  arrivalTime: string;
  cost: string;
  frequency?: string;
  // A route is composed of one or more transport modes
  modes: TransportMode[]; 
}

