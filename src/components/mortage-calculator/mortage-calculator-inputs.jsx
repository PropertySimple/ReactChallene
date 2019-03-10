import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../modules/input';
import { Select } from '../modules/select';

export default class MortageCalculatorInputs extends Component {

  getPrincipalAndInterest = () => {
    return (
      <div className="input align-center">
        <div className="color pink"></div>
        <div><h3>{'Principal & Interest'}</h3></div>
        <div><h3>{this.props.pai}</h3></div>
      </div>
    )
  }

  getHomePrice = () => {
    return (
      <div className="input">
        <div className="color"></div>
        <div>
          <Input
            name={'home-price'}
            value={'234'}
            title={'Home Price'}
            type={'text'}
          />
        </div>
        <div></div>
      </div>
    )
  }

  getDownPayment = () => {
    return (
      <div className="input">
        <div className="color"></div>
        <div>
          <Input
            name={'down-payment'}
            value={'234'}
            title={'Down Payment'}
            type={'text'}
          />
        </div>
        <div>
          <Input
            name={'down-payment'}
            value={'15'}
            customClass={'perc'}
            type={'text'}
          />
        </div>
      </div>
    )
  }

  getLoanDetails = () => {
    return (
      <div className="input">
        <div className="color"></div>
        <div>
          <Select
            name={'loan-details'}
            value={'4.007'}
            title={'Loan Details'}
            options={[
              {name:'10 Years fixed',value:10},
              {name:'15 Years fixed',value:15},
              {name:'20 Years fixed',value:20},
              {name:'25 Years fixed',value:25},
              {name:'30 Years fixed',value:30}
            ]}
          />
        </div>
        <div>
          <Input
            name={'down-payment'}
            value={'4.007'}
            customClass={'perc'}
            type={'text'}
          />
        </div>
      </div>
    )
  }

  getPMI = () => {
    return (
      <div className="input align-center">
        <div className="color yellow"></div>
        <div>
          <h3>Include PMI</h3>
        </div>
        <div>
        </div>
      </div>
    )
  }

  render = () => {
    return (
      <div className="inputs">
        {this.getPrincipalAndInterest()}
        {this.getHomePrice()}
        {this.getDownPayment()}
        {this.getLoanDetails()}
        {this.getPMI()}
      </div>
    )

  }
}

MortageCalculatorInputs.propTypes = {
  pai: PropTypes.string
}

MortageCalculatorInputs.defaultProps = {
  pai: '$1,262/mo'
}
