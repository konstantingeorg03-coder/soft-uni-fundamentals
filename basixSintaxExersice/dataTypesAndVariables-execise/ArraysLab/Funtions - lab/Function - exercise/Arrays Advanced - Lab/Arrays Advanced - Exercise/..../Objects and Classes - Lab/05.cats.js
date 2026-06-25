function solve(dataArray) {

    class Cat {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    for (let data of dataArray) {

        let currentData = data.split(' ');

        let catName = currentData[0];
        let catAge = currentData[1];

        let cat = new Cat(catName, catAge);

        cat.meow();
    }

}


solve(['Mellow 2', 'Tom 5']);