/*
    You are given an array:

    var fruits = ['Apple', 'Banana', 'Orange'];

    a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
    b) Remove ‘Orange’ and add ‘Watermelon’.

    */

    let fruits = ['Apple', 'Banana', 'Orange'];

    let indexofBanana = fruits.indexOf('Banana');
    let replaceBanana = fruits[1] = 'Mango';
    let removeOrange = fruits.pop()
    let addOrange = fruits.push('Watermelon');
    
    console.log(fruits);