/**Array**/
let animals=[
    "Lion",
    "Tiger",
    "Griaffe",
    "Elephant",
    "Monkey",
    "Lemur",
    "Rhinoceros"
];

// Arrays cn contain basically any balid JavaScript expression!
const myWeirdArray=[
    "Text goes here",
    1,
    [0,2,3,4],
    function myFunction(){alert('hello world')}
];

//Access and Change an ArrayElement

let firstAnimal = animals[0];

// console.log & console.table

//declare empty array
let a = new Array();
let b =[];
console.log(a);
console.log(b);

// delcare arrya with contents
// let c =["apple", "orange", 37 ,' x'];
// console.log(c);

// c[3] = "Element 4";
// console.log(c);

//declare array with contents
let c = ["apple", "orange", 37 ,' x'];
console.table(c);

// add another element
c.push("Element 5");
console.log(c);

let element = c.pop();
console.log(element);
console.log(c);

c = c.join("--");
console.log(c);

//Map, Reduce, and Filter

//Map - aplly the specified function to each element of the array
const numbers=[1,2,3,4,5,6,7,8,9];
function double(num){
    return 2*num;
}

let doubles = numbers.map(double);
console.log(doubles);

//Filter - use a specified function to filter the array
function even(num){
    return (num % 2) === 0;
}

let evens = numbers.filter(even);
console.log(evens);

//Reduce - use a specified function to accumulate the elements across the array
function getSum(total, num){
    return total+num;
}

//initial value : 1
let total1=  numbers.reduce(getSum);
console.log(total1);

let total2 = numbers.reduce(getSum, 10);
console.log(total2);


//type of array
console.log(typeof numbers);

/**Objects**/

const object_name={
    key1:"value1",
    key2:"value2"
};

const animal = {
    name: "Linon",
    id: 3
};

console.log(animal.name);
console.log(animal);
console.log(animal['name']);

//JSON
const animalData = [
    {
        name:"Lion",
        number:3,
        eats:["zebra","antelope","buffalo","hippopotamus"]
    },
    {
        name:"Tiger",
        number:5,
        eats:["moose","deer","buffalo"]
    },
    {
        name:"Lemur",
        number:15,
        eats:["fruit","leaves","inscets"]
    },
    {
        name:"Rhinoceros",
        number:2,
        eats:["grass","shoots","leaves","berries"]
    }
];

console.log(animalData);
console.table(animalData);

//Simpe constructor with method property

function Dog(name,age){
    this.name = name;
    this.age = age;
    this.toString = function(){return "<"+this.name+","+this.age+">";};
}

{
    console.log(Dog.toString);

    let luch = new Dog("Luch", 6);
    const sam = new Dog("Sam",15);

    console.log(luch);
    console.log(luch.toString());
    console.log(sam);
    console.log(sam.toString());
}

JSON.stringify(animalData);


//** Arrow and Anonymous function **//

// function name (parameters){
//  statments   
// }

// function double (num){
//     return num * 2;
// }

//Anonymous function

// const name = function(parameters){
//     statments
// }

// const double = function(parameters){
//     statments
// }

//Arrow function
// const name = (parameters) => expression

// const double = (num) => num*2;

//if you have only one parameter, you can skip the parentheses as well
// const double = num => num * 2;

//map - apply the specified function to each element of the array
const array1 = [1,2,3,4,5,6,7,8,9];
const map1 = array1.map(x=>x*2);
console.log(map1);

//reduce - use a specified function to accumulate the elements across the array

const array2 = [1,2,3,4];
const reducer = (accumlater, currentValue) => accumlater+currentValue;

//1+2+3+4
console.log(array2.reduce(reducer));

//5+1+2+3+4
console.log(array2.reduce(reducer,5));

//filter - use a apecified function to filter the array
const words = ['spray','limit','elite','exuberant','destruction','present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//const - not real constants

// you can create a constant array:
const animals2 = ["Lion","Tiger","Giraffe"];
console.log(animals2);

//you can change an element of a const array:
animals2[0] = "Elephant";
console.log(animals2);


//you can add an element to a const array:
animals2.push("Monkey");
console.log(animals2);

//but you cant not reassign a constant array:
// animals2 = ["Monkey","Lemur","Rhinoceros"];

//you can create a const object:
const myDog = {name:'Momo', breed: 'Shitsu', colot:'white'};
console.log(myDog);

//you can change a property:
myDog.colot = "brown";
console.log(myDog);

myDog.age = 6;
console.log(myDog);

//Error. you cna not reassign a constat objec:
// myDog={name:'Luch', breed:'Poodel'};

//Factorial
function factorial(n){
    if(n<0){
        throw "Number must be non-negative";
    }

    var result = 1;
    while(n>1){
        result *= n;
        n--;
    }
    return result;
}
console.log(factorial(5));

let factorial2 = n => (n<2) ? 1 : n* factorial2(n-1);
console.log(factorial2(5));



