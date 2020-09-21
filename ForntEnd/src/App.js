import React, { Component } from "react";
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";

class App extends Component {
  render() {
    return (
      <>

        {/* Header */}
        <Header />
        {/* TinderCards */}
        <TinderCards />
        {/* SwipeButtons */}
        <SwipeButton />
      </>
    );
  }
}
export default App;
