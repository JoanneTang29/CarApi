const Cars = require('./../models/carModel');

exports.getCars = async (request, response) => {
  try {
    response.status(200).json({
      status: 'success',
      results: cars.length,
      data: {
        cars,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.createCars = async (request, response) => {
  try {
    const newCar = await Cars.create(request.body);
    response.status(201).json({
      status: 'success',
      results: cars.length,
      data: {
        newCar,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.getOneCar = async (request, response) => {
  try {
    const car = await Cars.findById(request.params.id);
    response.status(200).json({
      status: 'success',
      results: cars.length,
      data: {
        car,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.deleteCar = async (request, response) => {
  try {
    await Cars.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: 'success',
      data: {},
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};

exports.updateCar = async (request, response) => {
  try {
    const updateCar = await Cars.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(200).json({
      status: 'success',
      data: {
        updatedCar,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      data: {
        error: error.message,
      },
    });
  }
};
