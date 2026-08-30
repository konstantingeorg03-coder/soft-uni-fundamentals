function solve(arr){
    let countShips = Number(arr.shift());
    
    let shipsStats = {};

    for(let shipsChar = 0; shipsChar < countShips; shipsChar++){
        let tokens = arr.shift().split('|');

        let ship = tokens[0];

        let fuel = Number(tokens[1]);

        let health = Number(tokens[2]);

        let crew = Number(tokens[3]);

        shipsStats[ship] = {fuel, health, crew};
    }

    let command = arr.shift();

    while(command !== 'End'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Travel'){
            let ship = tokens[1];

            let distance = Number(tokens[2]);

            let fuelNeeded = Number(tokens[3]);

            if(shipsStats[ship].fuel >= fuelNeeded){
                shipsStats[ship].fuel -= fuelNeeded;

                console.log(`${ship} travelled ${distance} light-years and used ${fuelNeeded} fuel.`);
            }else{
                console.log(`Not enough fuel for ${ship}!`);
            }

        }else if(action === 'Refuel'){
            let ship = tokens[1];

            let amount = Number(tokens[2]);

            if(shipsStats[ship].fuel + amount <= 100){
                shipsStats[ship].fuel += amount;

                console.log(`${ship} refueled with ${amount} fuel.`);
            }else{
                let addedAmount = 100 - shipsStats[ship].fuel;

                shipsStats[ship].fuel += addedAmount;

                console.log(`${ship} refueled with ${addedAmount} fuel.`);
            }

        }else if(action === 'Repair'){
            let ship = tokens[1];

            let amount = Number(tokens[2]);

            if(shipsStats[ship].health + amount <= 200){
                shipsStats[ship].health += amount;

                console.log(`${ship} repaired for ${amount} health.`);
            }else{
                let addedHealth = 200 - shipsStats[ship].health;

                shipsStats[ship].health += addedHealth;

                console.log(`${ship} repaired for ${addedHealth} health.`);
            }

        }else if(action === 'Battle'){
            let ship = tokens[1];

            let damage = Number(tokens[2]);

            let crewLost = Number(tokens[3]);

            shipsStats[ship].health -= damage;

            shipsStats[ship].crew -= crewLost;

            console.log(`${ship} took ${damage} damage and lost ${crewLost} crew.`);

            if(shipsStats[ship].health <= 0 || shipsStats[ship].crew <= 0){
                delete shipsStats[ship];

                console.log(`${ship} has been destroyed!`);
            }

        }else if(action === 'Recruit'){
            let ship = tokens[1];

            let count = Number(tokens[2]);

            if(shipsStats[ship].crew + count <= 50){
                shipsStats[ship].crew += count;

                console.log(`${ship} recruited ${count} crew members.`);
            }else{
                let addedCrew = 50 - shipsStats[ship].crew;

                shipsStats[ship].crew += addedCrew;

                console.log(`${ship} recruited ${addedCrew} crew members.`);
            }

        }else if(action === 'Transfer'){
            let fromShip = tokens[1];

            let toShip = tokens[2];

            let amount = Number(tokens[3]);

            if(shipsStats[fromShip].fuel < amount){

            console.log(`${fromShip} does not have enough fuel!`);

            }else if(shipsStats[toShip].fuel + amount > 100){

            console.log(`${toShip} cannot receive that much fuel!`);

            }else{
            shipsStats[fromShip].fuel -= amount;

            shipsStats[toShip].fuel += amount;

            console.log(`${fromShip} transferred ${amount} fuel to ${toShip}.`);

            }
            
        }else if(action === 'Emergency'){
            let ship = tokens[1];

            if(shipsStats[ship].health < 50 || shipsStats[ship].fuel < 20 || shipsStats[ship].crew < 10){
                console.log(`${ship} is in critical condition!`);
            }else{
                console.log(`${ship} is stable.`);
            }
        }

        command = arr.shift();
    }

    let shipsCount = Object.keys(shipsStats).length;
    
    if(shipsCount > 0){
        console.log(`Ships remaining: ${shipsCount}`);

        for(let ship in shipsStats){
            let fuel = shipsStats[ship].fuel;

            let health = shipsStats[ship].health;

            let crew = shipsStats[ship].crew;

            console.log(`${ship} -> Fuel: ${fuel}, Health: ${health}, Crew: ${crew}`);
        }

    }else if(shipsCount === 0){
        console.log('No ships left!');
    }
}
solve([
    '4',
    'Falcon|70|120|25',
    'Orion|90|180|40',
    'Titan|30|70|12',
    'Nova|50|150|45',
    'Travel=>Falcon=>300=>25',
    'Refuel=>Falcon=>80',
    'Battle=>Titan=>40=>5',
    'Recruit=>Titan=>20',
    'Transfer=>Orion=>Falcon=>15',
    'Repair=>Titan=>200',
    'Emergency=>Titan',
    'Battle=>Nova=>170=>10',
    'Travel=>Orion=>500=>95',
    'Transfer=>Falcon=>Orion=>30',
    'Recruit=>Falcon=>40',
    'Emergency=>Orion',
    'Battle=>Titan=>200=>20',
    'End'
]);