function solve(str){
    let newStr = ' ';

    let result = [];

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        if(char === char.toUpperCase() && i !== 0){
            result.push(newStr);
            newStr = '';
        }

        newStr += char;
    }

    result.push(newStr);

    console.log(result.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');