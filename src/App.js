import React, { Component } from "react";
import Header from './Header';
import TinderCards from "./TinderCards";

class App extends Component {
  render() {
    return (
      <>

        {/* Header */}
        <Header />
        {/* TinderCards */}
        <TinderCards />
        {/* SwipeButtons */}
      </>
    );
  }
}
export default App;
