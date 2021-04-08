import React from "react";
import { Link } from "react-router-dom";

const Launch = ({ launch }) => {
  return (
    <Link to={`/launch/${launch}`} className="launch-id">
      {launch}
    </Link>
  );
};

export default Launch;
