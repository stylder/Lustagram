import { createAppContainer, createStackNavigator } from 'react-navigation';


import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import Search from './Search';


const StackSearch = createStackNavigator(
  {
    Search: {
      screen: Search,
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


const RutasSearch = createAppContainer(StackSearch);
/**
 *
 * Fix el bug de ocultar la tabNav con la versión 3.x
 *
 * @param navigation
 */
RutasSearch.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};

  if (routeName === 'Comentarios') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};


export default RutasSearch;
