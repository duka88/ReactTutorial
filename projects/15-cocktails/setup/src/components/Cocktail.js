import React from "react";
import { Link } from "react-router-dom";
import CocktailList from "./CocktailList";
import SearchForm from "./SearchForm";

const Cocktail = ({ id, img, name, info, glass }) => {
  return (
    <article className>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-deatils">
          Deatils
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
