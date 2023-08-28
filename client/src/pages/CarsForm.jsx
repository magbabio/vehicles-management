import { useForm } from "react-hook-form";
import { useCars } from '../context/CarProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import days from 'dayjs';
import utc from 'dayjs/plugin/utc';

const CarsForm = () => {

  // Funcionalidades de React Hook Form
  const {register, handleSubmit, setValue, 
    formState: {errors} 
  } = useForm();

  const {createCar, getCar, updateCar} = useCars();

  // Comprobar si el carro existe o no
  const params = useParams(); 

  // Navegación entre páginas
  const navigate = useNavigate();

  // Editar los datos
  useEffect(() => {
   const loadCar = async () => {
    if (params.id) {
      const car = await getCar(params.id);
      console.log(car);
      setValue('plateNumber', car.plateNumber)
      setValue('year', car.year)
      setValue('color', car.color)
      setValue('entryDate', days(car.entryDate).utc().format("MM/DD/YYYY"))
      setValue('brand', car.brand)
      setValue('model', car.model)
    }
   };
   loadCar();
  }, []);

  // Enviar valores a las funciones crear y actualizar
  const onSubmit = handleSubmit ((values) => {
    if (params.id){
      updateCar(params.id, values);
      navigate("/");
    } else {
      console.log(values);
      createCar(values);
      navigate("/");
    }
  });


return (
  
  <div>

    <form onSubmit={onSubmit} className=" max-w-sm rounded-md mx-auto mt-10">
      <h1 className="text-xl font-bold uppercase text-center py-3">
        {
          params.id ? "Actualizar vehículo" : "Registrar vehículo"
        }
      </h1>
      <div className="">
        <div className="py-3">
        <input 
          type="text" 
          name="plateNumber"
          placeholder="Placa del vehículo"
          {...register("plateNumber", {
            required: {
              value: true,
              message: "Por favor ingrese placa del vehículo"
            },
            minLength: {
              value: 7,
              message: "Placa debe contener únicamente 7 caracteres"
            },
            maxLength: {
              value: 7,
              message: "Placa debe contener únicamente 7 caracteres"
            }
          })}
          className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
        />
      {
        errors.plateNumber && <span className="text-sm text-red-600">{errors.plateNumber.message}</span>
      }
        </div>

      <div className="py-3">
      <input 
        type="text" 
        name="year"
        placeholder="Año del vehículo"
        {...register("year", {
          required: {
          value: true,
          message: "Por favor ingrese año del vehículo"
          },
          minLength: {
            value: 4,
            message: "Año no válido"
          },
          maxLength: {
            value: 4,
            message: "Año no válido"
          },
          pattern: {
            value: /^[0-9]+[0+9]*$/,
            message: "Año no válido"
          }
        })}
        className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
      />
      {
        errors.year && <span className="text-sm text-red-600">{errors.year.message}</span>
      }
      </div>

      <div className="py-3">
      <input 
        type="text" 
        name="color"
        placeholder="Color del vehículo"
        {...register("color", {
          required: {
            value: true,
            message: "Por favor ingrese color del vehículo"
            },
            minLength: {
              value: 2,
              message: "Color no válido"
            },
            maxLength: {
              value: 10,
              message: "Color no válido"
            },
            pattern: {
              value: /^[a-zA-Z ]*$/,
              message: "Color no válido"
            }
        })}
        className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
      />
      {
        errors.color && <span className="text-sm text-red-600">{errors.color.message}</span>
      }
      </div>

      <div className="py-2">
      <label className="block">Fecha de ingreso</label>
      <input 
        type="date" 
        name="entryDate"
        {...register("entryDate", {
          required: {
            value: true,
            message: "Por favor ingrese fecha de ingreso del vehículo"
          }
        })}
        className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
      />
      {
        errors.entryDate && <span className="text-sm text-red-600">{errors.entryDate.message}</span>
      }
      </div>

      <div className="py-3"> 
      <input 
        type="text"
        name="brand"
        placeholder="Marca del vehículo"
        {...register("brand", {
          required: {
            value: true,
            message: "Por favor ingrese marca del vehículo"
            },
            minLength: {
              value: 2,
              message: "Marca no válida"
            },
            maxLength: {
              value: 30,
              message: "Marca no válida"
            }
        })}
        className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
      />
      {
        errors.brand && <span className="text-sm text-red-600">{errors.brand.message}</span>
      }
      </div>

      <div className="py-3">
      <input 
        type="text" 
        name="model"
        placeholder="Modelo del vehículo"
        {...register("model", {
          required: {
            value: true,
            message: "Por favor ingrese modelo del vehículo"
            },
            minLength: {
              value: 2,
              message: "Modelo no válido"
            },
            maxLength: {
              value: 20,
              message: "Modelo no válido"
            }
        })}
        className="border-b focus:outline-none focus:border-secondary focus:b-2 transition-colors peer py-1 w-full"
      />
      {
        errors.model && <span className="text-sm text-red-600">{errors.model.message}</span>
      }
      </div>
      </div>

      <div className="py-4">

      <button type="submit" className="block bg-primary px-2 py-2 text-white w-full rounded-md">
        {
          params.id ? "Actualizar" : "Registrar"
        }
      </button>

      </div>
    </form>

    </div>

  )
}

export default CarsForm