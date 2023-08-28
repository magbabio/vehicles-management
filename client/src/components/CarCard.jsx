import React from 'react'
import {useCars} from '../context/CarProvider';
import { useNavigate } from 'react-router-dom';
import days from 'dayjs';
import utc from 'dayjs/plugin/utc';
days.extend(utc);

const CarCard = ({ car }) => {

  const {deleteCar} = useCars();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="grid lg:grid-cols-8 gap-2 px-5 lg:py-5">
        <h2 className="text-sm font-bold">{car.plateNumber}</h2>
        <p>{car.year}</p>
        <p>{car.color}</p>
        <p>{days(car.entryDate).utc().format("DD/MM/YYYY")}</p>
        <p>{car.brand}</p>
        <p>{car.model}</p>
        
        <button 
          className="bg-primary text-white rounded-md p-1" onClick={() => deleteCar(car.id)}>
            Eliminar
        </button>
        <button 
          className="bg-primary text-white rounded-md p-1" onClick={() => navigate(`/edit/${car.id}`)}>
            Actualizar
        </button>
      </div>

      </div>
  );
}

export default CarCard