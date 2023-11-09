require('dotenv').config({
    path: '../.env'
});
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', (err) => {
    console.error('Błąd połączenia z bazą danych: ' + err);
});
mongoose.connection.on('connected', () => {
    console.log('Połączono z bazą danych MongoDB');
});


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})