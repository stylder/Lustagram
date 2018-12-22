import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';


const RutasAutenticadasCatalog = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: Follow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    headerMode: 'none',
  },
);

const RutasAutenticadas = createAppContainer(RutasAutenticadasCatalog);

export default RutasAutenticadas;
