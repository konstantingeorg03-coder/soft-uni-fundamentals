function solve(input){
    let pattern = /(?<start>@|#)(?<word>[A-Za-z]{3,})\k<start>\k<start>(?<secondWord>[A-Za-z]{3,})\k<start>/g;

    let text = input[0];

    let mirrorWords = [];

    let match;

    let countPairs = 0;
    while((match = pattern.exec(text)) !== null){
        let word = match.groups.word;

        let secondWord = match.groups.secondWord;

        let reversedWord = secondWord.split('').reverse().join('');

        if(word === reversedWord){
            mirrorWords.push(`${word} <=> ${secondWord}`);
        }

        countPairs++;
    }

    if(countPairs === 0){
            console.log('No word pairs found!');
        }else{
            console.log(`${countPairs} word pairs found!`);
        }

    if(mirrorWords.length === 0){
        console.log('No mirror words!');
    }else{
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }
}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);