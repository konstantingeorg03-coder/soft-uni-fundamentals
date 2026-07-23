function solve(input){
    let numberOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');

        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let tokens = command.split(' : ');
        let action = tokens.shift();
        let car = tokens.shift();

        if (action === 'Drive') {
            let distance = Number(tokens.shift());
            let fuelNeeded = Number(tokens.shift());

            if (cars[car].fuel < fuelNeeded) {
                console.log('Not enough fuel to make that ride');
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuelNeeded;

                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }

        } else if (action === 'Refuel') {
            let fuel = Number(tokens.shift());

            let currentFuel = cars[car].fuel;
            let fuelAdded = fuel;

            if (currentFuel + fuel > 75) {
                fuelAdded = 75 - currentFuel;
            }

            cars[car].fuel += fuelAdded;

            console.log(`${car} refueled with ${fuelAdded} liters`);

        } else if (action === 'Revert') {
            let kilometers = Number(tokens.shift());

            cars[car].mileage -= kilometers;

            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        command = input.shift();
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
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