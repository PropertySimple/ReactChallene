import React, { Component } from 'react';

class Cabecera extends Component {
  render () {
    return(
      <div>
        <h6>{ this.props.titulo }</h6>
      </div>
    );
  }
}

export default Cabecera;
