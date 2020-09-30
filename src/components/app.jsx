import React, { Component } from 'react';
import FlatList from "../containers/flat_list";
import Map from "../containers/map";

class App extends Component {
  render() {
    return (
      <div className="row" style={{width: "100%"}}>
        <FlatList />
        <Map />
      </div>
    )
  }

}

export default App;