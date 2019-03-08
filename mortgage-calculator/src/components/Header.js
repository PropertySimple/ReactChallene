import React, { Component } from 'react';
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class extends Component {
  render() {
    return (
      <Header><h2>Affordability</h2></Header>
    );
  }
}
