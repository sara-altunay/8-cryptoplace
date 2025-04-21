import React from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const data = [
    ["Date", "Prices"],
    ...historicalData.map((item) => {
      
      const date = new Date(item.timestamp);
      
      const time = date.toLocaleDateString("tr", {
        day: "2-digit",
        month: "2-digit",
      });

    
      return [time, Number(item.price)];
    }),
  ];
  return <Chart chartType="LineChart" data={data} height="100%" />;
};

export default LineChart;
