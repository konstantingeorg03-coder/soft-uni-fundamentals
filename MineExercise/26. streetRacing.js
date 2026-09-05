function solve(arr){
    let count = Number(arr.shift());

    let racersStats = {};

    for(let racersChars = 0; racersChars < count; racersChars++){
        let tokens = arr.shift().split('|');

        let driver = tokens[0];

        let car = tokens[1];

        let fuel = Number(tokens[2]);

        let money = Number(tokens[3]);

        racersStats[driver] = {car, fuel, money};
    }

    let command = arr.shift();

    while(command !== 'Finish'){
        let tokens = command.split('=>');

        let action = tokens[0];

        if(action === 'Race'){
            let driver = tokens[1];

            let fuelNeeded = Number(tokens[2]);

            let prize = Number(tokens[3]);

            if(racersStats[driver].fuel >= fuelNeeded){
                racersStats[driver].fuel -= fuelNeeded;

                racersStats[driver].money += prize;

                console.log(`${driver} won the race and earned ${prize}!`);

            }else{
                console.log(`${driver} does not have enough fuel!`);
            }

        }else if(action === 'Refuel'){
            let driver = tokens[1];

            let amount = Number(tokens[2]);

            if(racersStats[driver].fuel + amount > 100){
                let addedFuel = 100 - racersStats[driver].fuel;

                racersStats[driver].fuel += addedFuel;

                console.log(`${driver} refueled with ${addedFuel} fuel.`);

            }else{
                racersStats[driver].fuel += amount;

                console.log(`${driver} refueled with ${amount} fuel.`)
            }

        }else if(action === 'Repair'){
            let driver = tokens[1];

            let cost = Number(tokens[2]);

            if(racersStats[driver].money >= cost){
                racersStats[driver].money -= cost;

                console.log(`${driver} repaired the ${racersStats[driver].car} for ${cost}.`);

            }else{
                console.log(`${driver} cannot afford the repair!`);
            }

        }else if(action === 'Upgrade'){
            let driver = tokens[1];

            let newCar = tokens[2];

            let cost = Number(tokens[3]);

            if(racersStats[driver].money >= cost){
                racersStats[driver].money -= cost;

                racersStats[driver].car = newCar;

                console.log(`${driver} upgraded to ${newCar}!`);

            }else{
                console.log(`${driver} cannot afford ${newCar}!`);
            }

        }else if(action === 'TransferMoney'){
            let fromDriver = tokens[1];
            
            let toDriver = tokens[2];

            let amount = Number(tokens[3]);

            if(racersStats[fromDriver].money >= amount){
                racersStats[fromDriver].money -= amount;

                racersStats[toDriver].money += amount;

                console.log(`${fromDriver} transferred ${amount} to ${toDriver}.`);

            }else{
                console.log('Transfer failed!');
            }

        }else if(action === 'TransferFuel'){
            let fromDriver = tokens[1];

            let toDriver = tokens[2];

            let amount = Number(tokens[3]);

            if(racersStats[fromDriver].fuel >= amount && racersStats[toDriver].fuel + amount <= 100){
                racersStats[fromDriver].fuel -= amount;

                racersStats[toDriver].fuel += amount;

                console.log(`${fromDriver} transferred ${amount} fuel to ${toDriver}.`);

            }else{
                console.log('Fuel transfer failed!');
            }

        }else if(action === 'Crash'){
            let driver = tokens[1];

            let moneyLost = Number(tokens[2]);
            
            racersStats[driver].money -= moneyLost;

            console.log(`${driver} crashed and lost ${moneyLost}!`);

            if(racersStats[driver].money <= 0){
                delete racersStats[driver];

                console.log(`${driver} is out of the competition!`);
            }

        }else if(action === 'Steal'){
            let thief = tokens[1];

            let victim = tokens[2];

            let amount = Number(tokens[3]);

            if(racersStats[victim].money >= amount){
                racersStats[victim].money -= amount;

                racersStats[thief].money += amount;

                console.log(`${thief} stole ${amount} from ${victim}.`);

            }else{
                console.log('Steal failed!');
            }

        }else if(action === 'Sponsor'){
            let driver = tokens[1];

            let amount = Number(tokens[2]);

            racersStats[driver].money += amount;

            console.log(`${driver} received ${amount} from a sponsor.`);

        }else if(action === 'SwapCar'){
            let driver1 = tokens[1];

            let driver2 = tokens[2];

            let tempCar = racersStats[driver1].car;

            racersStats[driver1].car = racersStats[driver2].car;

            racersStats[driver2].car = tempCar;

            console.log(`${driver1} and ${driver2} swapped their cars.`);

        }else if(action === 'Status'){
            let driver = tokens[1];

            if(racersStats[driver].fuel < 20 || racersStats[driver].money < 500){
                console.log(`${driver} is in danger!`);

            }else{
                console.log(`${driver} is ready to race.`);

            }
        }

        command = arr.shift();

    }

    let countRacers = Object.keys(racersStats).length;

    if(countRacers > 0){
        console.log(`Drivers remaining: ${countRacers}`);

        for(let driver in racersStats){
            let car = racersStats[driver].car;

            let fuel = racersStats[driver].fuel;

            let money = racersStats[driver].money;

            console.log(`${driver} -> Car: ${car}, Fuel: ${fuel}, Money: ${money}`);

        }

    }else{
        console.log('No drivers remaining!');
    }
}
solve([
    '5',
    'Brian|Skyline|80|1200',
    'Dominic|Charger|100|2000',
    'Han|Supra|65|1500',
    'Roman|Mustang|90|900',
    'Mia|Honda|45|600',

    'Race=>Brian=>30=>700',
    'Refuel=>Brian=>60',
    'Repair=>Han=>400',
    'Upgrade=>Roman=>BMW=>700',
    'Sponsor=>Mia=>500',
    'TransferMoney=>Dominic=>Han=>500',
    'TransferFuel=>Roman=>Han=>20',
    'SwapCar=>Brian=>Han',
    'Race=>Han=>40=>800',
    'Status=>Brian',
    'Steal=>Brian=>Dominic=>600',
    'Repair=>Dominic=>500',
    'Race=>Dominic=>70=>1000',
    'Status=>Roman',
    'Crash=>Roman=>300',
    'Status=>Mia',

    'Finish'
]);