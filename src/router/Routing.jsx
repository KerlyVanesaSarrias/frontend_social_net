import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"
import { Login } from "../components/user/Login"
import { Register } from "../components/user/Register"
import Feed from "../components/publication/feed"
import Config from "../components/user/Config"
import People from "../components/user/People"
import { Error404 } from "../components/layouts/Error404"

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cargamos los componentes de la ruta pública */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />




        </Route>

        {/* Cargamos los componentes de la ruta privada */}
        <Route path="/rsocial" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
          <Route path="people" element={<People />} />
          <Route path="settings" element={<Config />} />
        </Route>

        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  )
}   