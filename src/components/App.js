import React from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Chart from "./Chart";
const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Chart />
      <UserForm />
    </div>
  );
};

export default App;
