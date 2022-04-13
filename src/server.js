const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const carsRoute = require('./api/cars');

const { PORT } = require('./config');

const app = express();

// MiddleWare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/', carsRoute);

// 404
app.use((req, res) => {
  res.status(404).json({ err: 'not found' });
});
app.listen(PORT, () => console.log('express is online', PORT));
