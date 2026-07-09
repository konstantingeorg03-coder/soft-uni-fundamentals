function solve(text, word) {
    if(text.includes(word)){
        console.log('Found');
    }else{
        console.log('Not Found');
    }
}
solve('I love JavaScript', 'JavaScript');