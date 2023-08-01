/*---------------------Mini-Project------------------*/
const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
},
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
    {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
    },
    {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

// Part I
var container = document.getElementById('container')
container.style.margin = "10px"
container.style.padding = "2px"
container.style.flexWrap = "wrap"
container.style.width = "80vw"
container.style.display = "flex"
container.style.alignItems = "center"
container.style.justifyContent = "center"


robots.forEach((robo)=>{
  var card = document.createElement('div')
  card.setAttribute('id', robo.id)
  card.style.width = "190px"
  card.style.height = "220px"
  card.style.borderRadius = "8px"
  card.style.backgroundColor = "rgb(59, 175, 243)"
  card.style.display = "none"
  card.style.flexDirection = "column"
  card.style.alignItems = "center"
  card.style.justifyContent = "center"
  card.style.margin = "3px"
  card.style.position = "relative"
  container.appendChild(card)

  var cercl = document.createElement('div')
  cercl.style.width = "120px"
  cercl.style.height = "120px"
  cercl.style.borderRadius = "100%"
  cercl.style.backgroundColor = "rgb(3, 3, 66)"
  cercl.style.border = "2px solid white"
  cercl.style.paddingBottom = "3px"
  card.appendChild(cercl)

  var imag = document.createElement('img')
  imag.setAttribute('src',robo.image)
  imag.style.width = "100%"
  imag.style.height = "100%"
  imag.style.borderRadius = "100%"
  cercl.appendChild(imag)

  var title = document.createElement('h4')
  title.textContent = robo.name
  title.style.color = "black"
  title.style.marginTop = "5px"
  card.appendChild(title)

  var email = document.createElement('p')
  email.textContent = robo.email
  email.style.color = "black"
  email.style.marginTop = "5px"
  card.appendChild(email)
  
})

// Part II
var searchArea = document.getElementById('search')
searchArea.addEventListener('keyup', displaySearch)
var names = []
function displaySearch(){
  
  robots.filter((rob)=>{
    if(searchArea.value != ""){
      if(rob.name.includes(searchArea.value)){
        document.getElementById(rob.id).style.display = "flex"
      }
      else{
        document.getElementById(rob.id).style.display = "none"
      }
    }
    else{
      document.getElementById(rob.id).style.display = "flex"
    }
  })
}
displaySearch()


