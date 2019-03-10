import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HolderChart from '../charts/holder-chart';
import MortageCalculatorInputs from './mortage-calculator-inputs';
import PieChart from '../charts/pie-chart';

export default class MortageCalculator extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>{this.props.title}</h2>
        <div className="mortage-calculator">
          <HolderChart headerValue={'$1,313'} headerLegend={'Monthly Payment'}>
            <PieChart></PieChart>
          </HolderChart>
          <MortageCalculatorInputs />
        </div>
      </div>
    )
  }
}

MortageCalculator.propTypes = {
  title: PropTypes.string
}

MortageCalculator.defaultProps = {
  title: 'Affordability'
}
