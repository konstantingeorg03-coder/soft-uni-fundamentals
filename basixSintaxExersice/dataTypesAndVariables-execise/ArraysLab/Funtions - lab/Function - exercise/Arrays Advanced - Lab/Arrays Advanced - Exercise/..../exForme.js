function solve(arr){
    let num = Number(arr.shift());

    let plantsStats = {};

    for(let stat = 0; stat < num; stat++){
        let tokens = arr.shift().split('<->');

        let plant = tokens[0];

        let rarity = Number(tokens[1]);

        plantsStats[plant] = {rarity, ratings: []};
    }

    let command = arr.shift();

    while(command !== 'Exhibition'){
        let tokens = command.split(/: | - /);

        let action = tokens[0];

        let plant = tokens[1];

        if(!(plant in plantsStats)){
            console.log('error');

            command = arr.shift();

            continue;
        }

        if(action === 'Rate'){
            let plant = tokens[1];

            let rating = Number(tokens[2]);

            plantsStats[plant].ratings.push(rating);

        }else if(action === 'Update'){
            let plant = tokens[1];

            let newRarity = Number(tokens[2]);

            plantsStats[plant].rarity = newRarity;

        }else if(action === 'Reset'){
            let plant = tokens[1];

            plantsStats[plant].ratings = [];
        }

        command = arr.shift();
    }

    console.log('Plants for the exhibition:');

    for(let plant in plantsStats){
        let rarity = plantsStats[plant].rarity;

        let ratings = plantsStats[plant].ratings;

        let sum = 0;

        for(let rating of ratings){
            sum += rating;
        }

        let averageRating = 0;

        if(ratings.length > 0){
            averageRating = sum / ratings.length;
        }

        console.log(`${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
solve(['3',
'Arnoldii<->4',
'Woodii<->7',
'Welwitschia<->2',
'Rate: Woodii - 10',
'Rate: Welwitschia - 7',
'Rate: Arnoldii - 3',
'Rate: Woodii - 5',
'Update: Woodii - 5',
'Reset: Arnoldii',
'Exhibition']);