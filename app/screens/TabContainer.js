import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Container, Header, Footer, Content, Body, Title } from "native-base";
import TabNavigation from "../navigation/tab-navigation";

class TabContainer extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "orange" }} transparent>
          <Body>
            <Title>Product Grid</Title>
          </Body>
        </Header>
        <Content scrollEnabled={true}>
          <TabNavigation />
        </Content>
        <Footer style={{ backgroundColor: "orange" }} />
      </Container>
    );
  }
}
export default inject("ProductStore")(observer(TabContainer));
