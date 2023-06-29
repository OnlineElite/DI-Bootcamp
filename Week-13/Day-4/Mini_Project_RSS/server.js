const exp = require('express')
const bp = require('body-parser')
const cors = require('cors')
let Parser = require('rss-parser');

const app = exp()
let parser = new Parser();
app.use(cors())
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.set('view engine', 'ejs');
app.use('/',exp.static(__dirname+'/public'));


// API 1
app.get('/', async (req, res)=>{
  try{
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('pages/index', {posts: feed.items}) 
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})

// API 2
app.get('/search', async (req, res)=>{
  try{
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    //console.log("here is "+feed.title);
    let obj = new Set()
    
    res.render('pages/search', {categories: []/*feed.items*/}) 
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})
/*
// API 3
app.post('/search/title', async (req, res)=>{
  try{
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    console.log("here is "+feed.title);
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})

// API 4
app.post('/search/category', async (req, res)=>{
  try{
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    console.log("here is "+feed.title);
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})
*/
app.listen(3000)
