import Start from "../screens/Start";
import Status from "../screens/Status";
import Community from "../screens/Community";
import Chats from "../screens/Chats";
import Settings from "../screens/Settings";
import Cart from "../screens/Cart";
import Favourites from "../screens/Favourites";
import Orders from "../screens/Orders";

// Route type definition
export interface Route {
  id: string;
  title: string;
  screen: React.ComponentType<any>;
};

export interface Tab extends Route {}

// Main navigation routes
export const ROUTES: Route[] = [
  {
    id: 'start',
    title: 'Start',
    screen: Start,
  },
  {
    id: 'cart',
    title: 'Your Cart',
    screen: Cart,
  },
  {
    id: 'favourites',
    title: 'Favourites',
    screen: Favourites,
  },
  {
    id: 'orders',
    title: 'Your Orders',
    screen: Orders,
  },
];

// App info
export const APP_INFO = {
  name: 'Beka',
  version: '1.0.0',
};