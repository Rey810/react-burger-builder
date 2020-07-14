import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Hi!</p>
        </Layout>
      </div>
    );
  }
}

export default App;