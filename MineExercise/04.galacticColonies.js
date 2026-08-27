function solve(arr){
    let colonies = Number(arr.shift());

    let galacticColonies = {};

    for(let planet = 0; planet < colonies; planet++){
        let tokens = arr.shift().split('|');

        let colony = tokens[0];

        let population = Number(tokens[1]);

        let resources = Number(tokens[2]);

        galacticColonies[colony] = {population, resources};
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Attack'){
            let colony = tokens[1];

            let peopleLost = Number(tokens[2]);

            let resourcesLost = Number(tokens[3]);

            galacticColonies[colony].population -= peopleLost;

            galacticColonies[colony].resources -= resourcesLost;

            console.log(`${colony} was attacked! ${peopleLost} people lost and ${resourcesLost} resources destroyed.`);

            if(galacticColonies[colony].population <= 0 || galacticColonies[colony].resources <= 0){
                console.log(`${colony} has been destroyed!`);

                delete galacticColonies[colony];
            }

        }else if(action === 'Reinforce'){
            let colony = tokens[1];

            let people = Number(tokens[2]);

            galacticColonies[colony].population += people;

            console.log(`${colony} reinforced with ${people} people.`);

        }else if(action === 'Supply'){
            let colony = tokens[1];

            let recourse = Number(tokens[2]);

            let freeSpace = 1000 - galacticColonies[colony].resources;

            let addedResources;

            if(recourse > freeSpace){
                addedResources = freeSpace;
            }else{
                addedResources = recourse;
            }

            galacticColonies[colony].resources += addedResources;

            console.log(`${colony} received ${addedResources} resources.`);
        }

        command = arr.shift();
    }

    let colonyCount = Object.keys(galacticColonies).length;

    console.log(`Colonies remaining: ${colonyCount}`);

    for(let colony in galacticColonies){
        let population = galacticColonies[colony].population;

        let resources = galacticColonies[colony].resources;

        console.log(`${colony} -> Population: ${population}, Resources: ${resources}`);
    }
}
solve([
    '3',
    'Mars|500|700',
    'Titan|300|900',
    'Europa|200|400',
    'Attack=>Mars=>100=>200',
    'Supply=>Titan=>250',
    'Reinforce=>Europa=>50',
    'Attack=>Europa=>250=>100',
    'End'
]);