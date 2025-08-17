//string methods
let fullName ="  Mohamed Yasser  ";
console.log(fullName.length);
let newFullName =fullName.trim()
console.log(newFullName.length);
console.log(fullName.toUpperCase(), fullName.toLowerCase());
let firstName = newFullName.slice(0, 7);
console.log(firstName);
let includesmohamed = fullName.includes("mohamed");
console.log( includesmohamed);

//array methods
let fruits=["apple", "banana", "mango"];
fruits.push("orange");
fruits.unshift("kiwi");
console.log(fruits);
fruits.pop(),fruits.shift();
console.log(fruits);
console.log(fruits.indexOf("mango"));
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
let bFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith("b"));
console.log(bFruits);
fruits.forEach((fruit, index) => {
console.log(`fruit ${index + 1} is ${fruit}`);
});


//math
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
console.log(Math.round(5.1), Math.ceil(5.1), Math.floor(5.1),Math.trunc(5.1));
console.log(Math.round(5.6), Math.ceil(5.6), Math.floor(5.6),Math.trunc(5.6));
console.log(Math.sqrt(64));
console.log(Math.max(3,8,20,1));
console.log(Math.min(3,8,20,1));


//ternary operator
let age1 = 20;
let Age = age1 >= 18 ? "Adult" : "Minor";



//object
let person = {
    Name:"zena ahmed",
    age: 20,
    address:"zag",
    displayInfo: function() {
        console.log(`Name: ${this.Name}, Age: ${this.age}, Address: ${this.address}`);
    },
    contact:{
    phone: "01125211531",
    email: "zenaahmedsaad@gamil.com",
    displayContactInfo: function() {
        console.log(`Phone: ${this.phone}, Email: ${this.email}`);
    }
    }
};
person.displayInfo();
person.contact.displayContactInfo();
person.address = "cairo";
person.displayInfo();



//destructuring
let{ Name, age ,contact:{ phone}}= person;
console.log(`Name: ${Name}, Age: ${age}, Phone: ${phone}`);

let [firstFruit, secondFruit] = fruits;
console.log(`First Fruit: ${firstFruit}, Second Fruit: ${secondFruit}`);

//spread/rest operators
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

function sumNumbers(...nums) {
return nums.reduce((total, num) => total + num, 0);
}



//template literal
let NAME="Zena";
let AGE=20;
console.log(`Hello ${NAME}, you are ${AGE} years old.`);
