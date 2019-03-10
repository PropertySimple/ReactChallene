import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart, XYPlot, ArcSeries, LabelSeries } from "react-vis";
import styled from "styled-components";

const Chart = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default class PieChart extends Component {
  render() {
    // debugger;
    return (
      <Chart>
        <RadialChart
          data={this.props.data}
          width={230}
          height={200}
          innerRadius={50}
          radius={80}
          showLabels
          colorType="category"
          colorDomain={[0, 1]}
          colorRange={["#ff3867", "#ffcb1f"]}
          labelsRadiusMultiplier={1.3}
          className={"sdsdfsdf"}
          animation
        />
      </Chart>
    );
  }
}

PieChart.propTypes = {
  header: PropTypes.any
};
