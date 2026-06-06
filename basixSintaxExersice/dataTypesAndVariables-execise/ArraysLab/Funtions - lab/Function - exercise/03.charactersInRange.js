function charactersInRange(char1, char2){
    let charInBetween = [];

    let simbol1 = char1.charCodeAt();
    let simbol2 = char2.charCodeAt();

    let start = Math.min(simbol1, simbol2);
    let end = Math.max(simbol1, simbol2);

    for(let i = start + 1; i < end; i++){
        let stringChar = String.fromCharCode(i);
        charInBetween.push(stringChar);
    }
    
    console.log(charInBetween.join(' '));
}
charactersInRange('#', ':'); 