
/*---------------------------DailyChallenge----------------------*/
const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

const usernames = [];
const winners  = [];
let totalScor = 0;

gameInfo.forEach((user) => {
    usernames.push(`${user.username}!`);
})
console.log(`This is the usernames array: ${usernames}`)

gameInfo.forEach((user) => {
    (user.score > 5)? winners .push(user.username):console.log('score less than 5');
})
console.log(`This is the usernames with score bugger than 5 : ${winners }`)

gameInfo.forEach((user) => {
    totalScor += user.score;
})
console.log(`The total score is: ${totalScor}`)