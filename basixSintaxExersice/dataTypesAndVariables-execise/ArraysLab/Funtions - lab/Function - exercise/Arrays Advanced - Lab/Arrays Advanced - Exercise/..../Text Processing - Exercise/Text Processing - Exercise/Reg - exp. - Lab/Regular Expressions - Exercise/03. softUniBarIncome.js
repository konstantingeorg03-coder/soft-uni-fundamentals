function solve(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
    let totalIncome = 0;

    for (let command of arr) {
        if (command === 'end of shift') {
            break;
        }

        let match = command.match(pattern);

        if (!match) {
            continue;
        }

        let name = match.groups.name;
        let product = match.groups.product;
        let count = Number(match.groups.count);
        let price = Number(match.groups.price);

        let totalPrice = count * price;
        totalIncome += totalPrice;

        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])