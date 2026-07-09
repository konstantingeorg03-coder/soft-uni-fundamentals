function solve(searchWord, text){
    text = text.toLowerCase();

    let splitText = text.split(' ');

    if(splitText.includes(searchWord)){
        console.log(searchWord);
    }else{
        console.log(`${searchWord} not found!`);
    }
}
solve('javascript', 'JavaScript is the best programming language')