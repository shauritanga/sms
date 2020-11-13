const express = require('express');
const ejs = require('ejs')
const Nexmo = require('nexmo');

const app = express();



app.set('View engine', 'html');
app.engine('html', ejs.renderFile);


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello there');
});

app.post('/', (req, res) => {
    
});


const port = 3000;
const sever = app.listen(port, ()=> console.log(`server is running on port ${port}`));