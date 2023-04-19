
/*------------------Exercise-2----------------*/
// Q1
let names = ["john", "sarah", 23, "Rudolf", 34]

for (var i in names) {
    if (typeof names[i] != "string") {
        continue;
    }
    else {
        if (names[i][0] != names[i].charAt(0).toUpperCase()) {
            names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1)
            console.log(names[i]);
        }
        else {
            continue;
        }
    }
}
// Q2
for (var i of names) {
    if (typeof i != "string") {
        break;
    }

    console.log(i)

}