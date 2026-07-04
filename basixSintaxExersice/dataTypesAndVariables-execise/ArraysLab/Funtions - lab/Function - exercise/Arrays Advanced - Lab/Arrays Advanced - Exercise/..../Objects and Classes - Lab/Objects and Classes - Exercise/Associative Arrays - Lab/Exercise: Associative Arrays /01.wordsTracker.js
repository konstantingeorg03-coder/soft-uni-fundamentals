function wordsTracker(arr){
    let targetWords = arr.shift().split(' ');
    let wordsOccurences = {};

    for(let targetWord of targetWords){
        wordsOccurences[targetWord] = 0;
    }

    for(let text of arr){
        if(text in wordsOccurences){
            wordsOccurences[text]++;
        }
    }

    let objEntries = Object.entries(wordsOccurences).sort((a, b) => b[1] - a[1] );

    for(let [word, ocuurences] of objEntries){
        console.log(`${word} - ${ocuurences}`);
    }
}
wordsTracker([
'is the', 
'first', 'sentence'
, 'Here', 'is', 'another', 
'the', 'And', 'finally', 'the', 
'the', 'sentence']);