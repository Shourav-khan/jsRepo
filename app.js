
// // let userInput = prompt('Enter your number');
// // let num = parseInt(userInput);

// // if(num % 2 === 0){
// //     console.log(`${num} is an even number`);
    
// // }else{
// //     console.log(`${num} is a odd number`);
// // }

// // let a = 20;
// // let b = 30;
// // let Fname = 'Shourav';

// // let zigzag = a + b + Fname + a + b; 

// // console.log(zigzag);

// // function sk(name, age,dob = 1996){
// //     console.log('My name is ' + name + " I am "+ age + ' My birth is ' + dob);
// // }

// // sk('shourav',20,1996)

// // function skcc(){
// //     console.log('subscribed successfully');
// // }

// // document.getElementById('bottom').addEventListener('click', skcc);


// // (function (t = 'none'){
// //     console.log('heeelofsafd ' + t);
// // })();


// // let numbers = [4,8,6,3,5];
// // let sqNumbers = numbers.map (function(num){
// //     return num * num; 
// // });

// // console.log(sqNumbers);




// // function add(x,y){
// //     console.log(x+y);
// // }

// // console.log(add(10,20));



// // let b = function(x,y){
// //     return x*y;
// // }

// // console.log(b(2,3));



// /* Arrow function */


// // let b = (x,y) => x*y;
// // console.log(b(5,4));


// /* Nested function (ektar vetro arekta function kaj kobe*/ 

// // function sanin(run){
// //     function sara(){
// //         alert('Hello' + run);
// //     }
// //     return sara();
// // }

// // sanin('sata');




// /*Object*/

// const newSym = Symbol(1);

// const Laptop= {

//     name : 'HP',
//     model: 2019,
//     processor: '3.20 ghz',
//     camera : 'single',
//     hasZoom : false,
//     [newSym] : '20',
//     'display resulation' : 'good',

//     fetchInfo : function(){

//         return `Laptop namse is ${this.camera}`;
//     },

//     color : {   ///main object er vitore arekta object

//         clr : 'red',
//     },
    
// };

// // console.log(Laptop.color.clr); ///main object er vitore arekta object

// // console.log(Laptop.fetchInfo());

// // console.log(Laptop[newSym]);
// // console.log(Laptop.hasOwnProperty('name'))
// // console.log(Object.values(Laptop));

// // console.log(Laptop['display resulation']);

// /* objects value are one place */

// const obj1 = { 
//     a : 1, 
//     b: 2,
//     c: 3
// };

// const obj2 = { 
//     x : 1, 
//     y: 2,
//     z: 3
// };

// const obj3 = { 
//     p : 1, 
//     q: 2,
//     r: 3
// };

// // const fnlObj = {...obj1, ...obj2}; //spread kore 
// // console.log(fnlObj);


// // const fnlObj = Object.assign({}, obj1, obj2); //object assign kore
// // console.log(fnlObj);




// /*CONSTRUCTOR*/

// function Person (first,last) {

//     (this.firstName=first), (this.laststName=last);
    
// }

// const per1 = new Person('Shourav','khan');
// const per2 = new Person('kamal','Khan');

// // console.log(per1);
// // console.log(per2);




//                                 /* ARRAY */

// const phones = ['redmi', 'MI', 'Iphone'];

// phones[2] = 'My phone';
// phones[3] = 'kawasaki';
// phones[4] = 'messi';

// //  console.log(phones);
// // console.log(phones[phones.length - 1]); //length

// //  phones.pop(); //delete last item of array
// //  phones.push('awei'); //delete last item of array

// // console.log(phones.toString());
// // console.log(phones.join(" ! "));

// const p=[];
// const a = [1,2,3];
// const b = [1,2,3];
// const c = [1,2,3];

// const z = p.concat(a,b,c);

// // console.log(z);

// const D = [
//     [1,2,3,10,100],
//     [4,5,6],
// ];

// // console.log(D);
// // console.log(D.flat());

// function on() {
//     document.getElementById('text').innerHTML = 'I`m On';
//     document.getElementById('bottom').innerHTML = 'I`m On';
//     document.getElementById('bottom').style.background = 'black';
// }

// function added () {
//     document.getElementById('liked').innerHTML = '<i class="fa-solid fa-heart"></i> Liked';
// }

// function viewText(){
//     document.getElementById('geth').innerHTML ='key pressed 😍😘';
// }

// function load(){
//     document.getElementById('teth').innerHTML ='page loadeddddddd 😍😘';
// }

// function pageResize(){
//     document.getElementById('textarea').style.height = '100px'; 
// }

// document.getElementById('maro').addEventListener = ('click', function(){
//     document.getElementById('maro').innerHTML='change hoise'; 
// });

// document.getElementById('maro').onclick = function(){
//     document.getElementById('aso').innerHTML='change hoise'; 
//     document.getElementById('maro').innerHTML='change hoise'; 
// }


/** -------------MAth ---------------*/

// let upperValue = 6;
// let lowerValue = 1;

// let till = Math.ceil( Math.random() * upperValue);

// console.log(till);


//                        lodo

// function roleDice(){
//     let randomNum = Math.ceil(Math.random() * 6);
//     let imageSource = 'img/'+ randomNum + '.png';
//     document.getElementById('ludo').src = imageSource;

// }

                    // DATE


// function loop(){
//     for (let step = 1; step < 1000; step++) {
//         console.log('Shourav');
//     }

// }

// let startTime = Date.now();
// loop();
// let endtTime = Date.now();

// console.log(`time take ${startTime - endtTime}`);


// Premitive data = number , boolea, String, null, undefine, Symbol. 
// Non-premitive = Array, objct 

// Premitive { main data change hobe na }
// Non-premitive: {main data change hobe} 




const inputVal = document.getElementById("valueInput");
const listToDo = document.getElementById("to-do-list");


const addTodo = (e) => {

    e.preventDefault();
    console.log("testing")

};

document.querySelector(".btnn").addEventListener("click" , (e) => {

    addTodo(e);
});