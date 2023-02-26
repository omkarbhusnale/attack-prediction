import React, { Component } from 'react';
import CanvasJSReact from '../utils/canvasjs.react.js';
import data from "../DataCVE.json"


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class BarChart extends Component {
	render() {
		var uniqueNames = new Set();;
		for(let i = 0; i< data.length; i++){    
			if(!uniqueNames.has(data[i].Status)){
				uniqueNames.add(data[i].Status);
			}    
			
		}
		for(const item in uniqueNames)     
				console.log(item);
				
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Possibility of Attack Happened"
			},
			axisX: {
				title: "Types of Attack",
				reversed: true,
			},
			axisY: {
				title: "No of Attacks",
				includeZero: true,
				labelFormatter: this.addSymbols
			},

			
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  210076, label: "Fuzzers" },
					{ y:  180865, label: "U2R" },
					{ y:  80000, label: "DoS" },
					{ y:  563100, label: "DDoS" },
					{ y:  376000, label: "Reccon" },
					{ y:  33600, label: "Worms" },
					{ y:  33000, label: "XSS" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}

export default BarChart;