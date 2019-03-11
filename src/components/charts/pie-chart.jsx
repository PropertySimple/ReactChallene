import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart} from "react-vis";
import styled from "styled-components";

const Chart = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default class PieChart extends Component {

  shouldComponentUpdate = (prevProps) => {
    return prevProps.data !== this.props.data;
  }

  render() {
    // debugger;
    return (
      <Chart>
        <RadialChart
          data={this.props.data}
          width={230}
          height={230}
          innerRadius={50}
          radius={80}
          showLabels
          colorType="category"
          colorDomain={[0, 1]}
          colorRange={["#ff3867", "#ffcb1f"]}
          labelsRadiusMultiplier={this.props.data.labelsRadiusMultiplier}
          animation
          labelsStyle={{
            fontWeight: '700'
          }}
        />
      </Chart>
    );
  }
}

PieChart.propTypes = {
  data: PropTypes.any.isRequired
};
