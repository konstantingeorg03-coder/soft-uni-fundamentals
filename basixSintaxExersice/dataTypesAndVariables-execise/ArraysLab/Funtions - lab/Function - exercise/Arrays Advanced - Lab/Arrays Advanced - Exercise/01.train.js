function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for(let command of arr){
        if(command.includes('Add')){
            let token = command.split(' ');
            let passengers = Number(token[1]);

            wagons.push(passengers);
        }else{
            let passengers = Number(command);

            for(let i = 0; i < wagons.length; i++){
                if(wagons[i] + passengers <= capacity){
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);