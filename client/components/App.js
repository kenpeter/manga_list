import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import ImgList from "./ImgList";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Container it transforms */}
        <Container>
          <h1>Hello, World?</h1>
          <ImgList />
        </Container>
      </div>
    );
  }
}
