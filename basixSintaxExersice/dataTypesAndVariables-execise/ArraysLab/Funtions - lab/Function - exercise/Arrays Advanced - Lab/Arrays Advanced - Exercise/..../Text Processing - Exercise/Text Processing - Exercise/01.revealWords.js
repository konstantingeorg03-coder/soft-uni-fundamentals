function solve(wordsToFillStr, text){
    let usedWordToFill = wordsToFillStr.split(', ');

    for(let word of usedWordToFill){
        let symbols = '*'.repeat(word.length);

        text = text.replace(symbols, word);
    }

    console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');