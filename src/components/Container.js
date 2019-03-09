import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: 80%;
`;

export default class extends Component {
  render() {
    return (
      <Container>{this.props.children}</Container>
    );
  }
}
