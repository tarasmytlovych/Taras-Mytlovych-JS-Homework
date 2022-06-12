function updateText(){
    // let testElement = document.getElementById('test');
    // let testElement = document.querySelector('div#test');
    // let testElement = document.querySelector("div[id='test']");
    let testElement = document.body.firstElementChild;
    console.log(`Inner HTML ${testElement.innerHTML}`);

    testElement.innerHTML  = 'Last';
    console.log(`function called`);
}

updateText();