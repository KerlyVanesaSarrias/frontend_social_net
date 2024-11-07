import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from "../components/layouts/public/PublicLayout.jsx"
import { PrivateLayout } from "../components/layouts/private/PrivateLayout.jsx"
import { Login } from "../components/user/Login.jsx"
import { Register } from "../components/user/Register.jsx"
import { Config } from "../components/user/Config.jsx"
import { People } from "../components/user/People.jsx"
import { Error404 } from "../components/layouts/Error404.jsx"
import { AuthProvider } from "../components/context/AuthProvider.jsx"
import { Logout } from "../components/user/Logout.jsx"
import { Following } from "../components/follow/Following.jsx"
import { Followers } from "../components/follow/Followers.jsx"
import { Profile } from "../components/user/Profile.jsx"
import { PublicationDetail } from "../components/publication/PublicationDetail.jsx"
import { MyPublications } from "../components/publication/MyPublications.jsx"
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
                        <Route path="gente" element={<People />} />
                        <Route path="ajustes" element={<Config />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='siguiendo/:userId' element={<Following />} />
                        <Route path='seguidores/:userId' element={<Followers />} />
                        <Route path="perfil/:userId" element={<Profile />} />
                        <Route path="mis-publicaciones" element={<MyPublications />} />
                        <Route path="publicacion/:id" element={<PublicationDetail />} />

                    </Route>

                    <Route path="*" element={<Error404 />} />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}   