import React, { useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Chart from "./Chart";
import { chartInit, formInit } from "./helpers/initialValues";
import { getExpenseData } from "./helpers/utils";

function App() {
  const [chartVal, setChartVal] = useState(chartInit);
  return (
    <div className="ui container">
      <Header />
      <Chart
        init={chartVal}
        formVals={formInit}
        expenseData={getExpenseData(chartVal)}
      />
      <UserForm init={formInit} extractValues={setChartVal} />
    </div>
  );
}

export default App;
