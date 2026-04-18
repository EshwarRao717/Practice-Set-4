import React, { useState } from 'react'

const App = () => {
  


  const Eventhandler= () => {
   alert("button clicked")
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <button onClick={Eventhandler} >click me</button>
    
    </div>
  )
}

export default App