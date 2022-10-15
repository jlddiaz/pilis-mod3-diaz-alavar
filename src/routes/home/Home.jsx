import { Link } from "react-router-dom";
import Ubicaciones from "../../components/ubicacion/Ubicaciones";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import { FaPlus } from "react-icons/fa";
const Home = () => {
  // const [ubicaciones, setUbicaciones] = useState(data);
  return (
    // <UbicacionesContext.Provider value={{ ubicaciones, setUbicaciones }}>
    <div className="main-container">
      <header><h1>Proyecto Tarjeta de Ubicaciones</h1></header>
      <Link to="/nueva" className="btn btn-home">
        <FaPlus/>
        Crear Ubicacion
      </Link>
      <Ubicaciones />
    </div>
    // </UbicacionesContext.Provider>
  );
};
export default Home;
