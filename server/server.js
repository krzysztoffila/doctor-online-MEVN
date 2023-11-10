require('dotenv').config({
  path: '.env'
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Doctor = require('./models/Doctor');
const Appointment = require('./models/Appointment');

const authRoutes = require('./routes/auth');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z bazą danych: ' + err);
});
mongoose.connection.on('connected', () => {
  console.log('Połączono z bazą danych MongoDB');
});

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Trasy dla autoryzacji
app.use('/auth', authRoutes);



// Trasa główna
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
