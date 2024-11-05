import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cargamos los componentes de la ruta pública */}
        <Route path="/" element={<PublicLayout />}>

        </Route>

        {/* Cargamos los componentes de la ruta privada */}
        <Route path="/rsocial" element={<PrivateLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}   