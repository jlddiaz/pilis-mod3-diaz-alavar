import './Ubicacion.css'
const Ubicacion = ({ ubicacion }) => {
  const { nombre, latitud, longitud } = ubicacion;
  console.log(ubicacion);
  return (
    <div className="ubicacion-container">
      <div className="ubicacion">
        <label htmlFor="">{nombre}</label>
        <br />
        <label htmlFor="">{latitud}</label>
        <br />
        <label htmlFor="">{longitud}</label>
      </div>
    </div>
  );
};

export default Ubicacion;
