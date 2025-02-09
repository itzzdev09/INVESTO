const express = require('express');
const cors=require('cors');
const morgan = require('morgan');
const colors = require('colors');
//Initializing The Application
const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World');
});

//INITIALIZING THE PORT
const PORT = process.env.PORT || 5000;

//Listening to The PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`.bgGreen.white);
});
