import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../modules/input";
import { Select } from "../modules/select";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { Checkbox } from "../modules/checkbox";

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
  shouldComponentUpdate = prevProps => {
    return (
      prevProps.pai !== this.props.pai ||
      prevProps.homePrice !== this.props.homePrice ||
      prevProps.handleHomePrice !== this.props.handleHomePrice ||
      prevProps.downPayment !== this.props.downPayment ||
      prevProps.handleDownPayment !== this.props.handleDownPayment ||
      prevProps.downPaymentRate !== this.props.downPaymentRate ||
      prevProps.handleDownPaymentRate !== this.props.handleDownPaymentRate ||
      prevProps.loanDetails !== this.props.loanDetails ||
      prevProps.loanDetailsOptions !== this.props.loanDetailsOptions ||
      prevProps.handleLoanDetails !== this.props.handleLoanDetails ||
      prevProps.loanDetailsRate !== this.props.loanDetailsRate ||
      prevProps.isPMI !== this.props.isPMI ||
      prevProps.handleIsPMI !== this.props.handleIsPMI
    );
  };

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
            suffix={"/mo"}
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
            handleFunc={this.props.handleHomePrice}
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
            handleFunc={this.props.handleDownPayment}
          />
        </Column>
        <Column width={"30%"}>
          <Input
            name={"down-payment"}
            value={this.props.downPaymentRate}
            custom={"rate"}
            type={"text"}
            handleFunc={this.props.handleDownPaymentRate}
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
            options={this.props.loanDetailsOptions}
            handleFunc={this.props.handleLoanDetails}
          />
        </Column>
        <Column width={"30%"}>
          <Input
            name={"down-payment"}
            value={this.props.loanDetailsRate}
            custom={"rate"}
            type={"text"}
            disabled={true}
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
          <Checkbox
            name={"pmi"}
            title={"Include PMI"}
            handleFunc={this.props.handleIsPMI}
            value={this.props.isPMI}
          />
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
  pai: PropTypes.number.isRequired,
  homePrice: PropTypes.number.isRequired,
  handleHomePrice: PropTypes.func.isRequired,
  downPayment: PropTypes.number.isRequired,
  handleDownPayment: PropTypes.func.isRequired,
  downPaymentRate: PropTypes.number.isRequired,
  handleDownPaymentRate: PropTypes.func.isRequired,
  loanDetails: PropTypes.number.isRequired,
  loanDetailsOptions: PropTypes.array.isRequired,
  handleLoanDetails: PropTypes.func.isRequired,
  loanDetailsRate: PropTypes.number.isRequired,
  isPMI: PropTypes.bool.isRequired,
  handleIsPMI: PropTypes.func.isRequired
};
