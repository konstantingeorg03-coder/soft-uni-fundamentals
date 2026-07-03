function solve(input){
    let recourceQtys = {};

    for(let i = 0; i < input.length; i += 2){
        let recource = input[i];
        let quantity = Number(input[i + 1]);

        if(recource in recourceQtys){
            recourceQtys[recource] += quantity;
        }else{
            recourceQtys[recource] = quantity;
        }
    }

    let enties = Object.entries(recourceQtys);

    for(let [recource, qty] of enties){
        console.log(`${recource} -> ${qty}`);
    }
}
solve([
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]);