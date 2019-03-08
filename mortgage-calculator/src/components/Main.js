import React, { Component } from 'react';
import styled from 'styled-components'
import PieChart from './PieChart';
import Inputs from './Inputs';

const Main = styled.div`
  display: flex;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principalAndInterest: 1000,
      pmi: 155,
    }
  }

  updateValues = (principalAndInterest, pmi) => {
    this.setState({ principalAndInterest, pmi })
  }

  render() {
    const { principalAndInterest, pmi  } = this.state; 

    return (
      <Main>
        <PieChart principalAndInterest={principalAndInterest} pmi={pmi} />
        <Inputs updateValues={this.updateValues} />
      </Main>
    );
  }
}
