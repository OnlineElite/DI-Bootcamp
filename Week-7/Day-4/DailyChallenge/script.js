/*--------------------DailyChallenge-------------------*/

// 1
class Video{
    constructor(title , uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

// 2
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

// 3
let vid1 = new Video('Healer', 'Jamal', '12 hours')
vid1.watch();

// 4
let vid2 = new Video('The panisher', 'Ahmed', '9hours')
vid2.watch();

// 5 (Bonus)
const videoInfo= [
    {
        title : 'the breaking bad',
        uploader : 'jack',
        time : '10 hours'
    },
    {
        title : 'peaky blanders',
        uploader : 'tomson',
        time : '24 hours'
    },
    {
        title : 'vikings',
        uploader : 'helson',
        time : '15 hours'
    },
    {
        title : 'the walking dad',
        uploader : 'john',
        time : '9 hours'
    },
    {
        title : 'scorpion',
        uploader : 'lion',
        time : '18 hours'
    }
]

// 6 (Bonus)
const videos = videoInfo.map(({title, uploader, time}) => {return new Video(title, uploader, time)});
console.log(videos)