import React, { Component } from 'react';
import styled from 'styled-components'

const PieChart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default class extends Component {
  render() {
    return (
      <PieChart>
        <h4>Monthly Payment</h4>
      </PieChart>
    );
  }
}
