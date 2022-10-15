import { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import Ubicacion from "./Ubicacion";
import "./Ubicaciones.css";

const Ubicaciones = () => {
  const { ubicaciones } = useContext(UbicacionesContext)
  console.log(ubicaciones);
  return (
    <div className="grid">
      {ubicaciones.map((ubicacion) => (
        <Ubicacion key={ubicacion.id} ubicacion={ubicacion} />
      ))}
    </div>
  );
};

export default Ubicaciones;
