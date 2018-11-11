/*  */
const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

/*  Import Database Config  */
const dbConfig = require('./database/db');

/*  connect to database*/
mongoose.connect(dbConfig.database);

/*  Import Route Handlers   */
const user = require('./controller/user');
const chat = require('./controller/chat');
const message = require('./controller/message');

/*  */
const app = express();

/*  */
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

/*  Set page parser*/
app.use(express.static(path.join(__dirname, 'public')));

/*  Routing */
app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/user', user);
app.use('/chat', chat);
app.use('/message', message);

/*  Serving the application */
const port = 3000;
app.listen(port, () => {
    console.log('Listening on port: '+port);
});