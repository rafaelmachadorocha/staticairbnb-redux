import React, { Component } from 'react';
import Flat from "./flat"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from '../actions';


class FlatList extends Component {



 // static defaultProps = {
 //   flats: [{
 //   "name": "Charm at the Steps of Montmartre",
 //    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
 //   "price": 164,
  //  "priceCurrency": "EUR"
 //  }]
 // }

  UNSAFE_componentWillMount() {
    this.props.setFlats();
    //dispatch an action to update the Redux state tree and the list of Flats
  }

  render() {
    return (
      <div className="flatlist col-7" style={{height: "100vh",}} onClick={this.handleClick}>
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
  //this function makes the action avaiable in my container
}

function mapReduxStateToProps(reduxState) {
  return {
  flats: reduxState.flats
  };
//this function makes a parte of the redux state (in the store) avaiable in my component
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);