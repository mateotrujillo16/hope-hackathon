const express = require('express');
const path = require('path');
const apiKey = '9aad8abd250542c6b7c049d5e55b5406'
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))
// API space (coming)

app.post('/', function(req, res){
    let lat = req.body.lat
    let lon = req.body.lat 
    let url = 'https://api.breezometer.com/air-quality/v2/current-conditions?lat={latitude}&lon={longitude}&key=YOUR_API_KEY&features={Features_List}'
    let url = 'https://api.breezometer.com/pollen/v2/forecast/daily?lat={latitude}&lon={longitude}&key=YOUR_API_KEY&features={Features_List}&days={Number_of_Days}'
    
});



const port = process.env.port || 3000;

app.listen(port);