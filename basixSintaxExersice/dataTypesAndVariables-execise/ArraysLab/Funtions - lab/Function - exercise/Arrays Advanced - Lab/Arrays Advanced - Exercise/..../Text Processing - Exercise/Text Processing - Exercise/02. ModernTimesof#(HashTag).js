function solve(str){
    let splitStr = str.split(' ');

    let hashWord = splitStr.filter(word => word.startsWith('#') && word.length > 1);

    for(let word of hashWord){
        let strippedWord = word.substring(1);

        let pattern = /^[A-Za-z]+$/;

        if(pattern.test(strippedWord)){
            console.log(strippedWord);
        }
    } 
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')