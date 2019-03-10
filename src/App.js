import React, { Component } from 'react';
import MortageCalculator from './components/mortage-calculator/mortage-calculator';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MortageCalculator title='Affordability'></MortageCalculator>
      </div>
    );
  }
}

export default App;
