console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FiZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log ("FIZZ")
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}
    // Exercise 3 Section
    let i = 1;
while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }
    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log('${i} ${output)');

    i++;
}
    let i = 1;
    do {
        let output = "";

        if (x % 3 == 0) {
            output += "FIZZ";
        }
        if (x % 5 == 0) {
            output += "BUZZ";
        }

        console.log('${x} ${output)');

        x++;
        while (x <= 100);
}


     // Exercise 4 Section: find value

    let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
    let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

    let foundValue;

    for (let i = 1; i <= n; i++) {
    if (i == numnberToFind) {
        foundValue = true;
        break;
    }
    
        if (foundValue) {
            console.log('Found ${numberToFind}!');
        } else{ 
        console.log('Did not find  ${numberToFind} within 1-${n}..');
        }
}

    // Exercise 5 Section: FIZZBUZZ
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000


    for (let i = start; i <= end; i++) {
        let output = "";

        if (i % fizzDivisor == 0) {
            output += "FIZZ"
        }
        if (i % buzzDivisor == 0) { 
            output += "BUZZ"
        }
        console.log('${i} $ {output}');
        }
        console.log(fizzDivisor,buzzDivisor)