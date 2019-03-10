import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HolderChart from '../charts/holder-chart';
import MortageCalculatorInputs from './mortage-calculator-inputs';
import PieChart from '../charts/pie-chart';
import styled from 'styled-components'

const H2 = styled.h2`
  margin-bottom: 1.2rem;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 88rem;
  padding: 1.2rem 2rem;
  border: 0.1rem solid ${props => props.theme.lightGray};
  border-radius: 0.6rem;
  box-shadow: 0.5rem 0.5rem 1rem 0rem ${props => props.theme.lightGray};
`

const Container = styled.div`
  display: flex;
`

export default class MortageCalculator extends Component {
  state = {
    pai:0,
    homePrice:0,
    downPayment: 0,
    downPaymentPerc: 0,
    loadDetails: 0,
    loanDetailsPerc: 0,
    isPMI: false,
    monthlyPayment: 0,
    PMI: 0
  }

  handledHomePrice = (value) => {
    this.setState({homePrice:Number.parseFloat(value)});
  }

  // handledDownPayment = (value) => {
  //   this.setState({downPayment:Number.parseFloat(value)});
  // }

  // handled = (e) => {
  //   this.setState({homePrice:Number.parseFloat(e)});
  // }

  render = () => {
    return (
      <Wrapper>
        <H2>{this.props.title}</H2>
        <Container>
          <HolderChart headerValue={this.state.pai} headerLegend={'Monthly Payment'}>
            <PieChart></PieChart>
          </HolderChart>
          <MortageCalculatorInputs 
          {...this.state}
          handledHomePrice={this.handledHomePrice}
          />
        </Container>
      </Wrapper>
    )
  }
}

MortageCalculator.propTypes = {
  title: PropTypes.string
}

MortageCalculator.defaultProps = {
  title: 'Affordability'
}
