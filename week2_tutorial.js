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

//initial value : 5
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

//