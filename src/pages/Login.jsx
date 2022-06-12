import React from "react";
import { Header } from './../components/Header';
import * as Yup from 'yup';
import  Axios  from 'axios';
import { useNavigate } from "react-router-dom";
import url from "./../global/global"
import { useFormik } from 'formik';

export const Login = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues :{
      userName : "",
      password : "",
    },
    onSubmit: (values) => {
      Axios.post(`${url}/login`, values)
        .then(({data}) => {
        navigate("/")
          })
      
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .label("Usuario")
        .required("El usuario es requerido"),
        password: Yup.string()
        .label("Contraseña")
        .required("La contraseña es requerido")
    })
  })
  return <>
    <Header></Header>
    <main>
      <div className="login">
        <div className="container">
          <h1>Iniciar sesión</h1>
          <form onSubmit={formik.handleSubmit} className="login__form">
            <div>
              <label className="movilTextoPrincipal">Nombre de usuario</label>
              <input
                name="userName" id="userName"
                type={'text'}
                className="movilTextoPrincipal login__input"
                placeholder="Ingresa tu usuario"
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} 
                >
              </input>
              {formik.touched.userName && formik.errors.userName && (
                <span className='text-red movilTextoPrincipal'>{formik.errors.userName}</span>)}
            </div>
            <label className="movilTextoPrincipal" >Contraseña</label>
            <input
              name="password" id="password"
              className="movilTextoPrincipal login__input" 
              type='password'
              placeholder="Ingresa tu usuario" 
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
              >
            </input>
            {formik.touched.password && formik.errors.password && (
                <span className='text-red movilTextoPrincipal'>{formik.errors.password}</span>)}
              <button type='submit' className="btn login__buttonSubmit movilTextoPrincipal">Iniciar sesión</button>
              <button className="btn login__buttonRegister movilTextoPrincipal">Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  </>;
};
