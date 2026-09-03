function solve(arr){
    let coloniesCount = Number(arr.shift());

    let coloniesStats = {};

    for(let coloniesChars = 0; coloniesChars < coloniesCount; coloniesChars++){
        let tokens = arr.shift().split('|');

        let name = tokens[0];

        let population = Number(tokens[1]);

        let oxygen = Number(tokens[2]);

        let resources = Number(tokens[3]);

        coloniesStats[name] = {population, oxygen, resources};
    }

    let command = arr.shift();

    while(command !== 'Shutdown'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Meteor'){
            let colony = tokens[1];

            let damage = Number(tokens[2]);

            let populationLost = Number(tokens[3]);

            coloniesStats[colony].oxygen -= damage;

            coloniesStats[colony].population -= populationLost;

            console.log(`${colony} was hit by a meteor! Lost ${populationLost} population and ${damage} oxygen.`);

            if(coloniesStats[colony].oxygen <= 0 || coloniesStats[colony].population <= 0){
                delete coloniesStats[colony];

                console.log(`${colony} has been destroyed!`);
            }

        }else if(action === 'Populate'){
            let colony = tokens[1];

            let amount = Number(tokens[2]);

            if(coloniesStats[colony].population + amount > 300){
                let addedPopulation = 300 - coloniesStats[colony].population;

                coloniesStats[colony].population += addedPopulation;

                console.log(`${colony} received ${addedPopulation} new citizens.`);
            }else{
                coloniesStats[colony].population += amount;

                console.log(`${colony} received ${amount} new citizens.`);
            }

        }else if(action === 'SupplyOxygen'){
            let colony = tokens[1];

            let amount = Number(tokens[2]);

            if(coloniesStats[colony].oxygen + amount > 100){
                let addedOxygen = 100 - coloniesStats[colony].oxygen;

                coloniesStats[colony].oxygen += addedOxygen;

                console.log(`${colony} received ${addedOxygen} oxygen.`);
            }else{
                coloniesStats[colony].oxygen += amount;

                console.log(`${colony} received ${amount} oxygen.`);
            }

        }else if(action === 'Gather'){
            let colony = tokens[1];

            let amount = Number(tokens[2]);

            coloniesStats[colony].resources += amount;

            console.log(`${colony} gathered ${amount} resources.`);

        }else if(action === 'BuildShield'){
            let colony = tokens[1];

            let cost = Number(tokens[2]);

            let oxygenBonus = Number(tokens[3]);

            if(coloniesStats[colony].resources >= cost){
                coloniesStats[colony].resources -= cost;

                if(coloniesStats[colony].oxygen + oxygenBonus > 100){
                    let addedOxygen = 100 - coloniesStats[colony].oxygen;

                    coloniesStats[colony].oxygen += addedOxygen;

                    console.log(`${colony} built a shield and gained ${addedOxygen} oxygen.`);

                }else{
                    coloniesStats[colony].oxygen += oxygenBonus;

                    console.log(`${colony} built a shield and gained ${oxygenBonus} oxygen.`);
                }

            }else{
                console.log(`Not enough resources for ${colony}!`);
            }

        }else if(action === 'Expand'){
            let colony = tokens[1];

            let cost = Number(tokens[2]);

            let populationBonus = Number(tokens[3]);

            if(coloniesStats[colony].resources >= cost){
                coloniesStats[colony].resources -= cost;

                if(coloniesStats[colony].population + populationBonus > 300){
                    let addedPopulation = 300 - coloniesStats[colony].population;

                    coloniesStats[colony].population += addedPopulation;

                    console.log(`${colony} expanded and gained ${addedPopulation} population.`);
                }else{
                    coloniesStats[colony].population += populationBonus;

                    console.log(`${colony} expanded and gained ${populationBonus} population.`);
                }

            }else{
                console.log(`Not enough resources for ${colony}!`);
            }

        }else if(action === 'Transfer'){
            let fromColony = tokens[1];

            let toColony = tokens[2];

            let amount = Number(tokens[3]);

            if(coloniesStats[fromColony].resources >= amount){
                coloniesStats[fromColony].resources -= amount;

                coloniesStats[toColony].resources += amount;

                console.log(`${fromColony} transferred ${amount} resources to ${toColony}.`);

            }else{
                console.log('Transfer failed!');
            }

        }else if(action === 'Evacuate'){
            let fromColony = tokens[1];

            let toColony = tokens[2];

            let people = Number(tokens[3]);

            if(coloniesStats[fromColony].population >= people && coloniesStats[toColony].population + people <= 300){
                coloniesStats[fromColony].population -= people;

                coloniesStats[toColony].population += people;

                console.log(`${people} citizens evacuated from ${fromColony} to ${toColony}.`);

            }else{
                console.log('Evacuation failed!');
            }

        }else if(action === 'Status'){
            let colony = tokens[1];

            if(coloniesStats[colony].population < 50 || coloniesStats[colony].oxygen < 20 || coloniesStats[colony].resources < 100){
                console.log(`${colony} is in critical condition!`);

            }else{
                console.log(`${colony} is stable.`);
            }
        }

        command = arr.shift();
    }

    let count = Object.keys(coloniesStats).length;

    if(count > 0){
        console.log(`Colonies remaining: ${count}`);

        for(let colony in coloniesStats){
            let population = coloniesStats[colony].population;

            let oxygen = coloniesStats[colony].oxygen;

            let resources = coloniesStats[colony].resources;

            console.log(`${colony} -> Population: ${population}, Oxygen: ${oxygen}, Resources: ${resources}`);
        }
    }else{
        console.log('No colonies survived!');
    }
}
solve([
    '4',
    'MarsBase|120|80|500',
    'Europa|200|60|700',
    'Titan|90|100|300',
    'Luna|150|40|900',
    'Meteor=>MarsBase=>30=>25',
    'Populate=>MarsBase=>250',
    'SupplyOxygen=>MarsBase=>80',
    'BuildShield=>Titan=>200=>40',
    'Gather=>Europa=>150',
    'Transfer=>Europa=>MarsBase=>300',
    'Status=>MarsBase',
    'Meteor=>Luna=>50=>160',
    'Expand=>Titan=>50=>250',
    'Evacuate=>Titan=>Europa=>30',
    'BuildShield=>Titan=>500=>50',
    'Meteor=>Titan=>100=>50',
    'Status=>Europa',
    'Shutdown'
]);