'use strict';
const number = process.argv[2] || 0;
let sum = 0;
let i;

i = 1;

while (i <= number)
{
    sum += i;
    i++;
}

console.log(sum);