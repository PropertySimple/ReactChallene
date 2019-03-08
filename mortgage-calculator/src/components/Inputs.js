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

const Circle = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.color ? props.color : '#ff3867'};
  border-radius: 50%;
  margin-right: 20px;
`;

const Title = styled.h4`
  font-weight: bold;
  margin: 0;
  margin-left: ${props => props.price ? "100px" : "0"};
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principalAndInterest: 1000,
      pmi: 155,
    }
  }

  render() {
    return (
      <Inputs>
        <Row><Circle color="#ff3867" /><Title>{"Principal & Interest"}</Title><Title price>{`$${this.state.principalAndInterest}/mo`}</Title></Row>
        <Row>{"Home Price"}</Row>
        <Row>{"Down Payment"}</Row>
        <Row>{"Loan Details"}</Row>
        <Row><Circle color="#ffcb1f" /><Title>{"Include PMI"}</Title></Row>
      </Inputs>
    );
  }
}
