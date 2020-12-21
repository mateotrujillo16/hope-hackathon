// const express = require('express');

// // express app
// const app = express();

// // register view engine
// app.set('view engine', 'ejs');

// const path = require('path')

// // routing pages to server
// app.get('/', (req, res) => {
//   res.sendFile("/Users/MateoT/Downloads/hope-hackathon-main/index.html")
// })
// app.get('/login', (req, res) => {
//   res.render('login')
// })
// app.get('/about', (req, res) => {

// })

// // app.use('/', router);

// // listen for requests
// app.listen(5000);

// console.log('Running at Port 5000')


const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware that makes the users input available
const port = 6000;

app.use(bodyParser.urlencoded({ extended: false }));

// set up routes for the links
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
})
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login-form/login.html')
})

app.post('/login', (req, res) => {

  // const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  res.send(`username: ${username} Password: ${password}`);
})


// open a port
app.listen(port, () => 
  console.log(`Listening on port ${port}`))