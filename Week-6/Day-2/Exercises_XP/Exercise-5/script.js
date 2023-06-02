/*--------------------Exercise-5_XP---------------*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st","nd","rd","th"];

colors.forEach((color, index) => {

    (ordinal.length > index )?
        console.log(`${index+1}${ordinal[index]} choice  is ${color}`):
        console.log(`${index+1}${ordinal[(ordinal.length-1)]} choice  is ${color}`);

});
