function solve(text, word){
    let replacementLength = word.length;

    let replecementText = '*'.repeat(replacementLength);

    let result = text.replaceAll(word, replecementText);

    console.log(result); 
}
solve('A small sentence with some words', 'small')