import React from "react";
import PropTypes from "prop-types";
import downArrow from "../../assets/img/down-arrow.svg";

export const Select = props => {
  const fillOptions = options => {
    return options.map(option => {
      return <option value={option.value}>{option.name}</option>;
    });
  };
  return (
    <label className="select">
      {props.title}
      <select
        name={props.name}
        value={props.value}
        onSelect={e => {
          props.handledFunc(e);
        }}
      >
        {fillOptions(props.options)}
      </select>
    </label>
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
