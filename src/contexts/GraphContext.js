import React from "react";

//TODO Import some default values formatted from utils so that chart starts with some example info but
//form isnt populated

// setting up as a class componenet then refactoring with hooks

const Context = React.createContext([1500, 1400, 20]);

export class GraphStore extends React.Component {
  state = { values: [1500, 1400, 20] };

  insertGraphValues = values => {
    console.log("called");
    //console.log("called", values);
    //this.setState({ values });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, insertGraphValues: this.insertGraphValues }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export const insertGraphValues = values => {
//   console.log("called", values);
// };

export default Context;
