function solve(arr){
    let townStats = {};

    let word = arr.shift();

    while(word !== 'Sail'){
        let tokens = word.split('||');

        let town = tokens[0];

        let population = Number(tokens[1]);

        let gold = Number(tokens[2]);

        if(townStats.hasOwnProperty(town)){
            townStats[town].population += population;

            townStats[town].gold += gold;
        }else{
            townStats[town] = {population, gold};
        }

        word = arr.shift();
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Plunder'){
            let townName = tokens[1];

            let population = Number(tokens[2]);

            let gold = Number(tokens[3]);

            townStats[townName].population -= population;

            townStats[townName].gold -= gold;

            console.log(`${townName} plundered! ${gold} gold stolen, ${population} citizens killed.`);

            if(townStats[townName].population === 0 || townStats[townName].gold === 0){
                delete townStats[townName];

                console.log(`${townName} has been wiped off the map!`);
            }
        }else if(action === 'Prosper'){
            let townName = tokens[1];

            let gold = Number(tokens[2]);

            if(gold < 0){
                console.log('Gold added cannot be a negative number!');
            }else{
                townStats[townName].gold += gold;

                console.log(`${gold} gold added to the city treasury. ${townName} now has ${townStats[townName].gold} gold.`)
            }
        }

        command = arr.shift();
    }

    if(Object.keys(townStats).length === 0){
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }else{
        console.log(`Ahoy, Captain! There are ${Object.keys(townStats).length} wealthy settlements to go to:`);
        
        for(let town in townStats){
            let population = townStats[town].population;

            let gold = townStats[town].gold;

            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
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