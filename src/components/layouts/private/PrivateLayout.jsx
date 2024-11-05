import { Outlet } from "react-router-dom";
import { HeaderPriv } from "./HeaderPriv.jsx";

export const PrivateLayout = () => {
  return (
    <>
      {/* Menú de Navegación Principal */}
      <HeaderPriv />

      {/* Contenido Principal */}
      <section>
        <Outlet />

      </section>
      {/* Sidebar o Barra Lateral */}

    </>
  )
}