import React, { Component } from 'react';
import './App.css';

import {RadialChart} from 'react-vis';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class App extends Component {
  //-------------------------------------------------------------
  constructor(){
    super();
    this.state = {
      home_price: 0,
      porcent: 7,
      year: 30,
      pmi: 0,
      total: 0,
      dividendo: 0,

    };
    this.cambioInput = this.cambioInput.bind(this);
    this.check = this.check.bind(this);
  }
  //-------------------------------------------------------------
  cambioInput(e){
      e.preventDefault();
      //console.log(e.target.value, e.target.name);
      const { value, name} = e.target;

      this.setState( {[name]: parseInt(value)});

      var interes = (this.state.porcent / 100) / 12;
      var cuotas = this.state.year * 12;
      var interesFinal = Math.pow(interes + 1, cuotas);
      var final = this.state.home_price * ((interes * interesFinal ) / (interesFinal - 1));

      var dividendo = Math.floor(final + this.state.pmi);

      this.setState( { total : Math.floor(final) } );
      this.setState( { dividendo : dividendo } );

      console.log(this.state);
  }
  check(e){

      if( this.state.pmi == "0" ){
        //Verificamos el PMI y agregamos el 1% del total del prestamo
        let pmic = ((this.state.home_price / 100) * 1);
        this.setState( { pmi : pmic } );
        let sumando = Math.floor(pmic + this.state.total);
        this.setState( { dividendo : sumando } );

      } else {
        this.setState( { pmi : "0" } );
        this.setState( { dividendo : this.state.total } );
      }

  }
  //-------------------------------------------------------------
  render() {
    return (
      //--------------------------------------
      <div className="App">

      <div className="container">
      <hr/>

      <div className="row">
          <div className="col s12 m6">
              <div className="row">
                <div className="col s12 center">
                <h6 className="titulo"><strong>Affordability</strong></h6>
                <strong className="pagoMensual">${numberWithCommas(this.state.dividendo)}</strong><br/>
                <small>Montly Payment</small>
                </div>


                <div className="col s12 valign-wrapper">
                <span className="valign-wrapper">
                <RadialChart
                data={[
                {angle: this.state.pmi, label: 'PMI', radius: 10, innerRadius:6},
                {angle: this.state.total, label: 'P&I', radius: 10,innerRadius:6 },
              ]}
                width={280}
                height={280}
                colorType="category"
                colorRange={['#f15a29', '#ffcb1f']}
                animation={true}
                showLabels={true}
                 />
                  </span>
                </div>


              </div>


          </div>

          <div className="col s12 m6">

          <div className="row">
              <div className="col s8"><h6><strong>Principal & Interest</strong></h6></div>
              <div className="col s4"><h6><strong>${numberWithCommas(this.state.total)}/mo</strong></h6></div>
          </div>

          <div className="row">
            <div className="col s12">Home Price</div>
          </div>

          <div className="row">
            <div className="col s12">
              <input type="number" name="home_price" placeholder="$" onChange={this.cambioInput} />
            </div>
          </div>

          <div className="row">
            <div className="col s12">Interest Rate</div>
          </div>

          <div className="row">
            <div className="col s10">
                <input className="numeros" type="number" placeholder="7" name="porcent" onChange={this.cambioInput}/>
            </div>
            <div className="col s1">%</div>

          </div>

          <div className="row">
            <div className="col s12">Loan Detail</div>
          </div>

          <div className="row">
                <div className="col s12">
                <select name="year" className="browser-default custom-select " onChange={this.cambioInput}>
                  <option value="30">30 year fixed</option>
                  <option value="15">15 year fixed</option>
                  <option value="5">5 year fixed</option>
                </select>
                </div>
          </div>

          <div className="row">
              <div className="col s12">
              <label className="selector">
                <input type="checkbox" name="pmi" className="filled-in" onChange={this.check} />
                <span>Include PMI - ${numberWithCommas(this.state.pmi)}</span>
              </label>
              </div>
          </div>

          <button className="btn boton" onClick={this.cambioInput}>Calculate</button>

          </div>

      </div>
      <hr/>
      </div>

      </div>
      //--------------------------------------
    );

  }
}

export default App;
