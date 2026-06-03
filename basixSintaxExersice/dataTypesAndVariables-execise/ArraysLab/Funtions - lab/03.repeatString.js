function repeatString(text, n){
    let count = '';

    for(let i = 0; i < n; i++){
        count += text;
    }

    return count;
}

let result = repeatString("abc", 3);

console.log(result);
