import React, {Component} from "react";
import AddNumber from './AddNumber';

class AddNumberRoot extends Component{
 
  
  

    render(){
      const { onClick } = this.props;  

      const clickMethod = (size) =>{
        onClick(size)
      }  
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber onClick={ clickMethod }/>
        </div>
      )
    }
  }

  export default AddNumberRoot;
  