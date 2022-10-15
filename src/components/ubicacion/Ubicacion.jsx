import { Link } from "react-router-dom";
import "./Ubicacion.css";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
const Ubicacion = ({ ubicacion }) => {
  const { id, nombre, latitud, longitud, temperatura, velocidad_del_viento } = ubicacion;
  return (
    <div className="card ubicacion-container">
      <div className="card-header">
        <h5 className="card-title">{nombre}</h5>
      </div>
      <div className="card-body">
        <div className="ubicacion">
        
          <span> <b>Latitud: </b>{latitud}</span>
          <span><b>Longitud: </b>{longitud}</span> 
          <span><FaTemperatureHigh/><b>Temperatura: </b>{temperatura}°C</span>
          
          <span><FaWind/><b>Velocidad del viento: </b>{velocidad_del_viento}Km/h</span>         
        </div>
      </div>
      <div className="card-footer rg">
        <Link to={`/ubicacion/${id}`} className="btn btn-dark">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Ubicacion;
