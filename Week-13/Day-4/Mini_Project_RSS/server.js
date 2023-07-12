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

const port = 3000;
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
    //console.log(feed.items)
    let obj = new Set()
    
    res.render('pages/search', {items: feed.items, filtredPost: []}) 
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
    var selectedOption = req.body.category;
    console.log({option : selectedOption})
    var posts =[]
    feed.items.forEach((obj)=> {
      obj.categories.forEach(category => {
        console.log({cat : category})
        if(category === selectedOption){
          posts.push(obj)
        }
        else{
          console.log('continue')
        }
      });
    })
    console.log(posts)
    res.render('pages/search', {items: feed.items, filtredPost: posts}) 
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})


// API 3
app.post('/search/title', async (req, res)=>{
  try{
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    var value = req.body.title;
    console.log({titleValue : value})
    var posts =[]
    feed.items.forEach((obj)=> {
      console.log(obj.title)
        if(obj.title.includes(value)){
          posts.push(obj)
        }
        else{
          console.log('continue')
        }
    })
    console.log(posts)
    res.render('pages/search', {items: feed.items, filtredPost: posts}) 
  }
  catch(err){
    console.log(err)
    res.sendStatus(500).send('There is an errer')
  }
})
app.listen(port, ()=>{console.log(`I'm listening on port ${port}...`)})
