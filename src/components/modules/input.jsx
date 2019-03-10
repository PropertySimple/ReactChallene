import React from "react";
import PropTypes from "prop-types";
import percIcon from "../../assets/img/percent.svg";
import NumberFormat from "react-number-format";

const InputStyle = {
  display: 'block',
  width: '100%',
  backgroundColor: 'transparent',
  padding: '1rem',
  transition: 'all 350ms ease',
  height: '3rem',
  fontSize: '1.2rem',
  border: '1px solid #999999',
  borderRadius: '0.5rem',
  appearance: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.2rem'
};
const InputStyleCustom = {
  display: 'block',
  width: '100%',
  backgroundColor: 'transparent',
  padding: '1rem',
  transition: 'all 350ms ease',
  height: '3rem',
  fontSize: '1.2rem',
  border: '1px solid #999999',
  borderRadius: '0.5rem',
  appearance: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.2rem',
  backgroundImage: "url(" + percIcon + ")",
  backgroundPosition: "calc(100% - 1rem) 7px"
};

export const Input = props => {
  return (
    <label className={props.customClass}>
      {props.title}
      <NumberFormat
        value={props.value}
        thousandSeparator={true}
        prefix={props.custom?'':'$'}
        name={props.name}
        style={props.custom?InputStyleCustom:InputStyle}
        disabled={props.disabled?true:false}
        onValueChange={
          (values) => {
            if(!props.handleFunc) return;
            props.handleFunc(values.value===""?0:values.value);
          }
        }
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  custom: PropTypes.string,
  disabled: PropTypes.bool
};
