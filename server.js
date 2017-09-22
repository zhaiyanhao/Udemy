const express = require('express');
const hbs = require('hbs');
var port = process.env.PORT ||3000;

const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  console.log(req.method);
  var log = "test";
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log(err);
    }
  });
  next();

});

app.use((req,res,next)=>{
  res.render('tesing.hbs');
  next();
})
;
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log('Server is up on port 3000');
});
