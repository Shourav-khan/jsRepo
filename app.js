
// let userInput = prompt('Enter your number');
// let num = parseInt(userInput);

// if(num % 2 === 0){
//     console.log(`${num} is an even number`);
    
// }else{
//     console.log(`${num} is a odd number`);
// }

// let a = 20;
// let b = 30;
// let Fname = 'Shourav';

// let zigzag = a + b + Fname + a + b; 

// console.log(zigzag);

// function sk(name, age,dob = 1996){
//     console.log('My name is ' + name + " I am "+ age + ' My birth is ' + dob);
// }

// sk('shourav',20,1996)

// function skcc(){
//     console.log('subscribed successfully');
// }

// document.getElementById('bottom').addEventListener('click', skcc);


// (function (t = 'none'){
//     console.log('heeelofsafd ' + t);
// })();


// let numbers = [4,8,6,3,5];
// let sqNumbers = numbers.map (function(num){
//     return num * num; 
// });

// console.log(sqNumbers);




// function add(x,y){
//     console.log(x+y);
// }

// console.log(add(10,20));



// let b = function(x,y){
//     return x*y;
// }

// console.log(b(2,3));



/* Arrow function */


// let b = (x,y) => x*y;
// console.log(b(5,4));


/* Nested function (ektar vetro arekta function kaj kobe*/ 

// function sanin(run){
//     function sara(){
//         alert('Hello' + run);
//     }
//     return sara();
// }

// sanin('sata');




/*Object*/

const newSym = Symbol(1);

const Laptop= {

    name : 'HP',
    model: 2019,
    processor: '3.20 ghz',
    camera : 'single',
    hasZoom : false,
    [newSym] : '20',
    'display resulation' : 'good',

    fetchInfo : function(){

        return `Laptop namse is ${this.camera}`;
    },

    color : {   ///main object er vitore arekta object

        clr : 'red',
    },
    
};

// console.log(Laptop.color.clr); ///main object er vitore arekta object

// console.log(Laptop.fetchInfo());

// console.log(Laptop[newSym]);
// console.log(Laptop.hasOwnProperty('name'))
// console.log(Object.values(Laptop));

// console.log(Laptop['display resulation']);

/* objects value are one place */

const obj1 = { 
    a : 1, 
    b: 2,
    c: 3
};

const obj2 = { 
    x : 1, 
    y: 2,
    z: 3
};

const obj3 = { 
    p : 1, 
    q: 2,
    r: 3
};

// const fnlObj = {...obj1, ...obj2}; //spread kore 
// console.log(fnlObj);


// const fnlObj = Object.assign({}, obj1, obj2); //object assign kore
// console.log(fnlObj);




/*CONSTRUCTOR*/

function Person (first,last) {

    (this.firstName=first), (this.laststName=last);
    
}

const per1 = new Person('Shourav','khan');
const per2 = new Person('kamal','Khan');

console.log(per1);
console.log(per2);