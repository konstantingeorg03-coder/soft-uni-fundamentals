function solve(arr){
    let destinations = arr.shift();

    let command = arr.shift();

    while(command !== 'Travel'){
        let tokens = command.split(':');
        let action = tokens[0];

        if(action === 'Add Stop'){
            let index = Number(tokens[1]);

            let str = tokens[2]

            if(index >= 0 && index <= destinations.length){
                destinations = destinations.slice(0, index) + str + destinations.slice(index);
            }

            console.log(destinations);
        }else if(action === 'Remove Stop'){
            let index1 = Number(tokens[1]);

            let index2 = Number(tokens[2]);

            if(index1 >= 0 && index1 <= destinations.length - 1 && index2 >= 0 && index2 <= destinations.length - 1){
                destinations = destinations.slice(0, index1) + '' + destinations.slice(index2 + 1);
            }

            console.log(destinations);
        }else if(action === 'Switch'){
            let oldStr = tokens[1];

            let newStr = tokens[2];

            if(destinations.includes(oldStr)){
                destinations = destinations.split(oldStr).join(newStr);

            }

            console.log(destinations);
        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}  
solve(['Hawai::Cyprys-Greece',
'Add Stop:7:Rome',
'Remove Stop:11:16',
'Switch:Hawai:Bulgaria',
'Travel']);