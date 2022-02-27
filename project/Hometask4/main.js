'use strict';

let text = document.getElementsByTagName('p')[0].innerHTML;
// задание 1
// let regExp = /'/gm;
// console.log(text.replace(regExp, '"'));

// задание 2
let regExp1 = /\B'/img;
let regExp2 = /'$/img;
console.log(text.replace(regExp1, '"').replace(regExp2, '"'));