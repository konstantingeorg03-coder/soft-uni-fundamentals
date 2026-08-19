function solve(arr){
    let pattern = /(?<separator>#|\|)(?<itemName>[A-Za-z ]+)\k<separator>(?<date>\d{2}\/\d{2}\/\d{2})\k<separator>(?<calories>\d+)\k<separator>/g;

    let text = arr[0];

    let match = text.matchAll(pattern);

    let sumCals = 0;

    let days = 0;

    let foods = [];
    
    for(let valid of match){
        let itemName = valid.groups.itemName;

        let date = valid.groups.date;

        let calories = valid.groups.calories;

        sumCals += Number(calories);

        foods.push({itemName, date, calories});
    }

    days = Math.floor(sumCals / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for(let food of foods){
        let itemName = food.itemName;

        let date = food.date;

        let calories = food.calories;

        console.log(`Item: ${itemName}, Best before: ${date}, Nutrition: ${calories}`);``
    }
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);