import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "../modules/input";
import { Select } from "../modules/select";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Container = styled.div`
  width: calc(100% - 24rem);
`;

const Row = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  width: 100%;
  align-items: ${props => (props.alignCenter ? "center" : "flex-end")};
`;

const Column = styled.div`
  width: ${props => props.width}
  padding : ${props => (props.padding ? props.padding : "")};
`;

const Color = styled(Column)`
  height: 1.8rem;
  border-radius: 50%;
  background: ${props =>
    props.color === "pink" ? props.theme.pink : props.theme.yellow};
`;

export default class MortageCalculatorInputs extends Component {
  getPrincipalAndInterest = () => {
    return (
      <Row alignCenter>
        <Color color={"pink"} width={"1.8rem"} />
        <Column width={"70%"} padding={"0 2rem"}>
          <h3>{"Principal & Interest"}</h3>
        </Column>
        <Column width={"30%"}>
          <NumberFormat
            value={this.props.pai}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={value => <h3>{value}</h3>}
          />
        </Column>
      </Row>
    );
  };

  getHomePrice = () => {
    return (
      <Row>
        <Column width={"1.8rem"} />
        <Column width={"70%"} padding={"0 2rem"}>
          <Input
            name={"home-price"}
            value={this.props.homePrice}
            title={"Home Price"}
            type={"text"}
            format={"USD"}
            handledFunc={this.props.handledHomePrice}
          />
        </Column>
        <Column width={"30%"} />
      </Row>
    );
  };

  getDownPayment = () => {
    return (
      <Row>
        <Column width={"1.8rem"} />
        <Column width={"70%"} padding={"0 2rem"}>
          <Input
            name={"down-payment"}
            value={this.props.downPayment}
            title={"Down Payment"}
            type={"text"}
            format={"USD"}
          />
        </Column>
        <Column width={"30%"}>
          <Input
            name={"down-payment"}
            value={this.props.downPaymentPerc}
            custom={"perc"}
            type={"text"}
          />
        </Column>
      </Row>
    );
  };

  getLoanDetails = () => {
    return (
      <Row>
        <Column width={"1.8rem"} />
        <Column width={"70%"} padding={"0 2rem"}>
          <Select
            name={"loan-details"}
            value={this.props.loanDetails}
            title={"Loan Details"}
            options={[
              { name: "10 Years fixed", value: 10 },
              { name: "15 Years fixed", value: 15 },
              { name: "20 Years fixed", value: 20 },
              { name: "25 Years fixed", value: 25 },
              { name: "30 Years fixed", value: 30 }
            ]}
          />
        </Column>
        <Column width={"30%"}>
          <Input
            name={"down-payment"}
            value={this.props.loanDetailsPerc}
            custom={"perc"}
            type={"text"}
          />
        </Column>
      </Row>
    );
  };

  getPMI = () => {
    return (
      <Row alignCenter>
        <Color color="yellow" width={"1.8rem"} />
        <Column width={"70%"} padding={"0 2rem"}>
          <h3>Include PMI</h3>
        </Column>
        <Column width={"30%"} />
      </Row>
    );
  };

  render = () => {
    return (
      <Container>
        {this.getPrincipalAndInterest()}
        {this.getHomePrice()}
        {this.getDownPayment()}
        {this.getLoanDetails()}
        {this.getPMI()}
      </Container>
    );
  };
}

MortageCalculatorInputs.propTypes = {
  pai: PropTypes.string
};

MortageCalculatorInputs.defaultProps = {
  pai: "$1,262/mo"
};
