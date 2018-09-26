// opdracht 1

let i = 0;

while (i < 20) {
    i++;
    if (i % 4 == 0) {
        console.log(`${i} is divisible by 4.`);
    } else {
        console.log(`${i} is not divisible by 4.`);
    }
}

// opdracht 2

let previousFirst = 0,
    previousSecond = 1,
    next = 1;

while (previousSecond < 56) {
    next = previousFirst + previousSecond;
    console.log(`prev first ${previousFirst}`);
    console.log(`prev second ${previousSecond} `);
    console.log(`next ${next}`);
    previousFirst = previousSecond;
    previousSecond = next;
    console.log(next);
}

// opdracht 3

let numberArray = [2, 4, 8, 9, 12, 13];

let sum = 0;
let length = numberArray.length;

for (let i = 0; i < length; i++) {
    sum += numberArray[i] // sum = sum + numberArray
}

console.log(`Your sum is ${sum}.`)