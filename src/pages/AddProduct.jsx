import React from "react";
import { Header } from './../components/Header';

export const AddProduct = () => {
  return <>
    <Header title={"AddProduct"} canBack={true} path={"/"}></Header>
    <main>
      <div className="addProduct">
        <div className="container">
          <h1>Agregar un nuevo articulo</h1>
          <form className="login__form">
            <label className="movilTextoPrincipal" >Nombre del producto</label>
            <input className="movilTextoPrincipal addProduct__input" placeholder="Producto"
              type={'text'}>
            </input>
            <label className="movilTextoPrincipal">Descripción</label>
            <textarea className="movilTextoPrincipal addProduct__textArea" placeholder="Descripción"
              type={'text'}>
            </textarea>
            <div>
            <label className="movilTextoPrincipal">Precio</label>
            <input className="movilTextoPrincipal addProduct__input" placeholder="Precio"
              type={'number'}>
            </input>
            </div>
            <div>
            <label className="movilTextoPrincipal" > Disponibilidad</label>
            <input className="movilTextoPrincipal addProduct__input" placeholder="Disponibilidad"
              type={'number'}>
            </input>
            </div>
            <label className="movilTextoPrincipal" > Image</label>
            <input className="movilTextoPrincipal addProduct__inputImage" alt="Inserta la imagen aqui"
              type={'file'} accept="image/png,image/jpeg">
            </input>
            <button className="btn login__buttonSubmit"><p className="movilTextoPrincipal">Iniciar sesión</p></button>
            <button className="btn login__buttonRegister"><p className="movilTextoPrincipal">Registrarse</p></button>
          </form>
        </div>
      </div>
    </main>
  </>;
};
