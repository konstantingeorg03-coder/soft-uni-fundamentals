function solve(arr){
    let cityStats = {};

    let cities = arr.shift();

    while(cities !== 'Sail'){
        let tokens = cities.split('||');

        let city = tokens[0];

        let population = Number(tokens[1]);

        let gold = Number(tokens[2]);

        if(city in cityStats){
            cityStats[city].population += population;

            cityStats[city].gold += gold;
        }else{
            cityStats[city] = {population, gold};
        }

        cities = arr.shift();
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Plunder'){
            let city = tokens[1];

            let people = Number(tokens[2]);

            let gold = Number(tokens[3]);

            cityStats[city].population -= people;

            cityStats[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if(cityStats[city].gold <= 0 || cityStats[city].population <= 0){
                delete cityStats[city];

                console.log(`${city} has been wiped off the map!`);
            }
        }else if(action === 'Prosper'){
            let city = tokens[1];

            let gold = Number(tokens[2]);

            if(gold < 0){
                console.log('Gold added cannot be a negative number!');
            }else if(gold >= 0){
                cityStats[city].gold += gold;

                console.log(`${gold} gold added to the city treasury. ${city} now has ${cityStats[city].gold} gold.`);
            }
        }

        command = arr.shift();
    }

    let citiesCount = Object.keys(cityStats);

    if(citiesCount.length > 0){
        console.log(`Ahoy, Captain! There are ${citiesCount.length} wealthy settlements to go to:`);

        for(let city in cityStats){
            let population = cityStats[city].population;

            let gold = cityStats[city].gold;

            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    }
}
solve(['Tortuga||345000||1250',
'Santo Domingo||240000||630',
'Havana||410000||1100',
'Sail',
'Plunder=>Tortuga=>75000=>380',
'Prosper=>Santo Domingo=>180',
'End']);