
/*---------------dailyChallenge------------------*/
const planets = [
    {
        name : "Mercury",
        moonNumber : 1,
        backgroundColor : "brown",
        marginTop : "50px"
    },
    {
        name : "Venus",
        moonNumber : 2,
        backgroundColor : "green",
        marginTop : "150px"
    },
    {
        name : "Earth",
        moonNumber : 2,
        backgroundColor : "blue",
        marginTop : "230px"
    },
    {
        name : "Mars",
        moonNumber : 2,
        backgroundColor : "yellow",
        marginTop : "250px"
    },
    {
        name : "Jupiter",
        moonNumber : 2,
        backgroundColor : "pink",
        marginTop : "250px"
    },
    {
        name : "Saturn",
        moonNumber : 2,
        backgroundColor : "white",
        marginTop : "230px"
    },
    {
        name : "Uranus",
        moonNumber : 2,
        backgroundColor : "purple",
        marginTop : "150px"
    },
    {
        name : "Neptune",
        moonNumber : 2,
        backgroundColor : "orange",
        marginTop : "50px"
    },
]

var section = document.getElementsByClassName('listPlanets')[0]

for(let i in planets){
    var planit= document.createElement('div');
    planit.setAttribute('class', "planet");
    planit.textContent = planets[i].name;
    planit.style.marginTop = planets[i].marginTop
    planit.style.backgroundColor = planets[i].backgroundColor;
    section.appendChild(planit)
}