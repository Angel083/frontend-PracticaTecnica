import React from "react";
import { Header } from './../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Home = () => {
  return <>
    <Header title={"Productos"} canBack={false} path={""}></Header>
    <main>
    <Link to="/AddProduct">
        <button className='btn button__add'>
          <FontAwesomeIcon icon={faPlus} />
          <div className="button__add__text movilTextoPrincipal">
          <p>Agregar</p>
          </div>
        </button>
      </Link>
    </main>
  </>;
};
