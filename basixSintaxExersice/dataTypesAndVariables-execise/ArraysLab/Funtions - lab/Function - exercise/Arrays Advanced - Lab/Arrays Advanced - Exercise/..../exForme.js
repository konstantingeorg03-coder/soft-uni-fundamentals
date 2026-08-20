function solve(arr){
    let stops = arr.shift();
    
    let command = arr.shift();

    while(command !== 'Travel'){
        let tokens = command.split(':');

        let action = tokens[0];

        if(action === 'Add Stop'){
            let idx = Number(tokens[1]);

            let str = tokens[2];

            if(idx >= 0 && idx < stops.length){
                let first = stops.substring(0, idx);

                let second = stops.substring(idx);

                stops = first + str + second;

                console.log(stops);
            }

        }else if(action === 'Remove Stop'){
            let startIdx = Number(tokens[1]);
            
            let endIdx = Number(tokens[2]);

            if(startIdx >= 0 && startIdx < stops.length && endIdx >= 0 && endIdx < stops.length){
                let first = stops.substring(0, startIdx);

                let second = stops.substring(endIdx + 1);

                stops = first + second;

                console.log(stops);
            }

        }else if(action === 'Switch'){
            let oldStr = tokens[1];

            let newStr = tokens[2];

            if(stops.includes(oldStr)){
                stops = stops.replaceAll(oldStr, newStr);
            }

            console.log(stops);
        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops:`);

    console.log(`${stops}`);
}
solve(['Hawai::Cyprys-Greece',
'Add Stop:7:Rome',
'Remove Stop:11:16',
'Switch:Hawai:Bulgaria',
'Travel']);