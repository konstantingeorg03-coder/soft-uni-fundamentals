function solve(input) {
    let demons = input.split(/\s*,\s*/).sort((a, b) => a.localeCompare(b));

    let healthPattern = /[^0-9+\-*/.]/g;
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    let modifierPattern = /[*\/]/g;

    for (let demon of demons) {

        let health = 0;
        let healthChars = demon.match(healthPattern) || [];

        for (let char of healthChars) {
            health += char.charCodeAt(0);
        }

        let damage = 0;
        let numbers = demon.match(damagePattern) || [];

        for (let number of numbers) {
            damage += Number(number);
        }

        let modifiers = demon.match(modifierPattern) || [];

        for (let modifier of modifiers) {
            if (modifier === '*') {
                damage *= 2;
            } else {
                damage /= 2;
            }
        }

        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
solve('M3ph-0.5s-0.5t0.0**');