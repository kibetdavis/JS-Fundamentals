#!/usr/bin/node

const arg = process.argv[2];
console.log(arg === undefined ? 'No argument' : arg);
// The above code checks if the argument is undefined. If it is, it prints "No argument". Otherwise, it prints the argument itself.