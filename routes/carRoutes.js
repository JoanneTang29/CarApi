const express = require('express');

const carController = require('./../controllers/carController');

const carRouter = express.Router();

carRouter.route('/').get(carController.getCars).post(carController.createCars);
carRouter
  .route('/:id')
  .get(carController.getOneCar)
  .delete(carController.deleteCar)
  .put(carController.updateCar);

module.exports = carRouter;
