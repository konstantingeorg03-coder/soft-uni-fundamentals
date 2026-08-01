function solve(arr){
    let count = arr.shift();

    let pattern = /^\|(?<bossName>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#$/;

    for(let i = 0; i < count; i++){
        let line = arr.shift();

        let match = line.match(pattern);

        if(match){
            let bossName = match.groups.bossName;

            let title = match.groups.title;

            let strength = bossName.length;

            let armor = title.length;

            console.log(`${bossName}, The ${title}`);

            console.log(`>> Strength: ${strength}`);

            console.log(`>> Armor: ${armor}`);
        }else{
            console.log(`Access denied!`);
        }
    }
}
solve(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);