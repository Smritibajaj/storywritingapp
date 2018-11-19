// app.js
const express = require('express');
const cors = require('cors');
//var expressLayouts = require('express-ejs-layoutsnp');
const bodyParser = require('body-parser');
const story = require('./routes/story.route'); // Imports routes for the story;
// initialize our express app
const app = express();
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://simmybajaj:qwerty1234@ds161856.mlab.com:61856/storieschallenge';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// for body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

// app.use(cors());
app.use('/', story);
//port no to express 
//to test server write node app.js in terminal
let port = 8087;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});