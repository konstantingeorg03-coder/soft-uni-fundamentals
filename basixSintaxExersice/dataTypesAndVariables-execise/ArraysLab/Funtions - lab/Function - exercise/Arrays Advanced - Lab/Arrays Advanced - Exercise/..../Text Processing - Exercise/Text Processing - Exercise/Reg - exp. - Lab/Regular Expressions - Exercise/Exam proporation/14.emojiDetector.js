function solve(arr){
    let pattern = /(?<start>::|\*\*)(?<emojiName>[A-Z][a-z]{2,})\k<start>/g;

    let text = arr.shift();

    let digits = /\d/g;

    let match = text.match(digits);

    let coolThreshold = 1;

    for(let digit of match){
        coolThreshold *= Number(digit);
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    let patternEmoji = text.matchAll(pattern);

    let validEmojies = 0;

    let coolEmojies = [];

    for(let emoji of patternEmoji){
        let emojiName = emoji.groups.emojiName;
        
        let ascii = 0;

        for(let letters of emojiName){
            ascii += letters.charCodeAt(0);
        }

        if(ascii >= coolThreshold){
            coolEmojies.push(emoji[0]);
        }

        validEmojies++;
    }

    console.log(`${validEmojies} emojis found in the text. The cool ones are:`);

    for(let emojies of coolEmojies){
        console.log(emojies);
    }
}
solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);