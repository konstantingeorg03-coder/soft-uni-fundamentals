function asciiValues(char1, char2, char3){
    let reversedChars = `${char3}${char2}${char1}`;
    console.log(reversedChars);

    let ascii1 = char1.charCodeAt();
    let ascii2 = char2.charCodeAt();
    let ascii3 = char3.charCodeAt();
    console.log(`${ascii3} ${ascii2} ${ascii1}`);
}
asciiValues('a', 'b', 'c');