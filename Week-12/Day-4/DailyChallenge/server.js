
const exp = require('express');
const app = exp();
const path = require('path');
const port = 3000;

app.use(exp.static(path.join(__dirname, 'public')));

// API for hobbies
app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof (hobby) != 'string') {
    res.status(404).send('Invalid hobby');
  } else {
    res.send(`My hobby is ${hobby}`);
  }
});

// API for picture
app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'galeri.html'));
});

// API for form
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// API for formData
var dataStock ={};
app.post('/formData', (req, res) => {
  res.sendStatus = 200;
  //const email = req.body.email;
  //const message = req.body.message;
  //dataStock = {email:req.body.email, message:req.body.message }
  res.send({message : "Hello this account is allready exsist"})
  
});


app.listen(port, ()=>{console.log(`I'm listening on port ${port}...`)})


