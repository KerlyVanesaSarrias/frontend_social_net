import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { Global } from '../../helpers/Global.jsx';
import Swal from 'sweetalert2';

export const Register = () => {

  const { form, changed } = useForm({});

  const [ saved, setSaved ] = useState("not sended");

  const navigate = useNavigate();

  const saveUser = async (e) => {

    e.preventDefault();

    let newUser = form;

    const request = await fetch(Global.url + 'user/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await request.json();

    if(request.status === 200 && data.status === "created"){
      setSaved("saved");

      Swal.fire({
        title: data.message,
        icon: 'success',
        confirmButtonText: 'Continuar',
      }).then(() => {
        navigate('/login');
      });

    } else {
      setSaved("error");

      Swal.fire({
        title: data.message || "¡Error en el registro!",
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    };
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">
        <div className="form-style">

          {saved == "saved" ? (
            <strong className="alert alert-success">¡Usuario registrado correctamente!</strong>
          ) : ''}
          {saved == "error" ? (
            <strong className="alert alert-danger">¡El Usuario no se ha registrado correctamente!</strong>
          ) : ''}


          <form className="register-form" onSubmit={saveUser}>
            <div className="form-group">
              <label htmlFor="name">Nombres</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={changed}
                value={form.name || ''}
                autoComplete="given-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellidos</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                onChange={changed}
                value={form.lastName || ''}
                autoComplete="family-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nick">Nick</label>
              <input
                type="text"
                id="nick"
                name="nick"
                required
                onChange={changed}
                value={form.nick || ''}
                autoComplete="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={changed}
                value={form.email || ''}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Biografía</label>
              <input
                type="text"
                id="bio"
                name="bio"
                onChange={changed}
                value={form.bio || ''}
                autoComplete="biografía"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={changed}
                value={form.password || ''}
                autoComplete="new-password"
              />
            </div>

            <input
              type="submit"
              value="Regístrate"
              className="btn btn-success"
            />
          </form>
        </div>
      </div>
    </>
  )
}