import React, { useContext } from "react";
import GraphContext from "../contexts/GraphContext";

const Chart = () => {
  const graphInfo = useContext(GraphContext);
  return (
    <div>
      <h2>Chart Will Go Here</h2>
      <h3>Should display some info here: {graphInfo}</h3>
    </div>
  );
};

export default Chart;
