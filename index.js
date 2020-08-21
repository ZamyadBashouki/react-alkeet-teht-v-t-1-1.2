import React from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
 
 
   
  return (
    <div >
      <p>Headers course= Fullstackopencourse</p>
      <p>conten tehtävienmäärä</p>
      <p>Total tehtävät 1-2</p>
      
      
      
    </div>
  );
};
const Content = () => {
  
  return (
    <div >
      
      <part1 />
      <part2 />
      <part3 />
    
    </div>
  )
}


  
ReactDOM.render(<App />, <Content />, document.getElementById('root'))


