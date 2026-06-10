function arrayManipulations(input){
    let numbers = input
    .shift()
    .split('')
    .map(Number);

    for(let command of input){
        let commandParts = command.split(' ');

        let commandName = command.shift();

        commandParts === commandParts.map(Number);

        if(commandName === 'Add'){
            let value = commandParts.pop();

            numbers = numbers.filter((num => num !== value));
        }
    }

}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
