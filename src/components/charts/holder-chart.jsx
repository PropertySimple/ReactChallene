import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const ChartHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 23rem;
  margin-right: 4rem;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  color: ${props => props.theme.lightGray};
  font-weight: 700;
  font-size: 1.4rem;
`;

const H1 = styled.h1`
  margin-bottom: -0.8rem;
`;

export default class HolderChart extends Component {
  shouldComponentUpdate = prevProps => {
    return (
      prevProps.headerValue !== this.props.headerValue ||
      prevProps.headerLeyend !== this.props.headerLeyend ||
      prevProps.children !== this.props.children
    );
  };

  render() {
    return (
      <ChartHolder>
        <Legend>
          <NumberFormat
            value={this.props.headerValue}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={value => <H1>{value}</H1>}
          />
          <Span>{this.props.headerLegend}</Span>
        </Legend>
        {this.props.children}
      </ChartHolder>
    );
  }
}

HolderChart.propTypes = {
  headerValue: PropTypes.any,
  headerLeyend: PropTypes.string,
  children: PropTypes.any.isRequired
};
