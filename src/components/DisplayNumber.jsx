import React, { Component } from 'react';

export default class DisplayNumber extends Component {
  
    render() {
      const { size } = this.props;

      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={ size } readOnly/>{this.props.unit}
        </div>
      )
    }
  }