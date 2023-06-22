if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//get express server running to create an express application
const express = require('express');
const app = express();

//MVC layout
const expressLayouts = require('express-ejs-layouts');

//import routes
const indexRouter = require('./routes/index');

//set up view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')
app.set('layout', 'layouts/layout')
app.use(expressLayouts);


//set up the mongodb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to mongoose"))


//use the controllers/routes
app.use('/', indexRouter);


app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => {
    console.log('backend is running');
});
