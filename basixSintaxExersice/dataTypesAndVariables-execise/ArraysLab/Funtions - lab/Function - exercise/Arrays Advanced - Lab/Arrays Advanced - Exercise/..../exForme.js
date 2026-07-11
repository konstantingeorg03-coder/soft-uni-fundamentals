function solve(words, text) {
    let usedWords = words.split(', ');

    for(word of usedWords){
        let symbols = '*'.repeat(word.length);

        text = text.replace(symbols, word);
    }

    console.log(text);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');