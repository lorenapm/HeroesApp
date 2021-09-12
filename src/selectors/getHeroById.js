import { heroes } from "../data/data";

export const getHeroeById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
