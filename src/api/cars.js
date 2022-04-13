const express = require('express');
const { dbClient } = require('../config');

const carsRoute = express.Router();

carsRoute.get('/cars', async (req, res) => {
  try {
    // prisijungsim prie mongoDb
    await dbClient.connect();
    // atliksim veiksma (gauti duom, irasyti duom. atnaujinti)
    const carsArr = await dbClient.db('demo1').collection('cars').find().toArray();
    console.log('carsArr===', carsArr);
    res.json(carsArr);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('something went wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
    console.log('close conn');
  }
  //   res.json('GET /users route');
});

module.exports = carsRoute;
