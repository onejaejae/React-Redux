import React, { useState }from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import './App.css';




function App() {
  const [number , setNumber ] = useState(0);
  const addNumberRoot = ( size ) => {
    setNumber(number + size);
  }
  return (
    <div className="App">
       <h1>Root</h1>
       <AddNumberRoot onClick = { addNumberRoot }/>
       <DisplayNumberRoot number={number} />
    </div>
  );
}






export default App;
