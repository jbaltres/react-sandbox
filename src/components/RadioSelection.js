import React from "react";


function RadioSelection() {
  let [qv, setQv] = React.useState("");
  console.log(qv)

  return (
    <div>
      <input
        value= "2"
        type="radio"
      />
      <input
        value= "1"
        type="checkbox"
        onChange={() => setQv(qv ++) }
      />
      
    </div>
  );
}


export default RadioSelection;