import React from "react";
import "./App.css";
import PasswordInput from "./components/PasswordInput";
import CheckboxSelection from "./components/CheckboxSelection";

function App() {
  return (
    <div className="App">
      <PasswordInput />

      Antwort1:
      <CheckboxSelection/>
        
      
      Antwort2:
      <CheckboxSelection
       />
      Antwort3:
      <CheckboxSelection
       />
      Antwort4:
      <CheckboxSelection
       />
      
    </div>
  );
}

export default App;
