//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>hi world</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>,
  document.getElementById("root")
);
