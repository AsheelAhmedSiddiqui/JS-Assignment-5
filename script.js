"use strict";
// Task 04
let currentDate = new Date();
let now = new Date("14-Aug-2024");
let differenceBetween =  now - currentDate;
let difference = Math.floor(differenceBetween/1000/3600/24);
document.write(difference); 