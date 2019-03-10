import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HolderChart extends Component {
  render() {
    return (
      <div className="chart-holder">
        <div className="legend">
          <h1>{this.props.headerValue}</h1>
          <span>{this.props.headerLegend}</span>
        </div>
        {this.props.children}
      </div>
    )
  }
}

HolderChart.propTypes = {
  headerValue: PropTypes.any,
  headerLeyend: PropTypes.string
}

