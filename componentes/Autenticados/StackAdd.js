import { createAppContainer, createStackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';
import RutasHome from './StackHome';

const addStack = createStackNavigator(
  {
    Add: {
      screen: Add,
    },
    Seleccion: {
      screen: SeleccionarGaleria,
    },
  },
  {},
);


const StackAdd = createAppContainer(addStack);
/**
 *
 * Fix el bug de ocultar la tabNav con la versión 3.x
 *
 * @param navigation
 */
StackAdd.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};

  if (routeName === 'Seleccion') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default StackAdd;
