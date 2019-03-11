import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import informationIcon from "../../assets/img/information.svg";

const SpanTooltip = styled.span`
  position: absolute;
  background: ${props => props.theme.gray};
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  bottom: 5px;
  left: 13px;
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const Span = styled.span`
  background-image: url(${informationIcon});
  width: 1.2rem;
  height: 1.4rem;
  background-repeat: no-repeat;
  background-position: 0px 2px;
  cursor: pointer;
  margin-left: 0.2rem;
  position: relative;
  &:hover ${SpanTooltip} {
    opacity: 1;
  }
`;

export class Tooltip extends Component {
  shouldComponentUpdate = (prevProps, prevStates) => {
    return prevProps.description !== this.props.description;
  };

  render = () => {
    return (
      <React.Fragment>
        <Span>
          <SpanTooltip>
            <p>{this.props.description}</p>
          </SpanTooltip>
        </Span>
      </React.Fragment>
    );
  };
}

Tooltip.propTypes = {
  description: PropTypes.string.isRequired
};
