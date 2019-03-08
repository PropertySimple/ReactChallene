import React, { Component } from 'react';
import styled from 'styled-components'
import Container from '../Container';
import Header from '../Header.js';

export default class extends Component {
  render() {
    return (
      <Container>
        <Header />
        <div>Main</div>
      </Container>
    );
  }
}
