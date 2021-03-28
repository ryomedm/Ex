'use strict';

let carport = 1200;
let fence = 500;
let plant = 200;
let totalPrice = 0;

function total(price){
   const tax = 0.1;
   return price + price * tax;
}

document.getElementById('btn1').onclick = function(){
   document.getElementById('total').innerHTML = totalPrice += total(carport);
};

document.getElementById('btn2').onclick = function(){
   document.getElementById('total').innerHTML = totalPrice += total(fence);
};

document.getElementById('btn3').onclick = function(){
   document.getElementById('total').innerHTML = totalPrice += total(plant);
};
