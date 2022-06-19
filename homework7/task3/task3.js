const firstButton = document.querySelector("button.first");
const secondButton = document.querySelector("button.second");
const thirdButton = document.querySelector("button.third");

const link = document.querySelector("a");

firstButton.addEventListener("click", function(){
    document.body.style.background = '#6495ED';
});

secondButton.addEventListener("dblclick", function(){
    document.body.style.background = '#FF69B4';
});

thirdButton.addEventListener("mousedown", function(){
    document.body.style.background = '#FFEA00';
});

thirdButton.addEventListener("mouseup", function(){
    document.body.style.background = '#FFFFFF';
});

link.addEventListener("mouseover", function(){
    document.body.style.background = '#EADDCA';
});

link.addEventListener("mouseout", function(){
    document.body.style.background = '#FFFFFF';
});