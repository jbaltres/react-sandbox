import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Bulbs() {
  const [q1, setQ1] = useState("1");
  const [q2, setQ2] = useState("0");
  const [q3, setQ3] = useState("-4");

  const lightOn = event => setQ1(event.target.value);
  const lightOn2 = event => setQ2(event.target.value);
  const lightOn3 = event => setQ3(event.target.value);

  const wert = parseInt(q1) + parseInt(q2) + parseInt(q2);

  return (
    <>
      <div>
        <b>Frage 1:</b><br></br>
          Hier könnte die erste Frage stehen<p></p>
          Antwort 1
        <input type="radio" value="-2" onClick={lightOn} checked={q1 === "-2"}/><br></br>
          Antwort 2
        <input type="radio" value="-1" onClick={lightOn} checked={q1 === "-1"}/><br></br>
          Antwort 3
        <input type="radio" value="0" onClick={lightOn} checked={q1 === "0"} /> <br></br>
          Antwort 4
        <input type="radio" value="1" onClick={lightOn} checked={q1 === "1"} /><br></br>
          Antwort 5
        <input type="radio" value="2" onClick={lightOn} checked={q1 === "2"} /><p></p>
          Deine Antwort ist {q1}
      </div>
      <p>
      </p>
      <div>
      <b>Frage 2:</b><br></br>
        Hier könnte die zweite Frage stehen<p></p>
          Antwort 1
        <input type="radio" value="-2" onClick={lightOn2} checked={q2 === "-2"}/><br></br>
          Antwort 2
        <input type="radio" value="-1" onClick={lightOn2} checked={q2 === "-1"}/><br></br>
          Antwort 3
        <input type="radio" value="0" onClick={lightOn2} checked={q2 === "0"}/><br></br>
          Antwort 4
        <input type="radio" value="1" onClick={lightOn2} checked={q2 === "1"}/><br></br>
          Antwort 5
        <input type="radio" value="2" onClick={lightOn2} checked={q2 === "2"}/><p></p>
         Deine Antwort ist {q2}
      </div>
      <div>
      <b>Frage 3:</b><br></br>
        Hier könnte die letzte Frage stehen<p></p>
          Antwort 1
        <input type="radio" value="-2" onClick={lightOn3} checked={q3 === "-2"}/><br></br>
          Antwort 2
        <input type="radio" value="-1" onClick={lightOn3} checked={q3 === "-1"}/><br></br>
          Antwort 3
        <input type="radio" value="0" onClick={lightOn3} checked={q3 === "0"}/><br></br>
          Antwort 4
        <input type="radio" value="1" onClick={lightOn3} checked={q3 === "1"}/><br></br>
          Antwort 5
        <input type="radio" value="2" onClick={lightOn3} checked={q3 === "2"}/><p></p>
         Deine Antwort ist {q3}
      </div>

      <p>Das Ergebnis ist {wert}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Bulbs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

