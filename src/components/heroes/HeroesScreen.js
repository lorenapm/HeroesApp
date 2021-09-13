import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroeById } from "../../selectors/getHeroById";

export const HeroesScreen = () => {
  const { heroeId } = useParams();
  console.log(heroeId);

  const hero = getHeroeById(heroeId);
  console.log(hero);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div>
      <h1>HeroesScreen</h1>
    </div>
  );
};
