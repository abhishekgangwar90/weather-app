const path = require('path');
const express = require('express');
const hbs = require('hbs');
const weatherDetails = require('./weather');


const app = express();

// constant paths
const publicPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')


// templating engine handlebars setup
app.set('view engine','hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// serving static files
app.use(express.static(publicPath))


// routing
app.get('/',(req, res) =>{
    res.render('index', {
        headerTitle: 'Weather App'
    })
})

app.get('/about',(req, res) =>{
    res.render('about', {
        headerTitle: 'Weather App',
        name: 'Abhishek Gangwar'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        headerTitle: 'Weather App'
    })
})

app.get('/weather',(req,res) =>{

    if(!req.query.location){
       return res.send({
            error: 400,
            message: 'location is required, but the value recieved was undefined'
        })
    }
    

    weatherDetails(req.query.location, (error, response) =>{
        if(error){
            res.send({
                error: 404,
                message: JSON.stringify(error)
            })
        } else{
            res.send(response)
        }
    })
})


app.get('*', (req,res) =>{
    res.render('404')
})

// server start
app.listen(3000, () =>{
    console.log('server is running');
})