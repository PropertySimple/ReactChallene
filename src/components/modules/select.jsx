import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import arrow from '../../assets/img/down-arrow.svg';

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`

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
`

export const Select = props => {
  const fillOptions = options => {
    return options.map(option => {
      return <option value={option.value}>{option.name}</option>;
    });
  };
  return (
    <Label>
      {props.title}
      <SelectStyle
        name={props.name}
        value={props.value}
        onSelect={e => {
          props.handledFunc(e);
        }}
      >
        {fillOptions(props.options)}
      </SelectStyle>
    </Label>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  handledFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  customClass: PropTypes.string,
  options: PropTypes.array.isRequired
};
