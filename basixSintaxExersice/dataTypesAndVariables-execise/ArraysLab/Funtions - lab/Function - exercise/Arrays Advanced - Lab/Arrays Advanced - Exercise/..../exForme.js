function solve (arr) {
    let targetWords = arr.shift().split(' ');

    let word = {};

    for(let data of targetWords){
        word[data] = 0;
    }

    for(let words of arr){
        if(words in word){
            word[words]++;
        }
    }

    let sorted = Object.entries(word).sort((a, b) => b[1] - a[1]);

    for(let [word, occurences] of sorted){
        console.log(`${word} -> ${occurences}`); 
    }
}
solve([
'this sentence',
'In',
'this',
'sentence',
'you',
'have',
'to',
'count',
'this',
'sentence'
]);