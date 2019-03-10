import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import checkIcon from "../../assets/img/checked.svg"

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Input = styled.div`
  background: ${props => props.theme.yellow};
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
  background-image: ${props => props.checked?'url('+checkIcon+')':'initial'};
  background-size: 10px;
  background-position: 3px 3px;
  background-repeat: no-repeat;
`;

export class Checkbox extends Component {
  check = React.createRef({});
  render() {
    return (
      <Label>
        <Input
          type="checkbox"
          checked={this.props.value}
          onClick={() => {
            this.props.handleFunc(this.props.value);
          }}
        />
        {this.props.title}
      </Label>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  handleFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  custom: PropTypes.string,
  disabled: PropTypes.bool
};
