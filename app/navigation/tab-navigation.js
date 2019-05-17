import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Id from "../components/Id";
import Price from "../components/Price";
import Size from "../components/Size";

const MainNavigator = createMaterialTopTabNavigator(
  {
    id: {
      screen: Id,
      navigationOptions: {
        tabBarLabel: "Sort by Id"
      }
    },
    price: {
      screen: Price,
      navigationOptions: {
        tabBarLabel: "Sort by Price"
      }
    },
    size: {
      screen: Size,
      navigationOptions: {
        tabBarLabel: "Sort by Size"
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "orange", //<== remove background color
        borderColor: "orange" // <== remove border
      }
    }
  }
);

const TabNavigation = createAppContainer(MainNavigator);
export default TabNavigation;
