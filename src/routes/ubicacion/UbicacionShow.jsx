import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UbicacionesContext } from "../../context/UbicacionesContext";

const UbicacionShow = () => {
  const { id } = useParams();
  const {ubicaciones } = useContext(UbicacionesContext);
  const [ubicacion] = ubicaciones.filter(
    (ubi) => ubi.id === Number(id)
  );
  return (
    <>
    <h1>{ubicacion.id}</h1>
    <label htmlFor="">{ubicacion.nombre}</label><br />
    <label htmlFor="">{ubicacion.latitud}</label><br />
    <label htmlFor="">{ubicacion.longitud}</label><br />
    <Link to='/' >Volver</Link>
    </>
  );
};
export default UbicacionShow;
