import React, { Component } from 'react';

class App extends Component {
  render() {
    //const greeting = "Hi, Tom!";
    //const dom = <h1 className="foo">{greeting}</h1>;
    //return dom;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!.")}} />
      </React.Fragment>
    )
    //return React.createElement( "div", null, "Hello, world");
  }
}

export default App;
