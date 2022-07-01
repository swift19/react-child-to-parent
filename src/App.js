import './App.css';
import Child from './Child';
import React, { useState } from 'react'

function App() {
  const [data, setName] = useState('');
  const props = (e) => {
    setName(e)  
  }
  // const getData = (data) => {
  //   console.log('test from child', data)    
  // }
  return (
     <div>
      <Child props={props} />
       
      <p>{data}</p>
     
     </div>
  );
}

export default App;
