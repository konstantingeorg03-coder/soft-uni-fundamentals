function charactersInRange(char1, char2){
    let charsInBetween = [];

    let ascii1 = char1.charCodeAt();
    let ascii2 = char2.charCodeAt();

    let minAscii = Math.min(ascii1, ascii2);
    let maxAscii = Math.max(ascii1, ascii2);

    for(let ascii = minAscii + 1; ascii < maxAscii; ascii++){
        
        let currentChar = String.fromCharCode(ascii);

        charsInBetween.push(currentChar);
    }

    console.log(charsInBetween.join(' '));
}

charactersInRange('#', ':'); 