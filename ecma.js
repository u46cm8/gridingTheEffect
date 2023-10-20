var containerDiv = document.getElementById("container");
var newDiv = document.createElement("div");

newDiv.innerHTML = "<p>Hi I am the new div</p>";

newDiv.id = "one";

containerDiv.appendChild(newDiv);