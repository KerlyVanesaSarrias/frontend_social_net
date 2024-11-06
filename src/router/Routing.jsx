import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout"
import { Login } from "../components/user/Login"
import { Register } from "../components/user/Register"
import { Config } from "../components/user/Config.jsx"
import { People } from "../components/user/People"
import { Error404 } from "../components/layouts/Error404"
import { AuthProvider } from "../components/context/AuthProvider"
import { Logout } from "../components/user/Logout"
import { Following } from "../components/follow/Following"
import { Followers } from "../components/follow/Followers"
import { Profile } from "../components/user/Profile"
import { PublicationDetail } from "../components/publication/PublicationDetail"
import { MyPublications } from "../components/publication/MyPublications"
import { Feed } from "../components/publication/Feed.jsx"

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
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
            <Route path='logout' element={<Logout />} />
            <Route path='siguiendo/:userId' element={<Following />} />
            <Route path='seguidores/:userId' element={<Followers />} />
            <Route path="perfil/:userId" element={<Profile/>} />
            <Route path="mis-publicaciones" element={<MyPublications />} />
            <Route path="publicacion/:id" element={<PublicationDetail />} />
  
          </Route>

          <Route path="*" element={<Error404 />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}   