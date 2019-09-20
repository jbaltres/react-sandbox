import React from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */
function getInputStyle(length) {
  let hue = 0 + length * 11;
  if (hue < 124) {
    return {
      backgroundColor: `hsl(${hue}, 100%, 50%)`
    };
  }

  if ((hue = 124)) {
    return {
      backgroundColor: `hsl(124, 100%, 32%)`
    };
  }

  const inputStyle = {
    backgroundColor: "red"
  };
  return inputStyle;
}

function getbgColor(length) {
  if (length > 10) {
    return {
      backgroundColor: `hsl(315, 100%, 69%)`
    };
  }
}
function PasswordInput(onChange, value) {
  let [password, setPassword] = React.useState("");
  const passwordLength = password.length;

  return (
    <div style={getbgColor(passwordLength)}>
      <input
        style={getInputStyle(passwordLength)}
        className="password-input"
        value={password}
        type="password"
        onChange={pimmel => {
          setPassword(pimmel.target.value);
        }}
      />
      <span>Passwortlänge: {password.length}</span>

      <p>Passwort: {password}</p>
      <p>Das Passwort ist richtig</p>
    </div>
  );
}

//So würde es auch gehen:

// function PasswordInput() {
//   return (
//     <input
//       style={{
//         backgroundColor: "yellow"
//       }}
//       className="password-input"
//       type="password"
//     />
//   );
// }

export default PasswordInput;

// How to change the background color? -> with css property "backgorund-color! or "background".
// How to access the input value (password)? onChange und States
// How should a function looks like which returns the color based on password length?
// Why does it make sense to use CMYK?
// ...
