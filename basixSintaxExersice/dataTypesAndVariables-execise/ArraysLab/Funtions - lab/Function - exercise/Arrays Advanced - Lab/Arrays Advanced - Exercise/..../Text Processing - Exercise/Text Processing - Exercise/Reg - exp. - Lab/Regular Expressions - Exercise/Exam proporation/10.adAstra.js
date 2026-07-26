function solve(input){
    let pattern = /([#\|])(?<item>[A-Za-z ]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let totalCalories = 0;

    let output = [];

    let text = input[0];

    for(let match of text.matchAll(pattern)){
        let item = match.groups.item;

        let expirationDate = match.groups.expirationDate;

        let calories = match.groups.calories;

        calories = Number(calories);

        totalCalories += calories;

        output.push(`Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}`);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for(let line of output){
        console.log(line);
    }
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);