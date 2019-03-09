import React, { Component } from 'react';
import Container from '../Container';
import Header from '../Header';
import Main from '../Main';

export default class extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    );
  }
}
