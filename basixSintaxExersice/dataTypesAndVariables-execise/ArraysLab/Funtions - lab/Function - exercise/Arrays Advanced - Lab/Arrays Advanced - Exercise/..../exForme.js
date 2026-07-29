function solve(arr){
    let text = arr.shift();

    let pattern = /(?<start>[::|\*\*])(?<emojiName>[A-Z][a-z]{2,})\k<start>/g;

    let digits = /\d/;

    let match = text.match(digits);

    let coolThreShold = 1;

    for(let digit of match){
        coolThreShold *= Number(digit);
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    let patternEmoji = text.matchAll(pattern);

    let emojies = [];

    let ascii = 0;

    for(let letter of patternEmoji){
        ascii = letter.charCodeAt();
    }

    if(ascii >= coolThreShold){
        
    }
}
solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);