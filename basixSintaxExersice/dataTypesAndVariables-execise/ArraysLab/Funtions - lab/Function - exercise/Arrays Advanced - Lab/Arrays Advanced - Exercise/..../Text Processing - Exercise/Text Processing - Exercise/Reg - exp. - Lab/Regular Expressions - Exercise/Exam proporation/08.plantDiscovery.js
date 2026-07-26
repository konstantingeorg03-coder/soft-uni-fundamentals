function solve(arr){
    let count = Number(arr.shift());

    let flowerStats = {};

    for(let currentFlower = 0; currentFlower < count; currentFlower++){
        let currentLine = arr.shift();

        let tokens = currentLine.split('<->');

        let plant = tokens[0];

        let rarity = tokens[1];

        if(plant in flowerStats){
            flowerStats[plant].rarity = rarity;
        }else{
            flowerStats[plant] = {rarity, ratings: []};
        }
    }

    let command = arr.shift();

    while(command !== 'Exhibition'){
        let tokens = command.split(': ');

        let action = tokens[0];

        if(action === 'Rate'){
            let data = tokens[1].split(' - ');

            let plant = data[0];

            let rating = Number(data[1]);

            if(plant in flowerStats){
                flowerStats[plant].ratings.push(rating);
            }else{
                console.log('error');
            }
        }else if(action === 'Update'){
            let data = tokens[1].split(' - ');

            let plant = data[0];

            let newRarity = Number(data[1]);

            if(plant in flowerStats){
                flowerStats[plant].rarity = newRarity;
            }else{
                console.log('error');
            }
        }else if(action === 'Reset'){
            let plant = tokens[1];

            if(plant in flowerStats){
                flowerStats[plant].ratings = [];
            }else{
                console.log('error');
            }
        }

        command = arr.shift();
    }

    console.log('Plants for the exhibition:');

    for(let plant in flowerStats){
        let rarity = flowerStats[plant].rarity;
        
        let ratings = flowerStats[plant].ratings;

        let averageRating;

        if(ratings.length === 0){
            averageRating = 0;
        }else{
            let sum = 0;

            for(let curRating = 0; curRating < ratings.length; curRating++){
                sum += ratings[curRating];
            }

            averageRating = sum / ratings.length;
        }

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
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