function solve(arr){
    let text = arr.shift();

    let pattern = /(?<start>[#\|])(?<product>[A-Za-z ]+)\k<start>(?<date>\d{2}\/\d{2}\/\d{2})\k<start>(?<calories>\d+)\k<start>/g;

    let match = text.matchAll(pattern);

    let totalcalories = 0;

    let output = [];

    for(let matches of match){
        let productName = matches.groups.productName;

        let dateProduct = matches.groups.dateProduct;

        let caloriesPr = matches.groups.caloriesPr;

        caloriesPr = Number(caloriesPr);

        totalcalories += caloriesPr;

        output.push(`Item: ${productName}, Best before: ${dateProduct}, Nutrition: ${caloriesPr}`);
    }

    let days = Math.floor(totalcalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for(let product of output){
        console.log(product);
    }
}
solve([`#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|`])