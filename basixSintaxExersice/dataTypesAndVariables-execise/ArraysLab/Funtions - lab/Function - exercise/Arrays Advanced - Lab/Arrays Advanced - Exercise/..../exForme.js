function solve(arr) {
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        solve(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let data of arr){
        let current = data.split(' ');

        let dogName = current[0];
        let dogAge = current[1];

        let usedCat = new Cat(dogName, dogAge);

        usedCat.solve();
    }
}
solve(['Mellow 2', 'Tom 5']);