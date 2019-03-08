import React, { Component } from 'react';
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class extends Component {
  render() {
    return (
      <Main>Main</Main>
    );
  }
}
