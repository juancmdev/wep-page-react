import React from "react";

import { useRouteError, Link } from "react-router-dom";

const Notfound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver al Inicio </Link>
    </div>
  );
};

export default Notfound;
