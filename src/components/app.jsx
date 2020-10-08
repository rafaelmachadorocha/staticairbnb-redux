import React, { Component } from 'react';
import FlatList from "../containers/flat_list";
import Map from "../containers/map";
import Spinner from '../containers/spinner';

class App extends Component {
  render() {
    return (
      <div className="row" style={{width: "100%"}}>
        <Spinner />
        <FlatList />
        <Map />
      </div>
    )
  }

}

export default App;