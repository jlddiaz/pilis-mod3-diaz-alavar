import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import UbicacionShow from "./routes/ubicacion/UbicacionShow";
import UbicacionForm from "./components/formulario/UbicacionForm";
import { UbicacionesContext } from "./context/UbicacionesContext";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
const data = [
  {
    id: 2,
    nombre: "hola",
    latitud: "643876473",
    longitud: "476346374",
    temperatura: 20,
    velocidad_del_viento: 20
  },
];
function App() {
  const [ubicaciones, setUbicaciones] = useState(data);
  return (
    <div className="App">
      <UbicacionesContext.Provider value={{ ubicaciones, setUbicaciones }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva" element={<UbicacionForm/>}/>
        <Route path="/ubicacion/:id" element={<UbicacionShow />} />
      </Routes>
      </UbicacionesContext.Provider>
    </div>
  );
}

export default App;
