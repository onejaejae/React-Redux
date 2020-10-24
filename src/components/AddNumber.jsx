import React, { Component } from 'react';

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
        const { onClick } = this.props;
      return (
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+" onClick={ function(){
              onClick(size);
          } }/>
          <input type="text" value={ size } onChange={this.handleChange} />
        </div>
      )
    }
  }