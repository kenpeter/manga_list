import React, { Component } from 'react';

class ImgItem extends Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    return (
      <div>
        title: {this.props.title}, hit: {this.props.hit}
      </div>
      
    );
  }
}

export default ImgItem;
