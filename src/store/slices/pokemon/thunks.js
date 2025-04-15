import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // const res = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`
    // );
    // const data = await res.json();
    const { data } = await pokemonApi.get(
      `pokemon?offset=${page * 10}&limit=10`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
