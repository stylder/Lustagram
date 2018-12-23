import { createAppContainer, createStackNavigator } from 'react-navigation';


import Autor from './Profile';
import TabFollow from './TabFollow';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';


const StackFollow = createStackNavigator(
  {
    TabFollow: {
      screen: TabFollow,
      navigationOptions: {
        header: null,
      },
    },
    Autor: {
      screen: Autor,
    },
    Publicacion: {
      screen: Publicacion,
    },
    Comentarios: {
      screen: Comentarios,
    },
  },
  {},
);


const RutasFollow = createAppContainer(StackFollow);
/**
 *
 * Fix el bug de ocultar la tabNav con la versión 3.x
 *
 * @param navigation
 */
RutasFollow.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};

  if (routeName === 'Comentarios') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};


export default RutasFollow;
