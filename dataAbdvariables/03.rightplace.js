function rightPlace(word, symbol, checkWord){
    let correctWord = word.replace('_', symbol);

    if(correctWord === checkWord){
        console.log('Matched');
    }else{
        console.log('Not matched');
    }
}
rightPlace('Str_ng', 'i', 'String');