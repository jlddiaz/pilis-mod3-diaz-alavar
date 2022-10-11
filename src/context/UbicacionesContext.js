import { createContext } from "react";

export const UbicacionesContext = createContext({
    ubicaciones: [],
    setUbicaciones: () => {}
})