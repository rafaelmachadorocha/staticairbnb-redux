import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectFlat } from '../actions';

class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`,
      marginTop: "20px"
    };

    let classes = "flat card-container";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="card" style={style}>
          <h5 className="title-card" style={{color: 'rgb(40, 40, 40)', textShadow: '0 0 5px rgb(230, 230, 230)'}}><span>{this.props.flat.price}</span> <span>{this.props.flat.priceCurrency}</span></h5>
          <p className="description-card">{this.props.flat.name}</p>
        </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
  //this function makes the action avaiable in my container
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
//this function makes a parte of the redux state (in the store) avaiable in my component
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);