function solve(arr){
    let [str1, str2, str3] = arr;

    let concatedStr = str1 + str2;

    let usedLetters = ['a', 'e', 'i', 'o', 'u'];

    let str3Idx = 0;

    for(let letters of concatedStr){
        if(usedLetters.includes(letters)){
            let replacementLetter = str3[str3Idx].toUpperCase();

            concatedStr = concatedStr.replace(letters, replacementLetter);

            str3Idx++;

            if(str3Idx >= str3.length){
                str3Idx = 0;
            }
        }
    }

    console.log(`Your generated password is ${concatedStr.split('').reverse().join('')}`);
}
solve([
'ilovepizza', 'ihatevegetables',
'orange'
]);