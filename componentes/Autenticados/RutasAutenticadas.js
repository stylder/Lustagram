import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackFollow from './StackFollow';
import Profile from './Profile';
import StackAdd from './StackAdd';


const RutasAutenticadasCatalog = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: StackAdd,
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
