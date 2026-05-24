function rightPlace(word, symbol, checkWord){
    let correctPassword = word.replace('_', symbol);

    if(correctPassword === checkWord){
        console.log('Matched');
    }else{
        console.log('Not matched');
    }
}
rightPlace('Str_ng', 'i', 'String');