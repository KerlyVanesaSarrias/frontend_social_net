import { Outlet } from "react-router-dom";
import { HeaderPriv } from "./components/layouts/private/HeaderPriv";

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