import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import arrow from "../../assets/img/down-arrow.svg";

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SelectStyle = styled.select`
  display: block;
  width: 100%;
  background-color: transparent;
  padding: 0 1rem;
  transition: all 350ms ease;
  height: 3rem;
  background-color: #fff;
  font-size: 1.2rem;
  background-color: #fff;
  border: 1px solid #999999;
  transition: all 350ms ease;
  border-radius: 0.5rem;
  background-image: url(${arrow});
  background-position: calc(100% - 1rem) 4px;
  background-repeat: no-repeat;
  background-size: 2.2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
`;

export class Select extends Component {
  shouldComponentUpdate = prevProps => {
    return (
      prevProps.name !== this.props.name ||
      prevProps.handleFunc !== this.props.handleFunc ||
      prevProps.value !== this.props.value ||
      prevProps.title !== this.props.title ||
      prevProps.options !== this.props.options
    );
  };

  fillOptions = options => {
    return options.map(option => {
      return this.props.value === option.value ? (
        <option selected value={option.value}>
          {option.name}
        </option>
      ) : (
        <option value={option.value}>{option.name}</option>
      );
    });
  };
  render = () => {
    return (
      <Label>
        {this.props.title}
        <SelectStyle
          name={this.props.name}
          onChange={e => {
            this.props.handleFunc(e.currentTarget.value);
          }}
        >
          {this.fillOptions(this.props.options)}
        </SelectStyle>
      </Label>
    );
  };
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  handleFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  options: PropTypes.array.isRequired
};
