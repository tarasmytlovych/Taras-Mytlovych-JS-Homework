function listDivs() {
    let textDivParagraphs = document.querySelectorAll('div#text > p');

    for( let i = 0; i < textDivParagraphs.length; i += 1){
        console.log(`Selector text ${i} : ${textDivParagraphs[i].innerHTML}`);
    }

}

listDivs();