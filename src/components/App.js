import React from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Chart from "./Chart";
import GraphContext from "../contexts/GraphContext";
import { values } from "./helpers/initialValues";
const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Chart />
      <GraphContext.Provider value={values}>
        <UserForm />
      </GraphContext.Provider>
    </div>
  );
};

export default App;
