import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import percIcon from "../../assets/img/percent.svg";

const InputStyle = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  transition: all 350ms ease;
  height: 3rem;
  background-color: #fff;
  font-size: 1.2rem;
  background-color: #fff;
  border: 1px solid #999999;
  transition: all 350ms ease;
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-image: ${props => (props.custom ? 'url('+percIcon+')' : 'initial')};
  background-position: ${props => (props.custom ? 'calc(100% - 1rem) 7px' : 'initial')};
  background-repeat: no-repeat;
  background-size: 1.2rem;
`;

export const Input = props => {
  return (
    <label className={props.customClass}>
      {props.title}
      <InputStyle
        type={props.type}
        custom={props.customClass}
        name={props.name}
        value={props.value}
        onChange={() => {
          props.handledFunc();
        }}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handledFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  customClass: PropTypes.string
};
