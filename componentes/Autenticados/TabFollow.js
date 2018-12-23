import { createAppContainer, createStackNavigator } from 'react-navigation';
import Follow from './Follow';


const StackFollow = createStackNavigator(
  {
    Follow: {
      screen: Follow,
    },
    Followers: {
      screen: Follow,
    },
  },
  {},
);


const RutasFollow = createAppContainer(StackFollow);


export default RutasFollow;
