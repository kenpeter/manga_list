import React, { Component } from 'react';

class ImgItem extends Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    return (
      <div>
        <img src={this.props.imgUrl} />
        <p>title: {this.props.title}, hit: {this.props.hit}</p>
      </div>
      
    );
  }
}

export default ImgItem;
