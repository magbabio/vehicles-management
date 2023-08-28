import {useEffect} from 'react';
import CarCard from '../components/CarCard';
import {useCars} from '../context/CarProvider';

const CarsPage = () => {

  // Inicializar vehículos
  const { cars, loadCars } = useCars();

  useEffect(() => {
    loadCars();
  }, []);

  // Mostrar vehículos en caso de que existan
  function renderMain() {
    if (cars.length === 0) return <h1>No se han registrado vehículos</h1>

    return cars.map((car) => <CarCard car={car} key={car.id} />);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-primary py-10">Gestión de vehículos</h1>
        <div className="lg:grid hidden px-5 bg-secondary text-white rounded-md grid-cols-8 gap-2 py-5">
          <p>Placa</p>
          <p>Año</p>
          <p>Color</p>
          <p>Fecha de ingreso</p>
          <p>Marca</p>
          <p>Modelo</p>
        </div>
        <div>{renderMain()}</div>
    </div>
  )
}

export default CarsPage
