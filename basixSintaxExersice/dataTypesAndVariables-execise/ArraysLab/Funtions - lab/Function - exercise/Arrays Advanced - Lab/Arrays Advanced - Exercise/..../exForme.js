function solve(arr){
    let countCars = Number(arr.shift());

    let carStats = {};

    for(let carDescription = 0; carDescription < countCars; carDescription++){
        let tokens = arr.shift().split('|');

        let car = tokens[0];

        let mileage = Number(tokens[1]);

        let fuel = Number(tokens[2]);

        carStats[car] = {mileage, fuel};
    }

    let command = arr.shift();

    while(command !== 'Stop'){
        let tokens = command.split(' : ');

        let action = tokens[0];

        if(action === 'Drive'){
            let car = tokens[1];

            let distance = Number(tokens[2]);

            let fuel = Number(tokens[3]);

            if(carStats[car].fuel < fuel){
                console.log('Not enough fuel to make that ride');
            }else{
                carStats[car].mileage += distance;

                carStats[car].fuel -= fuel;

                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if(carStats[car].mileage >= 100000){
                delete carStats[car];

                console.log(`Time to sell the ${car}!`);
                }
            }
        }else if(action === 'Refuel'){
            let car = tokens[1];

            let fuel = Number(tokens[2]);

            if(carStats[car].fuel + fuel > 75){
                let addFuel = 75 - carStats[car].fuel;

                carStats[car].fuel += addFuel;

                console.log(`${car} refueled with ${addFuel} liters`);
            }else{
                carStats[car].fuel += fuel;

                console.log(`${car} refueled with ${fuel} liters`);
            }
        }else if(action === 'Revert'){
            let car = tokens[1];

            let kilometers = Number(tokens[2]);

            carStats[car].mileage -= kilometers;

            if(carStats[car].mileage < 10000){
                carStats[car].mileage = 10000;
            }else{
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        command = arr.shift();
    }

    for(let car in carStats){
        let mileage = carStats[car].mileage;

        let fuel = carStats[car].fuel;

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}
solve(['3',
'Audi A6|38000|62',
'Mercedes CLS|11000|35',
'Volkswagen Passat CC|45678|5',
'Drive : Audi A6 : 543 : 47',
'Drive : Mercedes CLS : 94 : 11',
'Drive : Volkswagen Passat CC : 69 : 8',
'Refuel : Audi A6 : 50',
'Revert : Mercedes CLS : 500',
'Revert : Audi A6 : 30000',
'Stop']);