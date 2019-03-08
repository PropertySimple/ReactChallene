import React, { Component } from 'react';
import styled from 'styled-components'
import { RadialChart } from 'react-vis';

const PieChart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  align-items: center;
`;

const MonthlyPayment = styled.h1`
  margin-top: 15px;
  margin-bottom: 0;
`;

const Title = styled.h4`
  margin-top: 5px;
  font-weight: normal;
`;

export default class extends Component {
  render() {
    const values = [
      {
        angle: 300, 
        label: 'P&I', 
        subLabel: `$${this.props.principalAndInterest}`, 
        color:'#ff3867'}, 
      {
        angle: 60, 
        label: 'PMI', 
        subLabel: `$${this.props.pmi}`, 
        color:'#ffcb1f'
      }
    ];

    return (
      <PieChart>
        <MonthlyPayment>${this.props.principalAndInterest + this.props.pmi}</MonthlyPayment>
        <Title>Monthly Payment</Title>
        <RadialChart
          data={values}
          colorType="literal"
          showLabels={true}
          labelsRadiusMultiplier={1.5}
          innerRadius={70}
          radius={100}
          width={360}
          height={300} />
      </PieChart>
    );
  }
}
