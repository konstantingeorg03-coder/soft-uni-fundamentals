function schoolGrades(arr){
    let map = new Map();

    for(let data of arr){
        let [name, ...grades] = data.split(' ');

        grades = grades.map(Number);

        if(map.has(name)){
            let currentGrades = map.get(name);

            let arrayGrades = currentGrades.concat(grades);

            map.set(name, arrayGrades);
        }else{
            map.set(name, grades);
        }
    }

    let sorted = Array.from(map.entries());
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for(let [name, grades] of sorted){
        let sum = 0;

        for(let grade of grades){
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);