import { Outlet } from "react-router-dom";
import { HeaderPub } from "./HeaderPub";

export const PublicLayout = () => {
  return (
    <>
      {/* Menú de Navegación Principal - Public*/}
      <HeaderPub />

      {/* Contenido Principal - Public*/}
      <section>
        <Outlet />
      </section>
    </>
  )
}
