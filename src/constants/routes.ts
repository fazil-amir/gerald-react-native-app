// Define app routes and navigation structure
import { IMAGES } from './images';
import { ImageSourcePropType } from 'react-native';

// Route type definition
export interface Route {
  id: string;
  title: string;
  icon: ImageSourcePropType;
};

export interface Tab extends Route {}

// Main navigation routes
export const ROUTES: Route[] = [
  {
    id: 'start',
    title: 'Start',
    icon: IMAGES.home,
  },
  {
    id: 'cart',
    title: 'Your Cart',
    icon: IMAGES.search, // Using existing icons for now, can be replaced with appropriate icons later
  },
  {
    id: 'favourites',
    title: 'Favourites',
    icon: IMAGES.notifications,
  },
  {
    id: 'orders',
    title: 'Your Orders',
    icon: IMAGES.settings,
  }
];

// App info
export const APP_INFO = {
  name: 'Beka',
  version: '1.0.0',
};