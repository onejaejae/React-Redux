import React, { Component } from 'react';
import store from '../store';

export default class DisplayNumber extends Component {
    state = {
      number : store.getState().size
    }
  
    // state의 값이 변경되면 render 함수가 호출되도록 subscribe를 사용함
    constructor(props){
      super(props)
      store.subscribe(()=>{
        this.setState({number : store.getState().size})
      })
    }
  
    render() {
     
        const { number } = this.state;
     
      return (
        <div>
          <h1>Display Number</h1>
          <input type="text" value={number} readOnly/>
        </div>
      )
    }
  }