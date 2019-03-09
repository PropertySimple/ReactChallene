import React, { Component } from 'react';
import styled from 'styled-components'
import { RadialChart } from 'react-vis';
import NumberFormat from 'react-number-format';

const PieChart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  width: 400px;

  text {
    font-size: 16px;
    font-weight: 600;
  }

  text:nth-child(odd) {
    fill: #999999;
    transform: translate(0, -4px);
  }
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
    const { principalAndInterest, pmi } = this.props;

    const values = [
      {
        angle: 360 * principalAndInterest / (principalAndInterest + pmi), 
        label: 'P&I', 
        subLabel: <NumberFormat value={principalAndInterest} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} />,
        color:'#ff3867'}, 
      {
        angle: 360 * pmi / (principalAndInterest + pmi), 
        label: 'PMI', 
        subLabel: <NumberFormat value={pmi} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} />,
        color:'#ffcb1f'
      }
    ];

    return (
      <PieChart>
        <MonthlyPayment>
          <NumberFormat value={principalAndInterest + pmi} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </MonthlyPayment>
        <Title>Monthly Payment</Title>
        {principalAndInterest 
          ? 
            <RadialChart
              data={values}
              colorType="literal"
              showLabels={true}
              labelsRadiusMultiplier={1.5}
              innerRadius={70}
              radius={100}
              width={360}
              height={320} /> 
          : 
            ''}
      </PieChart>
    );
  }
}
