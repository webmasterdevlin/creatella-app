import React, { Component } from "react";
import { View, Text, Spinner, Card, CardItem } from "native-base";
import { inject, observer } from "mobx-react";
import ProductStore from "../stores/ProductStore";
class Price extends Component {
  async componentDidMount() {
    // await ProductStore.loadProductsByPrice();
    await this.props.navigation.addListener("didFocus", async () => {
      await ProductStore.loadProductsByPrice();
    });
  }
  render() {
    return (
      <View>
        {ProductStore.isFetching ? (
          <Spinner color="orange" />
        ) : (
          ProductStore.products.map(p => (
            <Card key={p.id}>
              <CardItem
                onEndReached
                onEndReachedThreshold={0.75}
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <Text>{p.price}</Text>
              </CardItem>
            </Card>
          ))
        )}
        {ProductStore.isFetchingMore && <Spinner color="orange" />}
      </View>
    );
  }
}
export default inject("ProductStore")(observer(Price));
