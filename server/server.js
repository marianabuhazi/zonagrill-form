const express = require('express');
const bodyParser=require('body-parser')
const path = require('path');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 80;

const routes = require('./routes/routes.js');
const db = require('./models')

app.use(cors()); // Use this after the variable declaration

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

// // parsing AJAX requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// allow CORS:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
  
// routes
app.use('/api/', routes);

if(process.env.NODE_ENV==='production'){
  app.use(Express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
  });
}

app.use(express.static(path.join(__dirname, './index.html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  // const root_path = 
  res.sendFile(path.join(__dirname, './404.html'));
});