
const rollDice = () => {
    return Math.floor(Math.random() * 5) + 2;
}

const testDice = (funx) => {
    let output = [];
    for (let i=0; i<100; i++) {
        let roll = funx();

        if (roll > 6 ) {
            console.log(`Values greater than 6 returned.`)
            return false;
        } else if (roll < 2) {
            console.log(`Values less than 2 returned.`)
            return false;
        } else if (!Number.isInteger(roll)) {
            console.log(`Non-integer values returned.`)
            return false;
        } else {
            if (!output.includes(roll)) {
                output.push(roll);
            }
        }
    } 
    output = output.sort();
    output = output.toString();
    if (output != `2,3,4,5,6`) {
        console.log(`Not all dice values output after 100 rolls.`)
        return false;
    }
    return true;
}

//console.log(rollDice());
//console.log(testDice(rollDice));