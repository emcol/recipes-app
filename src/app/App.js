import React from "react";

import { AllRecipes } from "../features/allRecipes/AllRecipes.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes.js";

export function App(props) {
  const { state, dispatch } = props;

  const visibleAllRecipes = getFilteredRecipes(
    state.allRecipes,
    state.searchTerm
  );
  //eslint-disable-next-line no-unused-vars
  const visibleFavoriteRecipes = getFilteredRecipes(
    state.favoriteRecipes,
    state.searchTerm
  );

  return (
    <main>
      <section>
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes
          favoriteRecipes={state.favoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
      </section>
    </main>
  );
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
