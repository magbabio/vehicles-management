import axios from 'axios';

const API = 'http://localhost:4000'

// Obtener todos los vehículos
export const getCarsRequest = async () => 
  await axios.get(`${API}/cars`);

// Registrar un vehículo
export const createCarRequest = car => axios.post(`${API}/cars`, car);

// Eliminar un vehículo
export const deleteCarRequest = id => axios.delete(`${API}/cars/${id}`);

// Obtener un único vehículo
export const getCarRequest = id => axios.get(`${API}/cars/${id}`);

// Actualizar vehículo
export const updateCarRequest = async (id, newFields) =>
  await axios.put(`${API}/cars/${id}`, newFields);