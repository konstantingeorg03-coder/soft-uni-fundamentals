function solve(arr){
    let text = arr[0];

    let pattern = /(?<startend>@|#)(?<wordName>[A-Za-z]{3,})\k<startend>\k<startend>(?<secondWord>[A-Za-z]{3,})\k<startend>/g;

    let match = text.matchAll(pattern);

    let mirrorWords = [];

    let sum = 0;

    for(let valid of match){
        sum++;

        let wordName = valid.groups.wordName;

        let secondWord = valid.groups.secondWord;

        let originalWord = secondWord.split('').reverse().join('');

        if(originalWord === wordName){
            mirrorWords.push(`${wordName} <=> ${originalWord}`);
        }
    }

    if(sum === 0){
        console.log('No word pairs found!');
    }else{
        console.log(`${sum} word pairs found!`);
    }

    if(mirrorWords.length === 0){
        console.log('No mirror words!');
    }else{
        console.log('The mirror words are:');

        console.log(mirrorWords.join(', '));
    }
}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);