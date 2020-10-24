import React, { Component } from 'react';

export default class DisplayNumber extends Component {
    render() {
        const { number } = this.props;
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={number} readOnly/>
        </div>
      )
    }
  }