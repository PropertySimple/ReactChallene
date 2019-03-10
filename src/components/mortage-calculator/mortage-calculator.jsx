import React, { Component } from "react";
import PropTypes from "prop-types";
import HolderChart from "../charts/holder-chart";
import MortageCalculatorInputs from "./mortage-calculator-inputs";
import PieChart from "../charts/pie-chart";
import styled from "styled-components";

const H2 = styled.h2`
  margin-bottom: 1.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 88rem;
  padding: 1.2rem 2rem;
  border: 0.1rem solid ${props => props.theme.lightGray};
  border-radius: 0.6rem;
  box-shadow: 0.5rem 0.5rem 1rem 0rem ${props => props.theme.lightGray};
`;

const Container = styled.div`
  display: flex;
`;

export default class MortageCalculator extends Component {
  state = {
    pai: 0,
    homePrice: 100000,
    downPayment: 0,
    downPaymentRate: 0,
    loanDetailsOptions: [
      { name: "15 Years fixed", value: 15, interest: 4 },
      { name: "20 Years fixed", value: 20, interest: 5.5 },
      { name: "30 Years fixed", value: 30, interest: 7 }
    ],
    loanDetails: 30,
    loanDetailsRate: 7,
    isPMI: true,
    monthlyPayment: 0,
    PMI: 0
  };

  //HANDLE
  handleHomePrice = value => {
    this.setState({ homePrice: Number.parseFloat(value) }, () => {
      this.calcDownPaymentRate();
      this.calcMonthPayment();
    });
  };
  handleDownPayment = value => {
    this.setState({ downPayment: Number.parseFloat(value) }, () => {
      this.calcDownPaymentRate();
      this.calcMonthPayment();
    });
  };
  handleDownPaymentRate = value => {
    this.setState({ downPaymentRate: Number.parseFloat(value) }, () => {
      this.calcDownPayment();
      this.calcMonthPayment();
    });
  };
  handleLoanDetails = value => {
    const loanDetailsRate = this.state.loanDetailsOptions.find(
      val => val.value === Number.parseFloat(value)
    ).interest;
    this.setState(
      { loanDetails: Number.parseFloat(value), loanDetailsRate },
      () => {
        this.calcMonthPayment();
      }
    );
  };
  handleIsPMI = value => {
    this.setState(
      {
        isPMI: !value
      },
      () => {
        this.calcMonthPayment();
      }
    );
  };
  //CALCULATE
  calcDownPaymentRate = () => {
    const { homePrice, downPayment } = this.state,
      downPaymentRate = (downPayment * 100) / homePrice;
    this.setState({
      downPaymentRate
    });
  };
  calcDownPayment = () => {
    const { homePrice, downPaymentRate } = this.state,
      downPayment = (homePrice / 100) * downPaymentRate;
    this.setState({
      downPayment
    });
  };
  calcMonthPayment = () => {
    const {
        homePrice,
        downPayment,
        loanDetailsRate,
        loanDetails,
        isPMI
      } = this.state,
      P = homePrice - downPayment,
      r = loanDetailsRate / 100 / 12,
      Y = loanDetails * 12;
    // const pai = [ P(1 + r)Yr ] / [ (1 + r)Y - 1 ];
    const pai = Math.round(
      (P * r * Math.pow(1 + r, Y)) / (Math.pow(1 + r, Y) - 1)
    );
    const PMI = isPMI ? Math.round((P * 0.01) / 12) : 0;
    const monthlyPayment = isPMI ? Math.round(PMI + pai) : pai;
    this.setState({ pai, PMI, monthlyPayment });

  };
  createDataChart = () => {
    const { isPMI, PMI, pai} = this.state,
      dataOut = [];
    if (isPMI) {
      dataOut.push({
        angle: 1,
        label: `PMI ${PMI}` 
      });
    }
    dataOut.push({
      angle: 4, label: `P&I ${pai}` 
    })
    return dataOut;
  };

  render = () => {
    return (
      <Wrapper>
        <H2>{this.props.title}</H2>
        <Container>
          <HolderChart
            headerValue={this.state.monthlyPayment}
            headerLegend={"Monthly Payment"}
          >
            <PieChart
              data={this.createDataChart()}
            />
          </HolderChart>
          <MortageCalculatorInputs
            {...this.state}
            handleHomePrice={this.handleHomePrice}
            handleDownPayment={this.handleDownPayment}
            handleDownPaymentRate={this.handleDownPaymentRate}
            handleLoanDetails={this.handleLoanDetails}
            handleIsPMI={this.handleIsPMI}
          />
        </Container>
      </Wrapper>
    );
  };
}

MortageCalculator.propTypes = {
  title: PropTypes.string
};

MortageCalculator.defaultProps = {
  title: "Affordability"
};
