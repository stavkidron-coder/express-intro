const express = require('express');

// creating an instance of express
const app = express();
const port = 5000;

const quotesData = require('./modules/quotes.js');

app.use(express.static('server/public'));

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData);
}); 

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.length);
    res.send(quotesData[randomNumber]);
});

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

app.listen(port, () => {
    console.log('Up and running on port:', port);
    
});