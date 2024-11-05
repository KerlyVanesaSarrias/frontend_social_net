import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"
import { Login } from "../components/user/Login"
import { Register } from "../components/user/Register"
import Feed from "../components/publication/feed"

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cargamos los componentes de la ruta pública */}
        <Route path="/" element={<PublicLayout/>}>
        <Route index element={<Login/>} />
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register/>}/>
          



        </Route>

        {/* Cargamos los componentes de la ruta privada */}
        <Route path="/rsocial" element={<PrivateLayout/>}>
        <Route index element={<Feed/>} />
        <Route path="feed" element={<Feed/>}/>
        <Route path="people" element={<Feed/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}   