import {createContext, useContext, useState } from 'react';
import { getCarsRequest, 
  createCarRequest, 
  deleteCarRequest, 
  getCarRequest,
  updateCarRequest
} from '../api/cars.api';
import { CarContext } from './CarContext';

export const useCars = () => {
  const context = useContext(CarContext)
  if (!context) {
    throw new Error('useCars must be used within a CarContextProvider')
  }
  return context;
};

export const CarContextProvider = ({ children }) => {

const [cars, setCars] = useState([]);

async function loadCars() {
  const response = await getCarsRequest();
  setCars(response.data);
}

const createCar = async (car) => {
 try {
  const response = await createCarRequest(car);
 } catch (error) {
  console.log(error.response.data);
  }
};

const deleteCar = async (id) => {
  try {
    const res = await deleteCarRequest(id);
    setCars(cars.filter(car => car.id !== id));
  } catch (error) {
    console.log(error.response.data);
  }
};

const getCar = async (id) => {
  try {
    const response = await getCarRequest(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const updateCar = async (id, newFields) => {
  try {
    const response = await updateCarRequest(id, newFields);
    console.log(response)
  } catch (error) {
    console.log(error.response.data);
  }
};

  return (
  <CarContext.Provider value={{ cars, loadCars, createCar, deleteCar, getCar, updateCar }}>
    {children}
  </CarContext.Provider>
  );
};