function trackFurniture(arr){
    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;

    let command = arr.shift();

    let furniture = [];

    let totalPrice = 0;

    while(command !== 'Purchase'){
        let furnitureMatch = command.match(pattern);

        if(furnitureMatch){
            let name = furnitureMatch.groups.name;
            let price = Number(furnitureMatch.groups.price);
            let qty = Number(furnitureMatch.groups.qty);

            furniture.push(name);

            totalPrice += qty * price;
        }

        command = arr.shift();
    }

    console.log('Bought furniture:');

    if(furniture.length > 0){
        console.log(furniture.join('\n'));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
trackFurniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);