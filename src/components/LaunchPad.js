import React from "react";
import Launch from "./Launch";

const LaunchPad = ({ name, details, status, launches }) => {
  return (
    <article className="launchpad">
      <div className="header">
        <h3>{name}</h3>
        <p>
          Status: <span>{status}</span>
        </p>
      </div>
      <div className="desc">{details}</div>
      <div className="launches">
        <p>Launches</p>
        {launches.length === 0 && (
          <div className="launch-id">No Launch Available</div>
        )}
        {launches.map((launch, index) => {
          if (index < 3) {
            return <Launch key={index} launch={launch} />;
          }
        })}
      </div>
    </article>
  );
};

export default LaunchPad;
