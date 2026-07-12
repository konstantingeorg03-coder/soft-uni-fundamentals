function solve(arr) {
    let [str1, str2, str3] = arr;

    let useStr = str1 + str2;

    let usedLetters = ['a', 'e', 'i', 'o', 'u'];

    let str4 = 0;

    for(let letters of useStr){
        if(usedLetters.includes(letters)){
            let replacementLetters =  str3[str4].toUpperCase();

            useStr = useStr.replace(letters, replacementLetters);

            str4++;

            if(str4 >= str3.length){
                str4 = 0;
            }
        }
    }

    console.log(`Your generated password is ${useStr.split('').reverse().join('')}`);
}
solve([
'ilovepizza', 'ihatevegetables',
'orange'
]);