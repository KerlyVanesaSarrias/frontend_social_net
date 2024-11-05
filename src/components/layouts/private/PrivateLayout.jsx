import { Outlet } from "react-router-dom";
import { HeaderPriv } from "./HeaderPriv.jsx";
import { Sidebar } from "./Sidebar.jsx";

export const PrivateLayout = () => {
  return (
    <>
      {/* Menú de Navegación Principal */}
      <HeaderPriv />

      {/* Contenido Principal */}
      <section>
        <Outlet />
        <Sidebar/>
      </section>
      {/* Sidebar o Barra Lateral */}
      

    </>
  )
}