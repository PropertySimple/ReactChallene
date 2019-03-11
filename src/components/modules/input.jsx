import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import percIcon from "../../assets/img/percent.svg";
import NumberFormat from "react-number-format";

const Label = styled.label``;

const InputStyle = {
  display: "block",
  width: "100%",
  backgroundColor: "transparent",
  padding: "1rem",
  transition: "all 350ms ease",
  height: "3rem",
  fontSize: "1.2rem",
  border: "1px solid #999999",
  borderRadius: "0.5rem",
  appearance: "none",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1.2rem"
};
const InputStyleCustom = {
  display: "block",
  width: "100%",
  backgroundColor: "transparent",
  padding: "1rem",
  transition: "all 350ms ease",
  height: "3rem",
  fontSize: "1.2rem",
  border: "1px solid #999999",
  borderRadius: "0.5rem",
  appearance: "none",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1.2rem",
  backgroundImage: "url(" + percIcon + ")",
  backgroundPosition: "calc(100% - 1rem) 7px"
};

export default class Input extends Component {
  shouldComponentUpdate(prevProps) {
    return (
      prevProps.name !== this.props.name ||
      prevProps.handleFunc !== this.props.handleFunc ||
      prevProps.value !== this.props.value ||
      prevProps.title !== this.props.title ||
      prevProps.custom !== this.props.custom ||
      prevProps.disabled !== this.props.disabled
    );
  }
  render() {
    return (
      <Label>
        {this.props.title}
        <NumberFormat
          value={this.props.value}
          thousandSeparator={true}
          prefix={this.props.custom ? "" : "$"}
          name={this.props.name}
          style={this.props.custom ? InputStyleCustom : InputStyle}
          disabled={this.props.disabled ? true : false}
          onValueChange={values => {
            if (!this.props.handleFunc) return;
            this.props.handleFunc(values.value === "" ? 0 : values.value);
          }}
        />
      </Label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  custom: PropTypes.string,
  disabled: PropTypes.bool
};
