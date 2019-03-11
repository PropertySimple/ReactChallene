import React, { Component } from 'react';

class SelectPage extends Component {
  render () {
    return(
      <div>
        <select name="year" className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="30">30 year fixed</option>
          <option value="15">15 year fixed</option>
          <option value="5">5 year fixed</option>
        </select>
      </div>
    );
  }
}

export default SelectPage;
