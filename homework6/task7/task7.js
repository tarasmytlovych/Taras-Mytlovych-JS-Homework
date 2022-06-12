let main = document.createElement("main");
main.className = "mainClass check item";

let mainClassDiv = document.createElement("div");
mainClassDiv.id = "myDiv";

let pElement = document.createElement("p");
pElement.innerHTML = "First paragraph";

document.body.appendChild(main);
document.querySelector("main.mainClass").appendChild(mainClassDiv);
document.querySelector("div#myDiv").appendChild(pElement);