import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { getUbicaciones } from "../../service";
import "./UbicacionForm.css"

const UbicacionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data.latitud);
    getUbicaciones(data.latitud, data.longitud).then((resp) => {
      console.log("REsp api");
      console.log(resp);
      setUbicaciones([
        ...ubicaciones,
        {
          id: resp.generationtime_ms,
          nombre: data.nombre,
          latitud: data.latitud,
          longitud: data.longitud,
          temperatura: resp.current_weather.temperature,
          velocidad_del_viento: resp.current_weather.windspeed,
        },
      ]);
      navigate("/");
    });
  };
  return (
    <div className="container">
      <h2>Crear Nueva Ubicación</h2>
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              {/* <span className="input-group-text" id="basic-addon1">
                Nombre
              </span> */}
              <label for="nombre" class="form-label">
                Nombre de Ciudad
              </label>
              <input
                id="nombre"
                className="form-control"
                type="text"
                {...register("nombre", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-3">
              {/* <span className="input-group-text" id="basic-addon1">
                Latitud
              </span> */}
              <label for="latitud" class="form-label">
                Latitud
              </label>
              <input
                id="latitud"
                className="form-control"
                type="text"
                {...register("latitud", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-3">
              {/* <span className="input-group-text" id="basic-addon1">
                Longitud
              </span> */}
              <label for="longitud" class="form-label">
                Longitud
              </label>
              <input
                id="longitud"
                className="form-control"
                type="text"
                {...register("longitud", {
                  required: true,
                })}
              />
            </div>
            <div className="btn-row">
              <Link to={"/"} className="btn btn-secondary">
                Volver
              </Link>
              <input className="btn btn-primary" type="submit" value="Crear" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UbicacionForm;
