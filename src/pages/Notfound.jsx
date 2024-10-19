import React from "react";

import { useRouteError } from "react-router-dom";

const Notfound = () => {
  const error = useRouteError();
  console.log(error);

  return <div>Notfound</div>;
};

export default Notfound;
