function solve(arr){
    let countPieces = Number(arr.shift());

    let collection = {};

    for(let curPiece = 0; curPiece < countPieces; curPiece++){
        let current = arr.shift();

        let tokens = current.split('|');

        let piece = tokens[0];

        let composer = tokens[1];

        let key = tokens[2];
        
        collection[piece] = {composer, key};
    }

    let command = arr.shift();

    while(command !== 'Stop'){
        let tokens = command.split('|');

        let action = tokens[0];

        if(action === 'Add'){
            let piece = tokens[1];

            let composer = tokens[2];

            let key = tokens[3];

            if(piece in collection){
                console.log(`${piece} is already in the collection!`);
            }else{
                collection[piece] = {composer, key};

                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        }else if(action === 'Remove'){
            let piece = tokens[1];

            if(piece in collection){
                delete collection[piece];

                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if(action === 'ChangeKey'){
            let piece = tokens[1];

            let newKey = tokens[2];

            if(piece in collection){
                collection[piece].key = newKey;

                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }

    for(let piece in collection){
        let composer = collection[piece].composer;

        let key = collection[piece].key;

        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}
solve(['3',
'Fur Elise|Beethoven|A Minor',
'Moonlight Sonata|Beethoven|C# Minor',
'Clair de Lune|Debussy|C# Minor',
'Add|Sonata No.2|Chopin|B Minor',
'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
'Add|Fur Elise|Beethoven|C# Minor',
'Remove|Clair de Lune',
'ChangeKey|Moonlight Sonata|C# Major',
'Stop']);