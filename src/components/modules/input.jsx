import React from "react";
import PropTypes from "prop-types";
import percIcon from "../../assets/img/percent.svg";
import NumberFormat from "react-number-format";

// const InputStyle = styled.input`
//   display: block;
//   width: 100%;
//   background-color: transparent;
//   padding: 1rem;
//   transition: all 350ms ease;
//   height: 3rem;
//   background-color: #fff;
//   font-size: 1.2rem;
//   background-color: #fff;
//   border: 1px solid #999999;
//   transition: all 350ms ease;
//   border-radius: 0.5rem;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   -ms-appearance: none;
//   appearance: none;
//   background-image: ${props =>
//     props.custom ? "url(" + percIcon + ")" : "initial"};
//   background-position: ${props =>
//     props.custom ? "calc(100% - 1rem) 7px" : "initial"};
//   background-repeat: no-repeat;
//   background-size: 1.2rem;
// `;
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
        onValueChange={
          (values) => {
            const {value} = values;
            props.handledFunc(value);
          }
        }
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handledFunc: PropTypes.func,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  custom: PropTypes.string
};
