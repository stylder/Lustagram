import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';


const RutasNoAutenticadasCatalog = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    headerMode: 'none',
  },
);

const RutasNoAutenticadas = createAppContainer(RutasNoAutenticadasCatalog);

export default RutasNoAutenticadas;
