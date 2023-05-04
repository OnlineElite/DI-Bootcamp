
/*----------------------------Exercise_1------------------------*/
console.log("/// Exercise_1:")
const people = ["Greg", "Mary", "Devon", "James"];
// Part I

people.splice(0, 1);
people.splice(2, 1, "Jason")
people.push("Jamal")
console.log(people.indexOf("Mary"))
const copy = people.slice(1, 3)
console.log(copy)
console.log(people.indexOf("Foo"))
var last = people.pop()

// Part II

 for(let i in people){
    console.log("Item number "+ i + ": "+ people[i])
 }

var target = people.indexOf("Jason")
 for(let j in people){
    if(j != target){
        console.log(people[j])
    }
    else{
        break;
    }
 }
/*----------------------------Exercise_2------------------------*/
console.log("/// Exercise_2:")
const colors = ["red", "blue", "green", "yellow", "white", "orange"]
 for(let i in colors){
    console.log("My #"+i+" choice is "+colors[i])
 }
console.log("/******** Bonus ********/")
 const suffix = ["1st", "2nd", "3rd", "4th", "5th", "6th"]
 for(let i in colors){
    for(let j in suffix){
      if(i === j){
         console.log("My " + suffix[j] + " choice is " + colors[i]);
         break;;
      }
      else{
         continue;
      }
    }
 }
/*----------------------------Exercise_3------------------------*/
console.log("/// Exercise_3:")
var number = prompt("Enter a number:")
console.log(typeof(number))
while(number< 10){
   number = prompt("try again:")
}
console.log(number)
/*----------------------------Exercise_4------------------------*/
console.log("/// Exercise_4:")
const building = {
   numberOfFloors: 4,
   numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
   },
   nameOfTenants: ["Sarah", "Dan", "David"],
   numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
   },
}
console.log("Number of floors is : "+building.numberOfFloors)
console.log("Number of apartments on the floors 1 and 3 is : first Floor: " 
           + building.numberOfAptByFloor.firstFloor +" and third Floor: "+building.numberOfAptByFloor.thirdFloor)
console.log("Second tenant is: " + building.nameOfTenants[1] + " , he has " + building.numberOfRoomsAndRent.dan[0] 
           +" rooms in his apartment.")

var sarahRent = building.numberOfRoomsAndRent.sarah[1];
var davidRent = building.numberOfRoomsAndRent.david[1];
var danRent = building.numberOfRoomsAndRent.dan[1];
var sum = sarahRent+davidRent;
if(sum > danRent){
   building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log("Dan's rent is: "+building.numberOfRoomsAndRent.dan[1])
/*----------------------------Exercise_5------------------------*/
console.log("/// Exercise_5:")
const family = {fatherNmae: "Ahmed", matherName: "Aicha", BrotherNmae: "Hafid"}
console.log("Family keys are: ")
for(let i in family){
   console.log(i)
}
console.log("Family values are: ")
for(let j in family){
   console.log(family[j])
}

/*----------------------------Exercise_6------------------------*/
console.log("/// Exercise_6:")
const details = {
   my: 'name',
   is: 'Rudolf',
   the: 'raindeer'
}
var str = ""
for(let i in details){
   str += i + " " + details[i]+" "
}
console.log(str)
/*----------------------------Exercise_7------------------------*/
console.log("/// Exercise_7:")
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
var string = []
for(let i in names){
   string[i] = names[i].charAt(0);
}
string.sort();
var secret = "";
for(let i in string){
   secret += string[i] 
}
console.log(secret)