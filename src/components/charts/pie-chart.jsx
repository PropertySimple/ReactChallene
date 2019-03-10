import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart } from "react-vis";
import styled from 'styled-components';

const Chart = styled.div`
  display: flex;
  justify-content: flex-start;
`

export default class PieChart extends Component {
  render() {
    const myData = [
      { angle: 1, label: "P&I", subLabel: "sdd"},
      { angle: 1, label: "PMI" }
    ];
    return (
      <Chart>
        <RadialChart
          data={myData}
          width={230}
          height={200}
          innerRadius={50}
          radius={80}
          showLabels={true}
          colorType="category"
          colorDomain={[1, 0]}
          colorRange={["#ff3867", "#ffcb1f"]}
          labelsAboveChildren={true}
          labelsRadiusMultiplier={1.3}
        />
      </Chart>
    );
  }
}

PieChart.propTypes = {
  header: PropTypes.any
};
