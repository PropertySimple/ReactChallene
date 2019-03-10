import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart } from "react-vis";

export default class PieChart extends Component {
  render() {
    const myData = [
      { angle: 1, label: "P&I", subLabel: "sdd"},
      { angle: 1, label: "PMI" }
    ];
    return (
      <div className="chart">
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
      </div>
    );
  }
}

PieChart.propTypes = {
  header: PropTypes.any
};
