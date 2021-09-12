import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <h2>List Marvel Heroes</h2>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
