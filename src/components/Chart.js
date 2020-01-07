import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { objNameToArr } from "./helpers/utils";
import { expenseColors, hoverColors } from "./helpers/initialValues";

const Chart = props => {
  const costData = {
    labels: objNameToArr(props.formVals),
    datasets: [
      {
        data: props.init,
        backgroundColor: expenseColors,
        hoverBackgroundColor: hoverColors
      }
    ]
  };
  const expenseData = {
    labels: ["Total Income", "Total Expenses"],
    datasets: [
      {
        data: props.expenseData,
        backgroundColor: ["#4BC0C0", "#FFCE56"],
        hoverBackgroundColor: hoverColors
      }
    ]
  };
  return (
    <div>
      <h2>Budget Breakdown:</h2>
      <div className="ui grid">
        <div className="eight wide column">
          <h4>Income vs Expenses:</h4>
          <Bar
            data={expenseData}
            options={{
              legend: false
            }}
          />
        </div>
        <div className="eight wide column">
          <h4>Monthly Expenses:</h4>
          <Pie
            data={costData}
            options={{
              legend: false
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
