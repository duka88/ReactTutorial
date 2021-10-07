import React from "react";
import { Link } from "react-router-dom";
import CocktailList from "./CocktailList";
import SearchForm from "./SearchForm";

const Cocktail = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Cocktail;
