import React from 'react'
import PropTypes from 'prop-types'

export const Input = props => {
    return (
        <label className={props.customClass}>
            {props.title}
            <input type={props.type} className={props.customClass} name={props.name} value={props.value} onChange={() => { props.handledFunc() }} />
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handledFunc: PropTypes.func,
    value: PropTypes.any.isRequired,
    title: PropTypes.string, 
    customClass: PropTypes.string
}
