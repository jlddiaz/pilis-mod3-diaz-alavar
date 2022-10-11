import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { getUbicaciones } from "../../service";

const UbicacionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);

  const onSubmit = (data) => {
    // console.log(data.latitud);
    getUbicaciones(data.latitud, data.longitud).then((resp) => {
      console.log(resp);     
      setUbicaciones([
        ...ubicaciones,
        { id:resp.generationtime_ms, nombre: data.nombre, latitud: data.latitud, longitud: data.longitud },
      ]); 
    });
    
  };
  return (
    <>
      <h1>Crear Nueva Ubicación</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
        </div>
        <div>
          <label htmlFor="">Latitud</label>
          <input
            type="text"
            {...register("latitud", {
              required: true,
            })}
          />
        </div>
        <div>
          <label htmlFor="">Longitud</label>
          <input
            type="text"
            {...register("longitud", {
              required: true,
            })}
          />
        </div>
        <input type="submit" value="Crear" />
      </form>
    </>
  );
};
export default UbicacionForm;
