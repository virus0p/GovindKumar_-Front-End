import React from "react";
import List from "./List";

function App() {
  const data = [{
    text : "govind"
  },{
    text : "kumar"
  },{
    text : "Harsh"
  }];
  return (
     <List
        items = {data}
     />
  )
}

export default App;