'use strict';

/* /*let money = "Ваш бюджет на месяц?",
    time = "Введите дату в формате YYYY-MM-DD";

alert(money);*/


//var number = 5;
//var string = "hello";
//var sym = Symbol();
//var boolean = true;
// null;
// underfined;
// var obj = {};

/* console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}; */

/*console.log(persone['name']);

let arr = ['plus.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

/* let answer = confirm("Есть ли Вам 18 лет", "ДА");

console.log(answer); 
 */
/*let answer = prompt("Есть ли Вам 18 лет", "ДА");

console.log(typeof(null));  */

let money = prompt("Ваш бюджет на месяц?", " "),
    time = prompt("Введите дату в формате YYYY-MM-DD", " ");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = prompt("Во сколько обойдется?", ""),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer4 = prompt("Во сколько обойдется?", "");

appData.expenses[answer1] = answer3;
appData.expenses[answer2] = answer4; 

alert(appData.budget / 30);


