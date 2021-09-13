import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroeById } from "../../selectors/getHeroById";

export const HeroesScreen = (props) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

  const handleReturn = () => {
    if (props.history.length <= 2) {
      props.history.push("/");
    } else {
      props.history.goBack();
    }
  };

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First appearance: {first_appearance}</b>
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
