function solve(str){
    let map = new Map();

    let strInput = str.split(' ');

    for(let word of strInput){
        let neededWord = word.toLowerCase();

        if(map.has(neededWord)){
            let currentWord = map.get(neededWord);
            currentWord++;
            map.set(neededWord, currentWord);
        }else{
            map.set(neededWord, 1);
        }
    }

    let entries = Array.from(map.entries()).filter(([word, count]) => count % 2 !== 0).map(([word, count]) => word);

    console.log(entries.join(' '));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')