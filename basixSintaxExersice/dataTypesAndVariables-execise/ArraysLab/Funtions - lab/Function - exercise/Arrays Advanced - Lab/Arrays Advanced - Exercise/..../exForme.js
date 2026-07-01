function solve(arr){
    let students = {};

    for(let entry of arr){
        let [name, grade] = entry.split(' ');

        students[name] = grade;
    }

    for(let key in students){
        console.log(`${key} -> ${students[key]}`);
    }
}
solve([
'Peter 5.50',
'Maria 6.00',
'Peter 4.50',
'Ivan 5.00',
'Maria 5.75'
]);