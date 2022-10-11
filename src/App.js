import './App.css'
import { useState } from "react";
import Ubicaciones from "./components/ubicacion/Ubicaciones";
import UbicacionForm from "./components/formulario/UbicacionForm";
import { UbicacionesContext } from "./context/UbicacionesContext";

const data = [
  {
    id: 2,
    nombre: 'hola',
    latitud: '643876473',
    longitud: '476346374'
  }
]
function App() {
  const [ ubicaciones, setUbicaciones ] = useState(data);
  return (
    <UbicacionesContext.Provider value={{ ubicaciones, setUbicaciones }}>
      <div className="App">
        <header>
          <h1>Proyecto Tarjeta de Ubicaciones</h1>
        </header>
        <div className="main-container">
          <UbicacionForm />
          <Ubicaciones ubicaciones={ubicaciones} />
        </div>
      </div>
    </UbicacionesContext.Provider>
  );
}

export default App;
