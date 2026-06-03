function repeatString(text, n){
    let result = '';

    for(let i = 0; i < n; i++){
        result += text;
    }
    return result;
}

    let inpuText = repeatString('abc', 3);

    console.log(inpuText);
