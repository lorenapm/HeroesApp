import { heroes } from "../data/data";

export const getHeroesByPublisher = (publisher) => {
  //validación:si me envía cualquier cosa que no esté en este arreglo, voy a marcar error
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no es correcto`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
