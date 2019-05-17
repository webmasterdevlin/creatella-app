import React, { Component } from "react";
import { View, Text, Spinner, Card, CardItem } from "native-base";
import ProductStore from "../stores/ProductStore";
import { inject, observer } from "mobx-react";
import Advertisement from "./Advertisement";

class Id extends Component {
  async componentDidMount() {
    await ProductStore.loadProductsById();
    this.props.navigation.addListener("didFocus", async () => {
      await ProductStore.loadProductsById();
    });
  }

  render() {
    return (
      <View>
        {ProductStore.isFetching ? (
          <Spinner color="orange" />
        ) : (
          ProductStore.products.map(p => (
            <View key={p.id}>
              <Card>
                <CardItem
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <Text>{p.face}</Text>
                </CardItem>
              </Card>
              {ProductStore.countIndex()}
              {ProductStore.timeToShowAdCounter === 20 ? (
                <Advertisement />
              ) : (
                <></>
              )}
            </View>
          ))
        )}
        {ProductStore.isFetchingMore && <Spinner color="orange" />}
      </View>
    );
  }
}

export default inject("ProductStore")(observer(Id));
