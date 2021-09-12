import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    //push: permite volver atrás en la pantalla de nav
    //history.push("/");
    //replace: no permite volver atras en la navegación
    history.replace("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
