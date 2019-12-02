const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../util/geocode')


const app = express()

//define paths foer express config
const publicDiractoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))
//console.log(__filename)

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to server
app.use(express.static(publicDiractoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'weater app',
        name: 'natali'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name: 'natali'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP',
        name: 'natali',
        massage: 'we will help you'
    })
})
/*
app.get('/help/*',(req,res)=>{
    res.send('help article not found')
})
*/
app.get('/help/*',(req,res)=>{
    res.render('404',{
        name: 'natali',
        title:'404',
        message:'help article not found'
    })
})
app.get('/products', (req, res)=>{
    if(!req.query.search){
        res.send({
            error: 'you mast provide a search term'
        })
    }
    res.send({
        products:[]
    })
})
const person = {
    name: 'natali',
    my_age: 22,
    address: 'ofaqim'
}

app.get('/person',(req,res)=>{
    res.send(person)
})

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        res.send({
            error: 'you mast provide an address'
        })
    }
    geocode.request(req.query.address, (data)=>{ 
        res.send( {
             data
        })
    })
})

app.get('*', (req,res)=>{
   res.render('404',{
       name: 'natali',
       title: '404',
       message: 'page not found' 
   })
})

app.listen(3000, ()=>{
    console.log('serer is up on port 3000')
})