const express = require('express');
// const path = require('path');
const apiKey = '9aad8abd250542c6b7c049d5e55b5406'
const bodyParser = require('body-parser')
const request = require('request');
const { response } = require('express');

const app = express();

app.set('view engine', 'ejs')
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))

// API space (coming)

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', function(req, res){
    let lat = req.body.lat
    let lon = req.body.lat 
    let url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${lat}&lon=${lon}&key=${apiKey}`

    request(url, (err, response, body) => {
        if (err){
            res.render('index', {data:null, error: 'Please input right coordinates'})
            
        }else {
            let data = JSON.parse(body)
        
            if(data.indexes == undefined){
                res.render('index', {data:null, error: 'Please input right coordinates'})
            }else{
                let message = `This is your local air quality scan ${data.baqi}`
                res.render('index', {data:message, error:null})
            };
        };
    });
});



const port = process.env.port || 3000;

app.listen(port);