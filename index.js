const express = require('express');
const ejs = require('ejs')
const Nexmo = require('nexmo');

const app = express();

const nexmo = new Nexmo({
    apiKey:'0ea46540',
    apiSecret:'nvhdi95RCw3FBARa',
},{debug:true});


app.set('View engine', 'html');
app.engine('html', ejs.renderFile);


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.html')
});

app.post('/', (req, res) => {
    
});


const port = 3000;
const sever = app.listen(port, ()=> console.log(`server is running on port ${port}`));