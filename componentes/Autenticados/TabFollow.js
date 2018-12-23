import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Follow from './Follow';


const TabFollow = createMaterialTopTabNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },
  },
  {
  },
);


const RutasFollow = createAppContainer(TabFollow);


export default RutasFollow;
