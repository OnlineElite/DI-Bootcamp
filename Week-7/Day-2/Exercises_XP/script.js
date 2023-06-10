/*--------------------Exercises_XP-------------------*/

/*-----Exercise_1---------*/
//------1------//
console.log('=> Exercise_1')
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// The output will be: bread, carrot, potato, chicken, apple, orange

//------2------//
const country = "USA";
console.log([...country]);
// The output will be: 'U', 'S', 'A'

//------Bonus------//
let newArray = [...[,,]];
console.log(newArray);
// The output will be: Undefined, Undefined

/*-----Exercise_2---------*/
console.log('=> Exercise_2')
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
const welcomeStudents = users.map((val) => {
    return "Hello " + val.firstName
})
console.log(welcomeStudents)

const FSResidents = users.filter((val) => {
    return val.role == 'Full Stack Resident';
})
console.log(FSResidents)

//------Bonus------//
const ar1 = users.filter((val) => {
    return val.role == 'Full Stack Resident';
    
}).map((val) => {
    return val.lastName;
})
console.log(ar1)

/*-----Exercise_3---------*/
console.log('=> Exercise_3')
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const str = epic.reduce((acc, val) => {
    return acc + " "+val;
})
console.log(str)

/*-----Exercise_4---------*/
console.log('=> Exercise_4')
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

const passed = students.filter((val) => {
    return val.isPassed == true;
})
console.log(passed);

//------Bonus------//
const congrate = students.filter((val) => {
    return val.isPassed == true;
}).forEach((val) => {
    console.log( `Good Job ${val.name} you passed the course in ${val.course}`)
})