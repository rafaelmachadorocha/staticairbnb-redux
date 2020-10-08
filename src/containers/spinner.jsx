import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class Spinner extends Component {

  render(){

    let classes ="spinner"
    if (this.props.displaySpinner) {
      classes += ' display-none';
    }

    return (
      <div className={classes}>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return { 
   displaySpinner: state.displaySpinner
  };
}


export default connect(mapStateToProps)(Spinner);