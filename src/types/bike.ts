export interface Bike {
  date_stolen: number | null;
  description: string | null;
  frame_colors: string[];
  frame_model: string | null;
  id: number;
  is_stock_img: boolean;
  large_img: string | null;
  location_found: string | null;
  manufacturer_name: string;
  external_id: string | null;
  registry_name: string | null;
  registry_url: string | null;
  serial: string;
  status: 'stolen' | 'found';
  stolen: boolean;
  stolen_coordinates: [number, number] | null;
  stolen_location: string | null;
  thumb: string | null;
  title: string;
  url: string;
  year: number | null;
  propulsion_type_slug: 'foot-pedal' | 'pedal-assist' | 'throttle' | 'pedal-assist-and-throttle';
  cycle_type_slug: 'bike' | 'e-scooter';
}

export interface BikeSearchResponse {
  bikes: Bike[];
}

export interface BikeSearchCountResponse {
  non: number;
  stolen: number;
  proximity: number;
}
