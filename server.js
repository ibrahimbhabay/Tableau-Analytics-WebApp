const bodyParser = require('body-parser'),
ejs = require('ejs'),
express = require('express'),
app = express();

app.engine('html', ejs.renderFile); //reconfigure rendering engine
app.set('view engine', 'html'); //use html as files for the templates

app.use(express.static('images'));
app.use(express.static('css'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.render('index.html');
});

app.get('/temperaturetrend', function (request, response) {
    response.render('temperatureAna.html');
});

app.get('/cities', function (request, response) {
    response.render('cities.html');
});

app.get('/emissions', function (request, response) {
    response.render('emissions.html');
});
app.get('/inference', function (request, response) {
    response.render('inference.html');
    
});

app.get('*', function (request, response) {
    response.render('404.html');
});


app.listen(8088);

console.log('Server is running on: ' + "http://localhost:8088/");
