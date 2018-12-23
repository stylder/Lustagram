import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import Search from './Search';
import Add from './Add';
import Follow from './Follow';
import Profile from './Profile';


const RutasAutenticadasCatalog = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
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
  },
);

const RutasAutenticadas = createAppContainer(RutasAutenticadasCatalog);

export default RutasAutenticadas;
