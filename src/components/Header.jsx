import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = ({title, menu, canBack, path}) => {
  return <header>
    <div className="header">
    {canBack ? <Link to={path}>
      <button className='navButton'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </Link> : null}
    <h1>{title}</h1>
    <div className="">
    <button className='menuMovil'>
        <FontAwesomeIcon icon={faBars} />
    </button>
    </div>
    </div>
  </header>;
};
