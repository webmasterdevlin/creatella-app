import React from "react";
import { Provider } from "mobx-react";
import ProductStore from "../stores/ProductStore";
import TabContainer from "../screens/TabContainer";

const stores = {
  ProductStore
};

class NavigationWrapper extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <TabContainer />
      </Provider>
    );
  }
}

export default NavigationWrapper;
