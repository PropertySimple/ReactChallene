import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../Header.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: 70%;
`;

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
