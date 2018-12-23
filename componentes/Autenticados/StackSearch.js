import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Autor: {
      screen: Autor,
    },
    Publicacion: {
      screen: Publicacion,
    },
    Comentarios: {
      screen: Comentarios,
      navigationOptions: {
        tabBarVisible: false,
      },
    },
  },
  {},
);


const RutasHome = createAppContainer(HomeStack);

/**
 *
 * Fix el bug de ocultar la tabNav con la versión 3.x
 *
 * @param navigation
 */
RutasHome.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};

  if (routeName === 'Comentarios') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default RutasHome;
