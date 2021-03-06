import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3 mb-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{superhero}</h4>
            <h6 className="card-text">{alter_ego}</h6>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted"> {first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`}>More...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
