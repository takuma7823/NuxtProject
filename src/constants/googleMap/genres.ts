export const googleMapGenres = [
  'Restaurants',
  'Coffee',
  'Dessert',
  'Ramen',
  'Donburi',
  'Teishoku',
  'Izakaya',
  'Bars',
  'Delivery',
] as const;

export type GoogleMapGenre = (typeof googleMapGenres)[number];
