import React from "react";
import { Header } from './../components/Header';

export const Login = () => {
  return <>
    <Header></Header>
    <main>
      <div className="login">
        <div className="container">
          <h1>Iniciar sesión</h1>
          <form className="login__form">
            <label className="movilTextoPrincipal" >Nombre de usuario</label>
            <input className="movilTextoPrincipal login__input" placeholder="Ingresa tu usuario" 
            type={'text'}>
            </input>
            <label className="movilTextoPrincipal" >Nombre de usuario</label>
            <input className="movilTextoPrincipal login__input" placeholder="Ingresa tu usuario" 
            type={'text'}>
            </input>
              <button className="btn login__buttonSubmit"><p className="movilTextoPrincipal">Iniciar sesión</p></button>
              <button className="btn login__buttonRegister"><p className="movilTextoPrincipal">Registrarse</p></button>
          </form>
        </div>
      </div>
    </main>
  </>;
};
