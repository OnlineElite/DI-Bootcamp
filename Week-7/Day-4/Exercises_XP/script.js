/*--------------------Exercises_XP-------------------*/

/*---Exercise_1---*/
console.log('=> Exercise 1')
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The result will be: I am john Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`);

/*---Exercise_2---*/
console.log('=> Exercise 2')
function displayStudentInfo(objUser){
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

/*---Exercise_3---*/
console.log('=> Exercise 3')
const users = { user1: 18273, user2: 92833, user3: 90315 }

const arrayUsers = Object.entries(users);
console.log(arrayUsers)

const UserId_X2 = arrayUsers.map((val) => {
    return [val[0],val[1]*2];
})
console.log(UserId_X2)

/*---Exercise_4---*/
console.log('=> Exercise 4')
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  // The result will be: type of mumber is an Object.

/*---Exercise_5---*/
console.log('=> Exercise 5')
class Dog {
    constructor(name) {
      this.name = name;
    }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
/*class Labrador extends Dog {
    constructor(name, size) {
        this.size = size;
    }
};*/

// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};
console.log('The answer is: Option 2, because we have to put the constaructor parametrs of super class in the constructor of the sub class and call them with the <super> keyword.')
// 3
/*class Labrador extends Dog {
    constructor(size) {
        super(name);
        this.size = size;
    }
};

// 4
class Labrador extends Dog {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};*/
// The answer is: Option 2  
// because we have to put the constaructor parametrs of super class in the constructor of the sub class and call them with the <super> keyword.

/*---Exercise_6---*/
console.log('=> Exercise 6')

// Part I
// 1
console.log([2] === [2]) // false
console.log({} === {}) // false

//2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // The result is: 4 Because objects 1 and 2 point to the same reference, If we change one of them, the other will automatically change
console.log(object3.number) // The result is: 4 Because objects 2 and 3 point to the same reference, If we change one of them, the other will automatically change
console.log(object4.number) // The result is: 5 Because object 4 does not point to the same reference as object 1.

// Part II
// 1
class Animal {
    constructor (name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }
};

// 2
class Mamal extends Animal{
    constructor (name, type, color){
        super(name, type, color);
    }
    
    sound(ASound){
        console.log(`${ASound}, I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`)
    }
}

// 3
let farmerCow = new Mamal('kely', 'cat', 'black and white')

farmerCow.sound('Miaw Miaw')