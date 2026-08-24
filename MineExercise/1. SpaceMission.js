function solve(arr){
    let shipsCount = Number(arr.shift());

    let shipsStats = {};

    for(let ship = 0; ship < shipsCount; ship++){
        let tokens = arr.shift().split('|');

        let name = tokens[0];

        let fuel = Number(tokens[1]);

        let crew = Number(tokens[2]);

        shipsStats[name] = {fuel, crew};
    }

    let command = arr.shift();

    while(command !== 'Launch'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Travel'){
            let ship = tokens[1];

            let distance = Number(tokens[2]);

            let fuelNeeded = Number(tokens[3]);

            if(shipsStats[ship].fuel < fuelNeeded){
                console.log(`${ship} does not have enough fuel!`);
            }else{
                shipsStats[ship].fuel -= fuelNeeded;

                console.log(`${ship} travelled ${distance} light - years. ${fuelNeeded} fuel consumed.`);
            }
        }else if(action === 'Refuel'){
            let ship = tokens[1];

            let fuelSecond = Number(tokens[2]);

            if(shipsStats[ship].fuel + fuelSecond > 150){
                let fuelX = 150 - shipsStats[ship].fuel;

                shipsStats[ship].fuel += fuelX;

                console.log(`${ship} refueled with ${fuelX} fuel.`);
            }else{
                shipsStats[ship].fuel += fuelSecond;

                console.log(`${ship} refueled with ${fuelSecond} fuel.`);
            }
        }else if(action === 'CrewChange'){
            let ship = tokens[1];

            let amount = Number(tokens[2]);

            shipsStats[ship].crew += amount;

            if(shipsStats[ship].crew < 0){
                shipsStats[ship].crew = 0;
            }

            console.log(`${ship} now has ${shipsStats[ship].crew} crew members.`);
        }

        command = arr.shift();
    }

    for(let ship in shipsStats){
        let fuel = shipsStats[ship].fuel;

        let crew = shipsStats[ship].crew;

        console.log(`${ship} -> Fuel: ${fuel}, Crew: ${crew}`)
    }
}
solve([
    '3',
    'Apollo|80|12',
    'Voyager|45|8',
    'Orion|100|15',
    'Travel=>Apollo=>200=>30',
    'Travel=>Voyager=>150=>50',
    'Refuel=>Voyager=>40',
    'CrewChange=>Orion=>5',
    'Travel=>Voyager=>100=>25',
    'Refuel=>Apollo=>60',
    'CrewChange=>Apollo=>-3',
    'Launch'
]);