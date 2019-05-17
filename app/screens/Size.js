import React, { Component } from "react";
import { View, Text, Spinner, Card, CardItem } from "native-base";
import { inject, observer } from "mobx-react";
import ProductStore from "../stores/ProductStore";

class Size extends Component {
  async componentDidMount() {
    await this.props.navigation.addListener("didFocus", async () => {
      await ProductStore.loadProductsBySize();
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
                style={{
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <Text>{p.size}</Text>
              </CardItem>
            </Card>
          ))
        )}
        {ProductStore.isFetchingMore && <Spinner color="orange" />}
      </View>
    );
  }
}
export default inject("ProductStore")(observer(Size));
