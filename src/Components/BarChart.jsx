import React, { Component } from "react";
import CanvasJSReact from "../utils/canvasjs.react.js";
import data from "../DataCVE.json";
import { Container } from "semantic-ui-react";


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
  render() {
    var uniqueNames = new Set();
    for (let i = 0; i < data.length; i++) {
      if (!uniqueNames.has(data[i].Status)) {
        uniqueNames.add(data[i].Status);
      }
    }
    for (const item in uniqueNames) console.log(item);

    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Possibility that Attack Happened",
      },
      axisX: {
        title: "Types of Attack",
        reversed: true,
      },
      axisY: {
        title: "No of Attacks",
        includeZero: true,
        labelFormatter: this.addSymbols,
      },

      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 2106, label: "Fuzzers" },
            { y: 1805, label: "U2R" },
            { y: 8080, label: "DoS" },
            { y: 5100, label: "DDoS" },
            { y: 3700, label: "Reccon" },
            { y: 3600, label: "Worms" },
            { y: 3300, label: "XSS" },
          ],
        },
      ],
    };
    return (
      <>
        <Container >
          <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        </Container>
      </>
    );
  }
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

}
export default BarChart;
