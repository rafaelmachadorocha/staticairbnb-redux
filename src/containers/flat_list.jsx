import React, { Component } from 'react';
import Flat from "../components/flat"
class FlatList extends Component {

  static defaultProps = {
    flats: [{
    "name": "Charm at the Steps of Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR"
    }]
  }

  render() {
    return (
      <div className="flatlist col-7" style={{height: "100vh",}}>
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    )
  }

}

export default FlatList;