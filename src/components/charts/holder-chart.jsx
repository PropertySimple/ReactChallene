import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChartHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  margin-right: 4rem;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  color: ${props => props.theme.gray};
  font-weight: 700;
  font-size: 1.4rem;
`;

export default class HolderChart extends Component {
  render() {
    return (
      <ChartHolder>
        <Legend>
          <h1>{this.props.headerValue}</h1>
          <Span>{this.props.headerLegend}</Span>
        </Legend>
        {this.props.children}
      </ChartHolder>
    );
  }
}

HolderChart.propTypes = {
  headerValue: PropTypes.any,
  headerLeyend: PropTypes.string
};
