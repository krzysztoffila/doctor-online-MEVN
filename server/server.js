require('dotenv').config({
    path: '.env'
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', (err) => {
    console.error('Błąd połączenia z bazą danych: ' + err);
});
mongoose.connection.on('connected', () => {
    console.log('Połączono z bazą danych MongoDB');
});

const app = express();

const corsOptions = {
    origin: 'http://localhost:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Nasłuchiwanie na porcie ${port}`);
});
