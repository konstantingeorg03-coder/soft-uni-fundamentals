function picollo(arr) {
    let parkingCars = new Set();

    for(let line of arr){
        let [direction, car] = line.split(', ');
        
        if(direction === 'IN'){
            parkingCars.add(car);
        }else if(direction === 'OUT'){
            parkingCars.delete(car);
        }
    }

    let cars = Array.from(parkingCars).sort((a, b) => a.localeCompare(b));

    if(cars.length === 0){``
        console.log('Parking Lot is Empty');
    }else{
        console.log(cars.join('\n'));
    }
}
picollo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])