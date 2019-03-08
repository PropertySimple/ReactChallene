import React, { Component } from 'react';
import styled from 'styled-components'

const Inputs = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin: 15px 0;
  height: 45px;
`;

const Title = styled.h4`
  font-weight: bold;
  margin: 0;
`;

export default class extends Component {
  render() {
    return (
      <Inputs>
        <Row><Title>{"Principal & Interest"}</Title></Row>
        <Row>{"Home Price"}</Row>
        <Row>{"Down Payment"}</Row>
        <Row>{"Loan Details"}</Row>
        <Row><Title>{"Include PMI"}</Title></Row>
      </Inputs>
    );
  }
}
