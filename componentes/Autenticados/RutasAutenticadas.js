import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import StackFollow from './StackFollow';
import Profile from './Profile';


const RutasAutenticadasCatalog = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: StackFollow,

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
