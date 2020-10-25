import React, { Component } from 'react';
import store from '../store';

export default class AddNumber extends Component {
    state = {
       size : 1
    }

    handleChange = (e) => {
        this.setState({
            size : Number(e.target.value)
        })
    }
    
    render() {
        const { size } = this.state;
        
      return (
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+" onClick={ function(){
                store.dispatch({type:'INCREMENT', size : size});
          } }/>
          <input type="text" value={ size } onChange={this.handleChange} />
        </div>
      )
    }
  }