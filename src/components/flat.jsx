import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`,
      marginTop: "20px"
    };
    return (
      <div className="flat card-container">
        <div className="card" style={style}>
          <h2 className="title-card" style={{color: 'rgb(40, 40, 40)', textShadow: '0 0 5px rgb(230, 230, 230)'}}><span>{this.props.flat.price}</span> <span>{this.props.flat.priceCurrency}</span></h2>
          <p className="description-card">{this.props.flat.name}</p>
        </div>
      </div>
    )
  }

}

export default Flat;