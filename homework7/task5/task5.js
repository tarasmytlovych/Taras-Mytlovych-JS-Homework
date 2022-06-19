const button = document.querySelector("button.btn");


button.addEventListener("click", function () {
    hideAllMessages();
    document.querySelector("p#text1").style.display = "block";
});

button.addEventListener("mouseover", function () {
    hideAllMessages();
    document.querySelector("p#text2").style.display = "block";
});

button.addEventListener("mouseout", function () {
    hideAllMessages();
    document.querySelector("p#text3").style.display = "block";
});


function hideAllMessages() {
    let allMessages = document.querySelectorAll("p");
    allMessages.forEach(e => e.style.display = "none");
}