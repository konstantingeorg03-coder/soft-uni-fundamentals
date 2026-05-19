function vacation(count, people, day){
    let price = 0;
    if(people === "Students"){
        if(day === "Friday"){
            price = count * 8.45;
        }else if(day === "Satrurday"){
            price = count * 9.80;
        }else if(day === "Sunday"){
            price = count * 10.46;
        }
        if(count >= 30){
        price *= 0.85;
        }
    }else if(people === "Business"){
        if(count >= 100){
            count = count - 10;
        }
        if(day === "Friday"){
            price = count * 10.90;
        }else if(day === "Saturday"){
            price = count * 15.60;
        }else if(day === "Sunday"){
            price = count * 16;
        }
    }else if(people === "Regular"){
        if(day === "Friday"){
            price = count * 15;
        }else if(day === "Saturday"){
            price = count * 20;
        }else if(day === "Sunday"){
            price = count * 22.50;
        }
        if(count >= 10 && count <= 20){
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");