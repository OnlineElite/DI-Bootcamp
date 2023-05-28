
/*-----------DailyChallenge-----------------*/
function DateToString(yyyy,MM,dd,hh,mm,ss){
    var dat = new Date(yyyy,MM,dd,hh,mm,ss)

    var jsonDat = dat.toJSON()

    console.log(dat)
    console.log(jsonDat)
}

var fullDate = { 
    year : 1997,
    month : 10,
    day : 15,
    hour : 21,
    minute : 22,
    second : 31
}

DateToString(fullDate.year,fullDate.month,fullDate.day,fullDate.hour,fullDate.minute,fullDate.second)

// ( yyyy > 1970 )
//  ( 23 >= hh >= 00 & hh.length === 2 )
// ( MM.length === 2 & dd.length === 2 & mm.length === 2 & ss.length === 2 )



